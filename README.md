# VJ Films

Full-stack movie library for VJ-translated films. The browser UI is served by the Node backend, movie metadata is stored in `data/library.json`, and uploaded posters/videos are stored in `data/uploads/`.

## Run locally

1. Install Node.js 18 or newer.
2. Run `npm install`.
3. Set an admin passcode: `ADMIN_PASSCODE=your-secret npm start`.
4. Open `http://localhost:3000`.

The default passcode is `change-me-now` if the environment variable is omitted. Change it before exposing the server publicly.

## API behavior

- `GET /api/movies` returns the shared movie library and the current device's `viewed` state.
- `POST /api/movies/:id/viewed` records a viewed movie for the `X-Device-Id` header.
- `POST /api/admin/login` authenticates the admin passcode.
- `POST /api/movies` uploads a movie using the admin token and multipart fields `title`, `genre`, `vj`, `desc`, `poster`, `video`, and `download`.
- `DELETE /api/movies/:id` removes a movie and its uploaded files.

The device ID is kept in each browser's local storage, while the viewed records are stored on the server, so the same device can retain its history across sessions and the library is available to all devices.

## Search by website name

The page includes canonical metadata, social previews, and Schema.org website data for the name `VJ Films Uganda`. The public Pages URL is `https://rolandmugagga-arch.github.io/filmz-website/`; submit that URL as a URL-prefix property, verify the HTML file, and submit `/sitemap.xml` in Google Search Console.

