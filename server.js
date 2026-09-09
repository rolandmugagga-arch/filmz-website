import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import multer from 'multer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');
const dataDir = path.join(__dirname, 'data');
const uploadsDir = path.join(dataDir, 'uploads');
const dbFile = path.join(dataDir, 'library.json');
const port = Number(process.env.PORT || 3000);
const adminPasscode = process.env.ADMIN_PASSCODE || 'change-me-now';

fs.mkdirSync(uploadsDir, { recursive: true });
if (!fs.existsSync(dbFile)) fs.writeFileSync(dbFile, JSON.stringify({ movies: [], views: {} }, null, 2));

function readDb() {
  try {
    const db = JSON.parse(fs.readFileSync(dbFile, 'utf8'));
    return { movies: db.movies || [], views: db.views || {} };
  } catch {
    return { movies: [], views: {} };
  }
}
function writeDb(db) {
  const tempFile = `${dbFile}.tmp`;
  fs.writeFileSync(tempFile, JSON.stringify(db, null, 2));
  fs.renameSync(tempFile, dbFile);
}
function adminOnly(req, res, next) {
  const token = req.get('x-admin-token');
  if (!token || token !== adminPasscode) return res.status(401).json({ error: 'Admin authentication required' });
  next();
}
function safeFileName(name) {
  return `${Date.now()}-${crypto.randomBytes(6).toString('hex')}-${name.replace(/[^a-z0-9._-]/gi, '_')}`;
}

const storage = multer.diskStorage({
  destination: uploadsDir,
  filename: (_req, file, callback) => callback(null, safeFileName(file.originalname))
});
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 * 1024 },
  fileFilter: (_req, file, callback) => {
    const allowed = file.fieldname === 'poster' ? file.mimetype.startsWith('image/') : file.mimetype.startsWith('video/');
    callback(allowed ? null : new Error('Invalid media type'), allowed);
  }
});

const app = express();
app.use(express.json({ limit: '1mb' }));
app.use('/media', express.static(uploadsDir));

app.post('/api/admin/login', (req, res) => {
  if (req.body?.passcode !== adminPasscode) return res.status(401).json({ error: 'Incorrect passcode' });
  res.json({ token: adminPasscode });
});

app.get('/api/movies', (req, res) => {
  const db = readDb();
  const deviceId = String(req.get('x-device-id') || '').slice(0, 100);
  const viewed = new Set(deviceId ? (db.views[deviceId] || []) : []);
  res.json(db.movies.map(movie => ({ ...movie, viewed: viewed.has(movie.id) })));
});

app.post('/api/movies/:id/viewed', (req, res) => {
  const deviceId = String(req.get('x-device-id') || '').trim();
  if (!deviceId) return res.status(400).json({ error: 'Device id is required' });
  const db = readDb();
  if (!db.movies.some(movie => movie.id === req.params.id)) return res.status(404).json({ error: 'Movie not found' });
  db.views[deviceId] = Array.from(new Set([...(db.views[deviceId] || []), req.params.id]));
  writeDb(db);
  res.json({ viewed: true });
});

app.post('/api/movies', adminOnly, upload.fields([
  { name: 'poster', maxCount: 1 },
  { name: 'video', maxCount: 1 },
  { name: 'download', maxCount: 1 }
]), (req, res) => {
  const { title, genre, vj, desc = '' } = req.body;
  const video = req.files?.video?.[0];
  if (!title || !genre || !vj || !video) return res.status(400).json({ error: 'Title, genre, VJ, and video are required' });
  const poster = req.files?.poster?.[0];
  const download = req.files?.download?.[0] || video;
  const movie = {
    id: `m_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`,
    title: title.trim(), genre: genre.trim(), vj: vj.trim(), desc: desc.trim() || `${title.trim()} - translated by ${vj.trim()}.`,
    poster: poster ? `/media/${poster.filename}` : '', video: `/media/${video.filename}`, download: `/media/${download.filename}`, added: Date.now()
  };
  const db = readDb();
  db.movies.unshift(movie);
  writeDb(db);
  res.status(201).json({ ...movie, viewed: false });
});

app.delete('/api/movies/:id', adminOnly, (req, res) => {
  const db = readDb();
  const movie = db.movies.find(item => item.id === req.params.id);
  if (!movie) return res.status(404).json({ error: 'Movie not found' });
  db.movies = db.movies.filter(item => item.id !== req.params.id);
  Object.values(db.views).forEach(viewed => {
    const index = viewed.indexOf(req.params.id);
    if (index !== -1) viewed.splice(index, 1);
  });
  for (const url of [movie.poster, movie.video, movie.download]) {
    if (url?.startsWith('/media/')) fs.rmSync(path.join(uploadsDir, path.basename(url)), { force: true });
  }
  writeDb(db);
  res.status(204).end();
});

app.use(express.static(publicDir));
app.get('*', (_req, res) => res.sendFile(path.join(publicDir, 'index.html')));
app.use((error, _req, res, _next) => res.status(400).json({ error: error.message || 'Request failed' }));

app.listen(port, () => console.log(`VJ Films running at http://localhost:${port}`));
