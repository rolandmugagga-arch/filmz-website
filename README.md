[index_3.html](https://github.com/user-attachments/files/31828911/index_3.html)
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vj Films Uganda | VJ Translated Movies</title>
<meta name="description" content="Vj Films Uganda brings VJ translated movies, Ugandan cinema entertainment, and new film releases in one place.">
<meta name="keywords" content="Vj Films Uganda, Ugandan movies, VJ translated movies, Uganda cinema">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap');

  :root{
    --bg:            #121014;
    --bg-panel:      #1c1a1f;
    --bg-panel-2:    #24222a;
    --gold:          #e3b23c;
    --gold-dim:      #a9822c;
    --scarlet:       #c22d2d;
    --cream:         #f3ede1;
    --muted:         #9a94a3;
    --line:          rgba(227, 178, 60, 0.18);
    --shadow:        0 20px 50px rgba(0,0,0,0.55);
    --radius:        10px;
  }

  *{box-sizing:border-box; margin:0; padding:0;}

  html{scroll-behavior:smooth;}

  body{
    background:
      radial-gradient(1200px 600px at 15% -10%, rgba(227,178,60,0.08), transparent 60%),
      radial-gradient(900px 500px at 90% 10%, rgba(194,45,45,0.06), transparent 55%),
      var(--bg);
    color:var(--cream);
    font-family:'Inter', sans-serif;
    min-height:100vh;
    overflow-x:hidden;
  }

  .display{font-family:'Bebas Neue', sans-serif; letter-spacing:0.03em;}

  a{color:inherit; text-decoration:none;}
  button{font-family:inherit; cursor:pointer;}

  ::selection{background:var(--gold); color:#1a1a1a;}

  /* ===== Film-grain overlay ===== */
  .grain{
    position:fixed; inset:0; pointer-events:none; z-index:5000;
    opacity:0.045; mix-blend-mode:overlay;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  /* ===== Header / marquee bar ===== */
  header{
    position:sticky; top:0; z-index:900;
    background:rgba(18,16,20,0.86);
    backdrop-filter:blur(10px);
    border-bottom:1px solid var(--line);
  }
  .marquee-strip{
    background:linear-gradient(90deg, var(--scarlet), #8f1f1f);
    color:var(--cream);
    font-size:0.72rem; font-weight:700; letter-spacing:0.14em;
    text-transform:uppercase;
    padding:5px 0;
    overflow:hidden;
    white-space:nowrap;
  }
  .marquee-strip span{display:inline-block; padding-left:100%; animation:scroll-left 22s linear infinite;}
  @keyframes scroll-left{ from{transform:translateX(0);} to{transform:translateX(-100%);} }

  .nav{
    max-width:1280px; margin:0 auto;
    display:flex; align-items:center; justify-content:space-between;
    padding:16px 28px;
    gap:20px;
  }
  .logo{
    font-family:'Bebas Neue', sans-serif;
    font-size:1.9rem; letter-spacing:0.06em;
    display:flex; align-items:baseline; gap:6px;
  }
  .logo .vj{color:var(--gold);}
  .logo .films{color:var(--cream);}
  .logo small{font-family:'Inter'; font-size:0.55rem; letter-spacing:0.25em; color:var(--muted); text-transform:uppercase; margin-left:6px;}

  .nav-links{display:flex; gap:26px; align-items:center; font-size:0.86rem; font-weight:600;}
  .nav-links a{color:var(--muted); transition:color .2s; position:relative; padding:4px 0;}
  .nav-links a:hover, .nav-links a.active{color:var(--gold);}
  .nav-links a.active::after{
    content:''; position:absolute; left:0; right:0; bottom:-2px; height:2px; background:var(--gold);
  }

  .search-box{
    display:flex; align-items:center; gap:8px;
    background:var(--bg-panel); border:1px solid var(--line);
    border-radius:30px; padding:8px 16px; min-width:220px;
  }
  .search-box input{
    background:transparent; border:none; outline:none; color:var(--cream);
    font-size:0.85rem; width:100%;
  }
  .search-box input::placeholder{color:var(--muted);}

  .admin-btn{
    background:transparent; border:1px solid var(--gold-dim); color:var(--gold);
    padding:8px 16px; border-radius:30px; font-size:0.78rem; font-weight:700;
    letter-spacing:0.05em; transition:all .2s;
  }
  .admin-btn:hover{background:var(--gold); color:#1a1408;}

  .burger{display:none; background:none; border:none; color:var(--cream); font-size:1.4rem;}

  /* ===== Hero ===== */
  .hero{
    position:relative;
    height:82vh; min-height:520px;
    display:flex; align-items:flex-end;
    padding:0 28px 60px;
    overflow:hidden;
  }
  .hero-bg{
    position:absolute; inset:0;
    background: linear-gradient(180deg, rgba(18,16,20,0.15) 0%, rgba(18,16,20,0.55) 55%, var(--bg) 100%),
                linear-gradient(115deg, #241c14 0%, #1a1418 45%, #151319 100%);
    z-index:0;
  }
  .hero-bg::before{
    content:'';
    position:absolute; inset:0;
    background-image:
      repeating-linear-gradient(115deg, rgba(227,178,60,0.05) 0 2px, transparent 2px 140px);
  }
  .hero-reel{
    position:absolute; right:-60px; top:-60px; width:420px; height:420px; opacity:0.06;
  }
  .hero-content{position:relative; z-index:2; max-width:1280px; margin:0 auto; width:100%;}
  .hero-tag{
    display:inline-flex; align-items:center; gap:8px;
    background:rgba(194,45,45,0.15); border:1px solid rgba(194,45,45,0.5);
    color:#ff8a8a; font-size:0.7rem; font-weight:800; letter-spacing:0.14em;
    padding:6px 14px; border-radius:30px; text-transform:uppercase; margin-bottom:18px;
  }
  .hero-tag .dot{width:7px; height:7px; border-radius:50%; background:#ff4d4d; animation:pulse 1.4s infinite;}
  @keyframes pulse{0%,100%{opacity:1;} 50%{opacity:0.25;}}

  .hero h1{
    font-size:clamp(2.6rem, 6vw, 5.2rem);
    line-height:0.95;
    color:var(--cream);
    max-width:760px;
    margin-bottom:18px;
  }
  .hero h1 .accent{color:var(--gold);}
  .hero p{color:var(--muted); max-width:520px; font-size:1.02rem; margin-bottom:28px; line-height:1.6;}
  .hero-meta{display:flex; gap:14px; align-items:center; margin-bottom:28px; font-size:0.85rem; color:var(--muted);}
  .hero-meta .pill{border:1px solid var(--line); padding:4px 12px; border-radius:6px;}
  .hero-actions{display:flex; gap:14px; flex-wrap:wrap;}
  .btn-primary{
    background:var(--gold); color:#1a1408; font-weight:800; padding:14px 30px;
    border-radius:6px; border:none; font-size:0.92rem; letter-spacing:0.03em;
    display:inline-flex; align-items:center; gap:10px;
    transition:transform .15s, box-shadow .15s;
  }
  .btn-primary:hover{transform:translateY(-2px); box-shadow:0 10px 24px rgba(227,178,60,0.25);}
  .btn-ghost{
    background:rgba(255,255,255,0.06); color:var(--cream); font-weight:700; padding:14px 26px;
    border-radius:6px; border:1px solid rgba(255,255,255,0.15); font-size:0.92rem;
    display:inline-flex; align-items:center; gap:10px;
  }
  .btn-ghost:hover{background:rgba(255,255,255,0.1);}

  /* ===== Section shell ===== */
  .section{max-width:1280px; margin:0 auto; padding:56px 28px;}
  .section-head{
    display:flex; align-items:baseline; justify-content:space-between; margin-bottom:22px;
    border-bottom:1px solid var(--line); padding-bottom:14px;
  }
  .section-head h2{font-family:'Bebas Neue'; font-size:1.9rem; letter-spacing:0.03em; color:var(--cream);}
  .section-head h2 .num{color:var(--gold); font-size:1.1rem; margin-right:8px; font-family:'Inter'; font-weight:800;}
  .section-head .see-all{font-size:0.8rem; color:var(--muted); font-weight:700; letter-spacing:0.04em;}
  .section-head .see-all:hover{color:var(--gold);}

  /* ===== VJ spotlight row ===== */
  .vj-row{display:flex; gap:26px; overflow-x:auto; padding:10px 4px 20px; scrollbar-width:thin;}
  .vj-row::-webkit-scrollbar{height:6px;}
  .vj-row::-webkit-scrollbar-thumb{background:var(--gold-dim); border-radius:4px;}

  .vj-card{
    flex:0 0 auto; width:118px; text-align:center; cursor:pointer;
    transition:transform .2s;
  }
  .vj-card:hover{transform:translateY(-4px);}
  .vj-avatar-wrap{
    position:relative; width:100px; height:100px; margin:0 auto 10px;
  }
  .vj-avatar-wrap svg{position:absolute; inset:0; width:100%; height:100%;}
  .vj-avatar{
    position:absolute; inset:8px; border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    font-family:'Bebas Neue'; font-size:1.6rem; color:#1a1408;
    background:linear-gradient(140deg, var(--gold), #b9862f);
    border:2px solid var(--bg);
  }
  .vj-card.active .vj-avatar{outline:2px solid var(--scarlet); outline-offset:2px;}
  .vj-name{font-size:0.82rem; font-weight:700; color:var(--cream);}
  .vj-count{font-size:0.7rem; color:var(--muted);}

  /* ===== Genre chips ===== */
  .genre-chips{display:flex; gap:10px; flex-wrap:wrap; margin-bottom:30px;}
  .chip{
    padding:9px 18px; border-radius:30px; font-size:0.82rem; font-weight:700;
    border:1px solid var(--line); color:var(--muted); background:var(--bg-panel);
    transition:all .18s;
  }
  .chip:hover{color:var(--cream); border-color:var(--gold-dim);}
  .chip.active{background:var(--gold); color:#1a1408; border-color:var(--gold);}

  /* ===== Movie grid ===== */
  .movie-grid{
    display:grid; grid-template-columns:repeat(auto-fill, minmax(180px, 1fr));
    gap:22px;
  }
  .movie-card{
    background:var(--bg-panel); border-radius:var(--radius); overflow:hidden;
    border:1px solid var(--line); cursor:pointer;
    transition:transform .2s, box-shadow .2s;
    position:relative;
  }
  .movie-card:hover{transform:translateY(-6px); box-shadow:var(--shadow);}
  .poster{
    aspect-ratio:2/3; width:100%; position:relative; overflow:hidden;
    display:flex; align-items:flex-end;
    background:linear-gradient(160deg, #2c2632, #1b1720);
  }
  .poster img{position:absolute; inset:0; width:100%; height:100%; object-fit:cover;}
  .poster .glow{
    position:absolute; inset:0;
    background:linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 55%, transparent 75%);
  }
  .poster-badge{
    position:absolute; top:9px; left:9px; z-index:2;
    background:var(--scarlet); color:var(--cream); font-size:0.62rem; font-weight:800;
    letter-spacing:0.06em; padding:3px 9px; border-radius:4px; text-transform:uppercase;
  }
  .poster-play{
    position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
    opacity:0; transition:opacity .2s; z-index:2;
    background:rgba(0,0,0,0.35);
  }
  .movie-card:hover .poster-play{opacity:1;}
  .poster-play .circle{
    width:46px; height:46px; border-radius:50%; background:var(--gold);
    display:flex; align-items:center; justify-content:center; color:#1a1408; font-size:1rem;
  }
  .card-body{padding:12px 12px 14px; position:relative; z-index:2;}
  .card-body h3{font-size:0.9rem; font-weight:700; color:var(--cream); margin-bottom:4px; line-height:1.25;}
  .card-meta{display:flex; justify-content:space-between; font-size:0.72rem; color:var(--muted);}
  .card-meta .vjtag{color:var(--gold);}

  .empty-state{
    padding:60px 20px; text-align:center; color:var(--muted); border:1px dashed var(--line);
    border-radius:var(--radius); background:var(--bg-panel);
  }
  .empty-state h3{color:var(--cream); font-family:'Bebas Neue'; font-size:1.4rem; margin-bottom:8px; letter-spacing:0.03em;}

  /* ===== Modal: movie detail ===== */
  .overlay{
    position:fixed; inset:0; background:rgba(8,7,9,0.86); backdrop-filter:blur(4px);
    z-index:2000; display:none; align-items:flex-start; justify-content:center;
    padding:40px 20px; overflow-y:auto;
  }
  .overlay.show{display:flex;}
  .modal{
    background:var(--bg-panel); border:1px solid var(--line); border-radius:14px;
    max-width:920px; width:100%; overflow:hidden; box-shadow:var(--shadow);
    animation:pop .25s ease;
  }
  @keyframes pop{ from{opacity:0; transform:translateY(14px) scale(0.98);} to{opacity:1; transform:none;} }
  .modal-close{
    position:absolute; top:18px; right:18px; z-index:5;
    width:34px; height:34px; border-radius:50%; background:rgba(0,0,0,0.5);
    border:1px solid rgba(255,255,255,0.15); color:var(--cream); font-size:1rem;
  }
  .modal-media{position:relative; aspect-ratio:16/9; background:#000;}
  .modal-media video{width:100%; height:100%; object-fit:contain; background:#000;}
  .modal-media .poster-fallback{
    position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center;
    gap:10px; color:var(--muted); background:linear-gradient(160deg,#2c2632,#1b1720);
  }
  .modal-info{padding:26px 30px 32px;}
  .modal-info h2{font-family:'Bebas Neue'; font-size:2.1rem; letter-spacing:0.03em; margin-bottom:8px;}
  .modal-tags{display:flex; gap:10px; flex-wrap:wrap; margin-bottom:16px;}
  .modal-tags span{
    font-size:0.72rem; font-weight:700; padding:4px 12px; border-radius:20px;
    border:1px solid var(--line); color:var(--muted);
  }
  .modal-tags .vj{color:var(--gold); border-color:var(--gold-dim);}
  .modal-desc{color:var(--muted); font-size:0.92rem; line-height:1.65; margin-bottom:24px;}
  .modal-actions{display:flex; gap:14px; flex-wrap:wrap;}
  .modal-urls{margin-top:18px; padding-top:16px; border-top:1px solid var(--line); display:flex; flex-direction:column; gap:8px;}
  .url-row{display:flex; align-items:baseline; gap:8px; flex-wrap:wrap; font-size:0.78rem;}
  .url-label{color:var(--muted); font-weight:700; letter-spacing:0.03em; flex-shrink:0;}
  .url-link{color:var(--gold); word-break:break-all; text-decoration:underline; text-underline-offset:2px;}
  .url-link:hover{color:var(--cream);}

  /* ===== Admin ===== */
  .admin-overlay{
    position:fixed; inset:0; background:rgba(8,7,9,0.9); z-index:3000;
    display:none; align-items:center; justify-content:center; padding:20px;
  }
  .admin-overlay.show{display:flex;}
  .admin-box{
    background:var(--bg-panel); border:1px solid var(--line); border-radius:14px;
    width:100%; max-width:480px; padding:32px; position:relative;
  }
  .admin-box h2{font-family:'Bebas Neue'; font-size:1.7rem; margin-bottom:6px; color:var(--gold);}
  .admin-box p.hint{color:var(--muted); font-size:0.82rem; margin-bottom:20px;}
  .field{margin-bottom:16px;}
  .field label{display:block; font-size:0.76rem; font-weight:700; color:var(--muted); margin-bottom:6px; letter-spacing:0.03em; text-transform:uppercase;}
  .field input, .field select, .field textarea{
    width:100%; background:var(--bg-panel-2); border:1px solid var(--line); border-radius:6px;
    padding:11px 13px; color:var(--cream); font-family:inherit; font-size:0.88rem; outline:none;
  }
  .field input:focus, .field select:focus, .field textarea:focus{border-color:var(--gold-dim);}
  .field textarea{resize:vertical; min-height:70px;}
  .field-row{display:grid; grid-template-columns:1fr 1fr; gap:12px;}
  .drop-zone{
    min-height:98px; border:1px dashed var(--gold-dim); border-radius:8px; background:var(--bg-panel-2);
    display:flex; align-items:center; justify-content:center; text-align:center; padding:14px; cursor:pointer;
    color:var(--muted); transition:background .18s, border-color .18s, transform .18s;
  }
  .drop-zone:hover,.drop-zone.dragging{border-color:var(--gold); background:rgba(227,178,60,0.08); transform:translateY(-1px);}
  .drop-zone.has-file{border-style:solid; border-color:#4bbd7a; color:var(--cream);}
  .drop-zone strong{display:block; color:var(--cream); margin-bottom:4px; font-size:.9rem;}
  .drop-zone span{font-size:.76rem; display:block;}
  .drop-zone input{display:none;}

  .admin-panel{max-width:1280px; margin:0 auto; padding:40px 28px 80px;}
  .admin-panel-head{display:flex; justify-content:space-between; align-items:center; margin-bottom:26px; flex-wrap:wrap; gap:14px;}
  .admin-panel-head h1{font-family:'Bebas Neue'; font-size:2.2rem; color:var(--gold);}
  .admin-grid{display:grid; grid-template-columns:1fr 1.3fr; gap:30px;}
  @media(max-width:900px){.admin-grid{grid-template-columns:1fr;}}
  .admin-card{background:var(--bg-panel); border:1px solid var(--line); border-radius:12px; padding:26px;}
  .admin-card h3{font-family:'Bebas Neue'; font-size:1.3rem; margin-bottom:16px; letter-spacing:0.03em;}
  .manage-list{max-height:520px; overflow-y:auto; display:flex; flex-direction:column; gap:10px;}
  .manage-row{
    display:flex; align-items:center; gap:12px; background:var(--bg-panel-2);
    border:1px solid var(--line); border-radius:8px; padding:10px 12px;
  }
  .manage-row .thumb{width:42px; height:60px; border-radius:4px; object-fit:cover; background:#2a2530; flex-shrink:0;}
  .manage-row .info{flex:1; min-width:0;}
  .manage-row .info h4{font-size:0.85rem; margin-bottom:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
  .manage-row .info span{font-size:0.7rem; color:var(--muted);}
  .manage-row button{
    background:transparent; border:1px solid rgba(194,45,45,0.5); color:#ff8a8a;
    font-size:0.7rem; font-weight:700; padding:6px 10px; border-radius:6px;
  }
  .manage-row button:hover{background:rgba(194,45,45,0.15);}

  .toast{
    position:fixed; bottom:26px; left:50%; transform:translateX(-50%) translateY(20px);
    background:var(--gold); color:#1a1408; font-weight:800; font-size:0.85rem;
    padding:13px 24px; border-radius:8px; z-index:4000; opacity:0; pointer-events:none;
    transition:all .25s; box-shadow:var(--shadow);
  }
  .toast.show{opacity:1; transform:translateX(-50%) translateY(0);}

  footer{
    border-top:1px solid var(--line); padding:40px 28px; margin-top:40px;
    text-align:center; color:var(--muted); font-size:0.8rem;
  }
  footer .logo{justify-content:center; margin-bottom:10px;}

  @media(max-width:800px){
    .nav-links{display:none;}
    .burger{display:block;}
    .search-box{display:none;}
    .hero{height:70vh;}
  }
</style>
</head>
<body>

<div class="grain"></div>

<!-- ===================== HEADER ===================== -->
<header>
  <div class="marquee-strip"><span>NOW SHOWING — NEW VJ DROPS EVERY FRIDAY &nbsp;•&nbsp; WATCH FREE OR DOWNLOAD IN HD &nbsp;•&nbsp; UGANDA'S HOME OF TRANSLATED CINEMA &nbsp;•&nbsp; NOW SHOWING — NEW VJ DROPS EVERY FRIDAY &nbsp;•&nbsp; WATCH FREE OR DOWNLOAD IN HD &nbsp;•&nbsp;</span></div>
  <nav class="nav">
    <div class="logo"><span class="vj">Vj</span><span class="films">Films</span><small>Uganda</small></div>
    <div class="nav-links">
      <a href="#home" class="active" data-nav>Home</a>
      <a href="#vjs" data-nav>VJs</a>
      <a href="#genres" data-nav>Genres</a>
      <a href="#browse" data-nav>All Movies</a>
    </div>
    <div style="display:flex; align-items:center; gap:14px;">
      <div class="search-box">
        <span>🔍</span>
        <input id="searchInput" type="text" placeholder="Search movies or VJ...">
      </div>
      <button class="admin-btn" id="openAdminLogin">Admin</button>
      <button class="burger" id="burgerBtn">☰</button>
    </div>
  </nav>
</header>

<!-- ===================== HERO ===================== -->
<section class="hero" id="home">
  <div class="hero-bg"></div>
  <div class="hero-content">
    <div class="hero-tag"><span class="dot"></span> Fresh VJ Translation</div>
    <h1 id="heroTitle" class="display">WELCOME TO <span class="accent">VJ FILMS</span></h1>
    <p id="heroDesc">Every action-packed, side-splitting, spine-chilling movie — voiced by your favourite Ugandan VJs. Watch it straight away, or download it in HD for later.</p>
    <div class="hero-meta">
      <span class="pill" id="heroGenre">Action</span>
      <span class="pill" id="heroVj">VJ Spotlight</span>
      <span class="pill">Free</span>
    </div>
    <div class="hero-actions">
      <button class="btn-primary" id="heroWatchBtn">▶ Watch Now</button>
      <button class="btn-ghost" id="heroBrowseBtn">Browse All Movies</button>
    </div>
  </div>
</section>

<!-- ===================== VJ SPOTLIGHT ===================== -->
<section class="section" id="vjs">
  <div class="section-head">
    <h2><span class="num">01</span>VJ Spotlight — Pick Your Voice</h2>
    <a class="see-all" id="clearVjFilter">Show all VJs</a>
  </div>
  <div class="vj-row" id="vjRow"></div>
</section>

<!-- ===================== GENRES + GRID ===================== -->
<section class="section" id="genres">
  <div class="section-head">
    <h2><span class="num">02</span><span id="browseTitle">Browse By Genre</span></h2>
    <a class="see-all" id="resetFilters">Reset filters</a>
  </div>
  <div class="genre-chips" id="genreChips"></div>
  <div class="movie-grid" id="movieGrid"></div>
</section>

<div id="browse"></div>

<footer>
  <div class="logo" style="justify-content:center;"><span class="vj">Vj</span><span class="films">Films</span></div>
  <p>Vj Films — a fan-built home for Ugandan VJ translated cinema. Built for demo purposes; all sample titles are placeholders.</p>
</footer>

<!-- ===================== MOVIE DETAIL MODAL ===================== -->
<div class="overlay" id="movieOverlay">
  <div class="modal">
    <button class="modal-close" id="closeMovieModal">✕</button>
    <div class="modal-media" id="modalMedia"></div>
    <div class="modal-info">
      <h2 id="modalTitle" class="display">Movie Title</h2>
      <div class="modal-tags" id="modalTags"></div>
      <p class="modal-desc" id="modalDesc"></p>
      <div class="modal-actions">
        <button class="btn-primary" id="modalWatchBtn">▶ Watch Now</button>
        <a class="btn-ghost" id="modalDownloadBtn" href="#" download target="_blank" rel="noopener">⬇ Download</a>
      </div>
      <div class="modal-urls">
        <div class="url-row">
          <span class="url-label">Watch URL:</span>
          <a id="modalWatchUrl" class="url-link" href="#" target="_blank" rel="noopener">—</a>
        </div>
        <div class="url-row">
          <span class="url-label">Download URL:</span>
          <a id="modalDownloadUrl" class="url-link" href="#" target="_blank" rel="noopener">—</a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ===================== ADMIN LOGIN ===================== -->
<div class="admin-overlay" id="adminLoginOverlay">
  <div class="admin-box">
    <button class="modal-close" id="closeAdminLogin" style="position:absolute; top:16px; right:16px;">✕</button>
    <h2>Admin Login</h2>
    <p class="hint">Enter the admin passcode to manage movies.</p>
    <div class="field">
      <label>Passcode</label>
      <input type="password" id="adminPasscode" placeholder="Enter passcode">
    </div>
    <button class="btn-primary" style="width:100%; justify-content:center;" id="adminLoginBtn">Enter Admin Panel</button>
  </div>
</div>

<!-- ===================== ADMIN PANEL ===================== -->
<div class="admin-overlay" id="adminPanelOverlay">
  <div style="width:100%; height:100%; overflow-y:auto; background:var(--bg);">
    <header style="position:sticky; top:0;">
      <div class="nav" style="max-width:1280px;">
        <div class="logo"><span class="vj">Vj</span><span class="films">Films</span><small>Admin</small></div>
        <button class="admin-btn" id="exitAdminPanel">Exit Admin</button>
      </div>
    </header>
    <div class="admin-panel">
      <div class="admin-panel-head">
        <h1>Manage Movies</h1>
      </div>
      <div class="admin-grid">
        <div class="admin-card">
          <h3>Add New Movie</h3>
          <form id="addMovieForm">
            <div class="field">
              <label>Movie Title *</label>
              <input type="text" id="f_title" required placeholder="e.g. Enemies of the State">
            </div>
            <div class="field-row">
              <div class="field">
                <label>Genre *</label>
                <select id="f_genre" required>
                  <option value="">Select genre</option>
                  <option>Action</option>
                  <option>Comedy</option>
                  <option>Horror</option>
                  <option>Drama</option>
                  <option>Thriller</option>
                  <option>Romance</option>
                  <option>Animation</option>
                  <option>Sci-Fi</option>
                </select>
              </div>
              <div class="field">
                <label>VJ Name *</label>
                <input type="text" id="f_vj" required placeholder="e.g. VJ Storm">
              </div>
            </div>
            <div class="field">
              <label>Poster Image</label>
              <label class="drop-zone" id="drop_poster">
                <input type="file" id="f_poster" accept="image/*">
                <div><strong>Drop poster image here</strong><span>or click to choose an image</span></div>
              </label>
            </div>
            <div class="field">
              <label>Watch Video</label>
              <label class="drop-zone" id="drop_video">
                <input type="file" id="f_video" accept="video/mp4,video/*">
                <div><strong>Drop MP4 video here</strong><span>or click to choose a video</span></div>
              </label>
            </div>
            <div class="field">
              <label>Download File <span style="font-weight:400; text-transform:none;">(optional — uses watch video if empty)</span></label>
              <label class="drop-zone" id="drop_download">
                <input type="file" id="f_download" accept="video/mp4,video/*">
                <div><strong>Drop download video here</strong><span>or leave empty to use the watch video</span></div>
              </label>
            </div>
            <div class="field">
              <label>Short Description</label>
              <textarea id="f_desc" placeholder="What's this movie about?"></textarea>
            </div>
            <button type="submit" class="btn-primary" style="width:100%; justify-content:center;">+ Add Movie</button>
          </form>
        </div>
        <div class="admin-card">
          <h3>Current Library (<span id="libCount">0</span>)</h3>
          <div class="manage-list" id="manageList"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="toast" id="toast">Saved</div>

<script>
/* =========================================================
   VJ FILMS — client-side data layer (IndexedDB)
   ========================================================= */
const SAMPLE_VIDEO = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const SAMPLE_DOWNLOAD = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';

/* =========================================================
   PERSISTENT STORAGE (IndexedDB)
   Uploaded poster/video/download files are stored as real
   binary Blobs in IndexedDB, not as blob: URLs. blob: URLs
   only live for the current page load, so storing those in
   localStorage (the old approach) meant every upload broke
   the moment the page reloaded. IndexedDB has no meaningful
   size cap on video files and survives reloads/tab closes,
   so this makes "Save" actually save.
   NOTE: this storage lives in the admin's own browser/device.
   It will not appear for visitors on other devices — that
   requires a real server backend.
   ========================================================= */
const DB_NAME = 'vjfilms_db';
const DB_VERSION = 1;
const STORE_NAME = 'movies';

function openDB(){
  return new Promise((resolve, reject)=>{
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = ()=>{
      const db = req.result;
      if(!db.objectStoreNames.contains(STORE_NAME)){
        db.createObjectStore(STORE_NAME, {keyPath:'id'});
      }
    };
    req.onsuccess = ()=>resolve(req.result);
    req.onerror = ()=>reject(req.error);
  });
}
function idbGetAll(db){
  return new Promise((resolve, reject)=>{
    const tx = db.transaction(STORE_NAME, 'readonly');
    const req = tx.objectStore(STORE_NAME).getAll();
    req.onsuccess = ()=>resolve(req.result || []);
    req.onerror = ()=>reject(req.error);
  });
}
function idbPut(db, record){
  return new Promise((resolve, reject)=>{
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(record);
    tx.oncomplete = ()=>resolve();
    tx.onerror = ()=>reject(tx.error);
  });
}
function idbDelete(db, id){
  return new Promise((resolve, reject)=>{
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(id);
    tx.oncomplete = ()=>resolve();
    tx.onerror = ()=>reject(tx.error);
  });
}

let dbPromise = openDB();

/* Turn a stored record (which may hold real Blobs) into the
   {poster, video, download} string URLs the rest of the app
   already knows how to render. Object URLs are created fresh
   from the Blob every time the app loads, so they're always
   valid for the current page load. */
function hydrateRecord(r){
  const posterURL = r.posterBlob ? URL.createObjectURL(r.posterBlob) : r.posterURL;
  const videoURL = r.videoBlob ? URL.createObjectURL(r.videoBlob) : r.videoURL;
  const downloadURL = r.downloadBlob ? URL.createObjectURL(r.downloadBlob) : (r.downloadURL || videoURL);
  return {
    id:r.id, title:r.title, genre:r.genre, vj:r.vj, desc:r.desc, added:r.added,
    poster:posterURL, video:videoURL, download:downloadURL
  };
}

function samplePoster(seed, tone){
  // Generates a simple placeholder poster (SVG data URL) so the demo has visuals without external images.
  const tones = {
    Action:['#c22d2d','#3a1414'], Comedy:['#e3b23c','#3a2f14'], Horror:['#5a1f5a','#150818'],
    Drama:['#2d5fc2','#0f1a30'], Thriller:['#1f9c6a','#0a1f16'], Romance:['#c23d7e','#2f0f1e'],
    Animation:['#3ba0c2','#0e1f26'], 'Sci-Fi':['#7a3bc2','#160e26']
  };
  const [c1,c2] = tones[tone] || ['#7a6a3b','#1c1a1f'];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='600'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='${c1}'/><stop offset='100%' stop-color='${c2}'/>
    </linearGradient></defs>
    <rect width='400' height='600' fill='url(#g)'/>
    <text x='200' y='300' font-family='Arial' font-size='26' fill='rgba(255,255,255,0.85)' text-anchor='middle' font-weight='bold'>${seed}</text>
    <text x='200' y='335' font-family='Arial' font-size='15' fill='rgba(255,255,255,0.6)' text-anchor='middle'>${tone}</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function seedData(){
  const vjNames = ['VJ Storm','VJ Nile','VJ Kaweesi','VJ Ssenga','VJ Bantu','VJ Kabovu'];
  const genres = ['Action','Comedy','Horror','Drama','Thriller','Romance','Animation','Sci-Fi'];
  const titles = [
    'Enemies of the State','Village Boy Millionaire','The Silent Graveyard','Tears of a Mother',
    'Last Man Running','Love in Kampala','Jungle Warriors','The Return of Kato',
    'Widow of the North','Ghost in the Maize Field','Fast Money','Boda Boda Chronicles',
    'The Betrayal','City of Thieves','Curse of the Old House','Second Chance',
    'Diamond Heist','Deadly Reunion','Market Day Madness','The Long Road Home'
  ];
  let arr = [];
  titles.forEach((t,i)=>{
    const genre = genres[i % genres.length];
    const vj = vjNames[i % vjNames.length];
    arr.push({
      id:'seed_'+i,
      title:t,
      genre,
      vj,
      poster:samplePoster(t, genre),
      video:SAMPLE_VIDEO,
      download:SAMPLE_DOWNLOAD,
      desc:`${t} is a ${genre.toLowerCase()} film translated live by ${vj}, bringing the local flavour Ugandan audiences love. Sample placeholder description for demo purposes.`,
      added:Date.now() - i*100000
    });
  });
  return arr;
}

/* seedData() above returns plain {video, download, poster} string URLs —
   wrap them as records with *URL fields (no Blobs) for IndexedDB storage. */
function seedRecords(){
  return seedData().map(m=>({
    id:m.id, title:m.title, genre:m.genre, vj:m.vj, desc:m.desc, added:m.added,
    posterURL:m.poster, videoURL:m.video, downloadURL:m.download,
    posterBlob:null, videoBlob:null, downloadBlob:null
  }));
}

async function loadLibrary(){
  const db = await dbPromise;
  let records = await idbGetAll(db);
  if(records.length === 0){
    records = seedRecords();
    for(const r of records){ await idbPut(db, r); }
  }
  records.sort((a,b)=>b.added-a.added);
  return records.map(hydrateRecord);
}

async function addMovieRecord(record){
  const db = await dbPromise;
  await idbPut(db, record);
}
async function deleteMovieRecord(id){
  const db = await dbPromise;
  await idbDelete(db, id);
}

let library = [];
let state = { genre:'All', vj:null, query:'' };

/* ---------- helpers ---------- */
function uniqueVjs(){
  const map = {};
  library.forEach(m=>{ map[m.vj] = (map[m.vj]||0)+1; });
  return Object.keys(map).map(name=>({name, count:map[name]}));
}
function uniqueGenres(){
  const set = new Set(library.map(m=>m.genre));
  return ['All', ...Array.from(set)];
}
function initials(name){
  return name.replace(/^VJ\s*/i,'').trim().slice(0,2).toUpperCase();
}
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2200);
}

/* ---------- render: VJ row ---------- */
function renderVjRow(){
  const row = document.getElementById('vjRow');
  row.innerHTML = '';
  uniqueVjs().forEach(v=>{
    const card = document.createElement('div');
    card.className = 'vj-card' + (state.vj===v.name ? ' active' : '');
    card.innerHTML = `
      <div class="vj-avatar-wrap">
        <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="47" fill="none" stroke="#e3b23c" stroke-width="2" stroke-dasharray="6 5" opacity="0.5"/></svg>
        <div class="vj-avatar">${initials(v.name)}</div>
      </div>
      <div class="vj-name">${v.name}</div>
      <div class="vj-count">${v.count} movie${v.count>1?'s':''}</div>
    `;
    card.addEventListener('click', ()=>{
      state.vj = state.vj===v.name ? null : v.name;
      renderAll();
      document.getElementById('genres').scrollIntoView({behavior:'smooth'});
    });
    row.appendChild(card);
  });
}

/* ---------- render: genre chips ---------- */
function renderGenreChips(){
  const wrap = document.getElementById('genreChips');
  wrap.innerHTML = '';
  uniqueGenres().forEach(g=>{
    const chip = document.createElement('button');
    chip.className = 'chip' + (state.genre===g ? ' active':'');
    chip.textContent = g;
    chip.addEventListener('click', ()=>{ state.genre = g; renderAll(); });
    wrap.appendChild(chip);
  });
}

/* ---------- render: movie grid ---------- */
function filteredMovies(){
  return library.filter(m=>{
    if(state.genre !== 'All' && m.genre !== state.genre) return false;
    if(state.vj && m.vj !== state.vj) return false;
    if(state.query){
      const q = state.query.toLowerCase();
      if(!m.title.toLowerCase().includes(q) && !m.vj.toLowerCase().includes(q)) return false;
    }
    return true;
  }).sort((a,b)=>b.added-a.added);
}

function renderGrid(){
  const grid = document.getElementById('movieGrid');
  const list = filteredMovies();
  const titleEl = document.getElementById('browseTitle');

  if(state.vj) titleEl.textContent = `Movies by ${state.vj}`;
  else if(state.genre !== 'All') titleEl.textContent = `${state.genre} Movies`;
  else titleEl.textContent = 'Browse By Genre';

  grid.innerHTML = '';
  if(list.length === 0){
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">
      <h3>No movies here yet</h3>
      <p>Try a different genre or VJ, or check back soon — the admin adds new titles regularly.</p>
    </div>`;
    return;
  }
  list.forEach(m=>{
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <div class="poster">
        <img src="${m.poster}" alt="${m.title}">
        <div class="glow"></div>
        <div class="poster-badge">${m.genre}</div>
        <div class="poster-play"><div class="circle">▶</div></div>
      </div>
      <div class="card-body">
        <h3>${m.title}</h3>
        <div class="card-meta"><span class="vjtag">${m.vj}</span><span>HD</span></div>
      </div>
    `;
    card.addEventListener('click', ()=>openMovieModal(m.id));
    grid.appendChild(card);
  });
}

function renderAll(){
  renderVjRow();
  renderGenreChips();
  renderGrid();
  renderHero();
}

/* ---------- hero ---------- */
function renderHero(){
  if(library.length === 0) return;
  const featured = library[0];
  document.getElementById('heroGenre').textContent = featured.genre;
  document.getElementById('heroVj').textContent = featured.vj;
  document.getElementById('heroTitle').innerHTML = `<span class="accent">${featured.title}</span>`;
  document.getElementById('heroDesc').textContent = featured.desc;
  document.getElementById('heroWatchBtn').onclick = ()=>openMovieModal(featured.id);
}
document.getElementById('heroBrowseBtn').addEventListener('click', ()=>{
  document.getElementById('genres').scrollIntoView({behavior:'smooth'});
});

/* ---------- movie modal ---------- */
function openMovieModal(id){
  const m = library.find(x=>x.id===id);
  if(!m) return;
  document.getElementById('modalTitle').textContent = m.title;
  document.getElementById('modalDesc').textContent = m.desc;
  document.getElementById('modalTags').innerHTML = `
    <span class="vj">${m.vj}</span><span>${m.genre}</span><span>HD Quality</span>`;
  const media = document.getElementById('modalMedia');
  if(m.video){
    media.innerHTML = `<video controls poster="${m.poster}"><source src="${m.video}" type="video/mp4"></video>`;
  } else {
    media.innerHTML = `<div class="poster-fallback"><span style="font-size:2rem;">🎬</span><span>No preview video linked yet</span></div>`;
  }
  const dlBtn = document.getElementById('modalDownloadBtn');
  dlBtn.href = m.download || '#';
  dlBtn.download = m.download ? `${m.title.replace(/[^a-z0-9]+/gi,'_')}.mp4` : '';

  document.getElementById('modalWatchBtn').onclick = ()=>{
    const v = media.querySelector('video');
    if(v){ v.play(); }
    else if(m.video){ window.open(m.video, '_blank', 'noopener'); }
  };

  // Show the exact Watch and Download URLs beneath the buttons, and make them clickable.
  const watchUrlEl = document.getElementById('modalWatchUrl');
  const downloadUrlEl = document.getElementById('modalDownloadUrl');
  if(m.video){
    watchUrlEl.textContent = m.video;
    watchUrlEl.href = m.video;
  } else {
    watchUrlEl.textContent = 'No watch link added yet';
    watchUrlEl.removeAttribute('href');
  }
  if(m.download){
    downloadUrlEl.textContent = m.download;
    downloadUrlEl.href = m.download;
  } else {
    downloadUrlEl.textContent = 'No download link added yet';
    downloadUrlEl.removeAttribute('href');
  }

  document.getElementById('movieOverlay').classList.add('show');
}
function closeMovieModal(){
  document.getElementById('movieOverlay').classList.remove('show');
  document.getElementById('modalMedia').innerHTML = '';
  document.getElementById('modalWatchUrl').textContent = '—';
  document.getElementById('modalDownloadUrl').textContent = '—';
}
document.getElementById('closeMovieModal').addEventListener('click', closeMovieModal);
document.getElementById('movieOverlay').addEventListener('click', (e)=>{
  if(e.target.id === 'movieOverlay') closeMovieModal();
});

/* ---------- search / nav ---------- */
document.getElementById('searchInput').addEventListener('input', (e)=>{
  state.query = e.target.value.trim();
  renderGrid();
});
document.getElementById('clearVjFilter').addEventListener('click', ()=>{ state.vj = null; renderAll(); });
document.getElementById('resetFilters').addEventListener('click', ()=>{
  state = {genre:'All', vj:null, query:''};
  document.getElementById('searchInput').value = '';
  renderAll();
});
document.querySelectorAll('[data-nav]').forEach(a=>{
  a.addEventListener('click', ()=>{
    document.querySelectorAll('[data-nav]').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
  });
});

/* ---------- admin login / panel ---------- */
// The passcode is checked as a hash so its plain-text value is not displayed in the page source.
const ADMIN_PASSCODE_HASH = '37d0eaa7e299cbdf3270d2ed2ff2341302ff1eb8e0e38198d0e9c995ed026d94';
async function isValidAdminPasscode(value){
  const bytes = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(hash)).map(byte => byte.toString(16).padStart(2,'0')).join('') === ADMIN_PASSCODE_HASH;
}
document.getElementById('openAdminLogin').addEventListener('click', ()=>{
  document.getElementById('adminLoginOverlay').classList.add('show');
});
document.getElementById('closeAdminLogin').addEventListener('click', ()=>{
  document.getElementById('adminLoginOverlay').classList.remove('show');
});
document.getElementById('adminLoginBtn').addEventListener('click', async ()=>{
  const val = document.getElementById('adminPasscode').value;
  if(await isValidAdminPasscode(val)){
    document.getElementById('adminLoginOverlay').classList.remove('show');
    document.getElementById('adminPanelOverlay').classList.add('show');
    document.getElementById('adminPasscode').value = '';
    renderManageList();
  } else {
    showToast('Incorrect passcode');
  }
});
document.getElementById('exitAdminPanel').addEventListener('click', ()=>{
  document.getElementById('adminPanelOverlay').classList.remove('show');
});

/* ---------- local drag-and-drop media ---------- */
const droppedFiles = { poster:null, video:null, download:null };
function setDroppedFile(kind, file){
  if(!file) return;
  const isPoster = kind === 'poster';
  if(isPoster ? !file.type.startsWith('image/') : !file.type.startsWith('video/')){
    showToast(isPoster ? 'Please drop an image file' : 'Please drop a video file');
    return;
  }
  droppedFiles[kind] = file;
  const zone = document.getElementById('drop_' + kind);
  zone.classList.add('has-file');
  zone.querySelector('div').innerHTML = `<strong>✓ ${file.name}</strong><span>${(file.size / (1024 * 1024)).toFixed(1)} MB selected</span>`;
}
function setupDropZone(kind){
  const zone = document.getElementById('drop_' + kind);
  const input = document.getElementById('f_' + kind);
  ['dragenter','dragover'].forEach(eventName => zone.addEventListener(eventName, event => {
    event.preventDefault();
    zone.classList.add('dragging');
  }));
  ['dragleave','drop'].forEach(eventName => zone.addEventListener(eventName, event => {
    event.preventDefault();
    zone.classList.remove('dragging');
  }));
  zone.addEventListener('drop', event => setDroppedFile(kind, event.dataTransfer.files[0]));
  input.addEventListener('change', () => setDroppedFile(kind, input.files[0]));
}
['poster','video','download'].forEach(setupDropZone);
function resetDropZones(){
  Object.keys(droppedFiles).forEach(kind => {
    droppedFiles[kind] = null;
    const zone = document.getElementById('drop_' + kind);
    zone.classList.remove('has-file');
    const messages = {
      poster:['Drop poster image here','or click to choose an image'],
      video:['Drop MP4 video here','or click to choose a video'],
      download:['Drop download video here','or leave empty to use the watch video']
    };
    zone.querySelector('div').innerHTML = `<strong>${messages[kind][0]}</strong><span>${messages[kind][1]}</span>`;
  });
}

document.getElementById('addMovieForm').addEventListener('submit', async (e)=>{
  e.preventDefault();
  const title = document.getElementById('f_title').value.trim();
  const genre = document.getElementById('f_genre').value;
  const vj = document.getElementById('f_vj').value.trim();
  const desc = document.getElementById('f_desc').value.trim() || `${title} — translated by ${vj}.`;

  if(!title || !genre || !vj){ showToast('Please fill all required fields'); return; }
  if(!droppedFiles.video){ showToast('Drop a video file before adding the movie'); return; }

  const BIG_FILE_WARN = 300 * 1024 * 1024; // 300MB
  const totalSize = (droppedFiles.video?.size||0) + (droppedFiles.download?.size||0) + (droppedFiles.poster?.size||0);
  if(totalSize > BIG_FILE_WARN){
    showToast('Saving a large video — this may take a moment...');
  }

  const submitBtn = e.target.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Saving...';

  const record = {
    id:'m_'+Date.now(),
    title, genre, vj, desc, added:Date.now(),
    posterBlob: droppedFiles.poster || null,
    posterURL: droppedFiles.poster ? null : samplePoster(title, genre),
    videoBlob: droppedFiles.video || null,
    videoURL: null,
    downloadBlob: droppedFiles.download || null,
    downloadURL: null
  };

  try{
    await addMovieRecord(record);
    library.unshift(hydrateRecord(record));
    e.target.reset();
    resetDropZones();
    showToast('Movie saved — will still be here after a reload');
    renderAll();
    renderManageList();
  }catch(err){
    console.error(err);
    if(err && err.name === 'QuotaExceededError'){
      showToast('Not enough browser storage space for this file');
    } else {
      showToast('Could not save — try a smaller file or free up space');
    }
  }finally{
    submitBtn.disabled = false;
    submitBtn.textContent = '+ Add Movie';
  }
});

function renderManageList(){
  const list = document.getElementById('manageList');
  document.getElementById('libCount').textContent = library.length;
  list.innerHTML = '';
  library.forEach(m=>{
    const row = document.createElement('div');
    row.className = 'manage-row';
    row.innerHTML = `
      <img class="thumb" src="${m.poster}" alt="">
      <div class="info">
        <h4>${m.title}</h4>
        <span>${m.genre} • ${m.vj}</span>
      </div>
      <button data-id="${m.id}">Remove</button>
    `;
    row.querySelector('button').addEventListener('click', async ()=>{
      try{
        await deleteMovieRecord(m.id);
        library = library.filter(x=>x.id !== m.id);
        renderManageList();
        renderAll();
        showToast('Movie removed');
      }catch(err){
        console.error(err);
        showToast('Could not remove movie — try again');
      }
    });
    list.appendChild(row);
  });
}

/* ---------- init ---------- */
(async function init(){
  try{
    library = await loadLibrary();
  }catch(err){
    console.error('Failed to open local database, falling back to session-only data', err);
    library = seedData();
  }
  renderAll();
})();
</script>

</body>
</html>
