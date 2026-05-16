/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakToggle, TweakRadio, TweakText */
const { useState, useEffect, useRef } = React;

const TG_TOKEN = '8775280982:AAGplk6NGbKjVwex3GsciGJTDB-57PdKVxQ';

const MENU = [
{ id: 'hashah', name: 'ÙÙÙÙØ² ÙØ´Ù', tag: 'Ø§ÙØªÙÙÙØ¹', price: 60, unit: 'ÙÙØ¹Ø´Ø±Ø©', note: 'ÙØ§Ø¹ÙØ© ÙÙ Ø§ÙØ¯Ø§Ø®ÙØ ÙØ´ÙØ© Ø¹ÙÙ Ø§ÙØ£Ø·Ø±Ø§Ù.' },
{ id: 'ny', name: 'ÙÙÙÙØ² ÙÙÙÙÙØ±Ù', tag: 'Ø§ÙØ£Ø´ÙØ±', price: 50, unit: 'ÙÙØ¹Ø´Ø±Ø©', note: 'Ø³ÙÙÙØ©Ø Ø´ÙÙÙÙØ§ Ø­ÙÙØ©Ø ÙØ§ÙØ­Ø© Ø®ÙÙÙØ©.' },
{ id: 'kinder', name: 'ÙÙÙÙØ² ÙÙØ¯Ø±', tag: 'Ø§ÙØ­ÙÙØ©', price: 60, priceMini: 40, unit: 'ÙÙØ¹Ø´Ø±Ø©', note: 'Ø­Ø´ÙØ© ÙÙØ¯Ø± ØªØ³ÙØ­ ÙØ¹ ÙÙ ÙØ¶ÙØ©.' },
{ id: 'scoop', name: 'Ø³ÙÙØ¨ ÙÙÙÙØ²', tag: 'Ø§ÙÙØ·Ø¹Ø©', price: 14, unit: 'ÙÙÙØ·Ø¹Ø©', note: 'ÙØ±Ø© Ø¹Ø¬ÙÙ Ø·Ø§Ø²Ø¬Ø©Ø ØªÙØ®Ø¨Ø² ÙØ­Ø¸ØªÙØ§.' }];


function Tray() {
  return (
    <div className="tray-wrap">
      <img src="assets/cookies-basket.gif" alt="ÙÙÙÙØ² ÙØ´Ù" />
    </div>);

}

function Nav({ onJump }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="logo" onClick={() => onJump('top')} aria-label="ÙØ´Ù Ø¨ÙÙØ±Ù">
          <img src="assets/logo.png" alt="ÙØ´Ù Ø¨ÙÙØ±Ù" className="logo-img" />
        </button>
        <div className="nav-links">
          <a onClick={() => onJump('about')}>Ø§ÙÙØµØ©</a>
          <a onClick={() => onJump('menu')}>Ø§ÙÙÙÙÙ</a>
          <a onClick={() => onJump('gallery')}>Ø§ÙÙØ¹Ø±Ø¶</a>
          <a onClick={() => onJump('order')}>Ø§ÙØ·ÙØ¨</a>
        </div>
        <button className="nav-cta" onClick={() => onJump('order')}>
          <span className="dot-mark" />
          Ø§Ø·ÙØ¨ Ø§ÙØ¢Ù
        </button>
      </div>
    </nav>);

}

function Hero({ onJump }) {
  return (
    <header className="hero" id="top">
      <div className="hero-row top">
        <div className="hero-meta">
          <span className="meta-key">Ø§ÙØ¥ØµØ¯Ø§Ø±</span>
          <span className="meta-val">Ù Ù¢Ù¦ â Ù¢Ù Ù¢Ù¦</span>
        </div>
        <div className="hero-meta">
          <span className="meta-key">@</span>
          <span className="meta-val">hashah.bake</span>
        </div>
      </div>

      <h1 className="hero-display oneline">
        <span>Ø¯Ø§ÙØ¦Ø©Ø</span> <span className="accent">ÙØ´ÙØ©Ø</span> <span>ÙÙØ³ØªØ­ÙÙ ØªÙÙÙ Ø§ÙØ£Ø®ÙØ±Ø©.</span>
      </h1>

      <div className="hero-logo-mark">
        <img src="assets/logo-hero.png" alt="ÙØ´Ù Ø¨ÙÙØ±Ù" />
      </div>

      <div className="hero-row bot" style={{ borderColor: "rgb(252, 231, 206)" }}>
        <p className="hero-lead">
          Ø£Ø±Ø¨Ø¹ ÙØµÙØ§Øª ÙÙÙÙØ² ÙØ®Ø¨Ø²ÙØ§ Ø¹ÙØ¯ Ø§ÙØ·ÙØ¨ â ÙÙØ±Ø³ÙÙØ§ ÙØ¨Ù ÙØ§ ØªØ¨Ø±Ø¯.
        </p>
        <div className="hero-actions">
          <button className="btn primary" onClick={() => onJump('order')}>
            <span>Ø§Ø·ÙØ¨ ØµÙØ¯ÙÙÙ</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          </button>
          <button className="btn ghost" onClick={() => onJump('menu')}>Ø§ÙÙÙÙÙ</button>
        </div>
      </div>

      <div className="hero-image">
        <img src="assets/cookies_soft_glow.gif" alt="ÙÙÙÙØ² ÙØ´Ù" />
        <span className="img-tag">â Ø¹ÙÙ Ø§ÙÙÙØ§Ø ÙÙØ®Ø¨Ø² Ø§ÙØ¢Ù</span>
      </div>
    </header>);

}

function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="ab-eyebrow">
          <span className="dia">â</span>
          <span>Ø§ÙÙØµØ©</span>
        </div>
        <div className="ab-body">
          <h2>ØµÙÙÙØ© ÙØ­Ø¯Ø©. Ø£Ø±Ø¨Ø¹ ÙØµÙØ§Øª. ØµØ¯Ù ÙÙ ÙÙ ÙØ·Ø¹Ø©.</h2>
          <p>
            Ø¨Ø¯Ø£Úª ÙÙ ÙØ±Ù ØµØºÙØ±Ø Ø¨ÙØµØ¯ Ø¨Ø³ÙØ·: ÙÙÙÙØ² ÙØ§ ØªÙØ³Ù. Ø²Ø¨Ø¯Ø© Ø­ÙÙÙÙØ©Ø Ø¹Ø¬ÙÙ ÙØ±ØªØ§Ø­ Ù¢Ù¤ Ø³Ø§Ø¹Ø©Ø
            ÙÙØ§ ÙØ·Ø¹Ø© ØªØ·ÙØ¹ ÙÙØ²Ø¨ÙÙ Ø¥ÙØ§ ØªØ³ØªØ­ÙÙ.
          </p>
        </div>
        <div className="ab-visual">
          <Tray />
        </div>
      </div>
    </section>);

}

function MenuSection() {
  return (
    <section className="menu" id="menu">
      <div className="sec-head">
        <div className="ab-eyebrow"><span className="dia">â</span><span>Ø§ÙÙÙÙÙ</span></div>
        <h2>Ø£Ø±Ø¨Ø¹ ÙØµÙØ§Øª. ÙØ§ Ø£ÙØ«Ø±.</h2>
        <p className="sub">Ø§ÙØ£Ø³Ø¹Ø§Ø± Ø¨Ø§ÙØ±ÙØ§Ù Ø§ÙØ³Ø¹ÙØ¯Ù Â· Ø£ÙÙ Ø·ÙØ¨ Ù¡Ù  ÙØ·Ø¹</p>
      </div>
      <ol className="menu-list">
        {MENU.map((m, i) =>
        <li key={m.id} className="m-row">
            <span className="m-num">Ù {i + 1}</span>
            <div className="m-name">
              <h3>{m.name}</h3>
              <span className="m-tag">{m.tag}</span>
            </div>
            <p className="m-desc">{m.note}</p>
            <div className="m-price">
              {m.priceMini ?
            <>
                  <span><b>{m.price}</b><i>ÙÙØ§Ø³ÙÙ</i></span>
                  <span><b>{m.priceMini}</b><i>ÙÙÙÙ</i></span>
                </> :

            <span><b>{m.price}</b><i>{m.unit}</i></span>
            }
            </div>
          </li>
        )}
      </ol>
    </section>);

}

function Gallery() {
  const photos = [
  { src: 'assets/gallery-1.png', cap: 'ÙØ­Ø¸Ø© Ø¯ÙØ§ ÙØ¹ ÙÙÙÙØ²' },
  { src: 'assets/gallery-2.png', cap: 'Ø±Ø§Ø¦Ø­Ø© Ø§ÙÙÙÙØ© ÙØ§ÙÙÙÙÙØ²' },
  { src: 'assets/gallery-3.png', cap: 'ÙØ³Ø§Ø¡ ÙØ§Ø¯Ù ÙÙØ¶ÙØ© ÙØ´ÙØ©' },
  { src: 'assets/gallery-4.png', cap: 'ÙÙØ¬Ø§Ù ÙÙÙØ© ÙÙÙÙÙØ² Ø¯Ø§ÙÙ' },
  { src: 'assets/gallery-5.png', cap: 'ÙÙÙÙØ² Ø·Ø§Ø²Ø¬Ø ÙÙÙØ© Ø¨ÙØª' }];

  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(null);
  const trackRef = useRef(null);

  const go = (i) => {
    const n = (i + photos.length) % photos.length;
    setActive(n);
  };

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % photos.length), 4500);
    return () => clearInterval(id);
  }, [photos.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (open === null) return;
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowLeft') setOpen((o) => (o + 1) % photos.length);
      if (e.key === 'ArrowRight') setOpen((o) => (o - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, photos.length]);

  return (
    <section className="gallery" id="gallery">
      <div className="sec-head">
        <div className="ab-eyebrow"><span className="dia">â</span><span>Ø§ÙÙØ¹Ø±Ø¶</span></div>
        <h2>ÙÙÙ ØªØ·ÙØ¹ Ø¹ÙÙ Ø·Ø§ÙÙØ§ØªÙÙ.</h2>
        <p className="sub">ØµÙØ± ÙÙ Ø¬ÙØ³Ø§Øª Ø²Ø¨Ø§ÙÙØ§ Â· Ø§Ø¶ØºØ· Ø£Ù ØµÙØ±Ø© ÙÙØªÙØ¨ÙØ±</p>
      </div>
      <div className="slider">
        <button className="sl-arrow prev" onClick={() => go(active - 1)} aria-label="Ø§ÙØ³Ø§Ø¨Ù">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <div className="sl-viewport">
          <div className="sl-track" ref={trackRef} style={{ transform: `translateX(${active * 100}%)c }}>
            {photos.map((p, i) =>
            <button key={i} className="sl-slide" onClick={() => setOpen(i)}>
                <img src={p.src} alt={p.cap} loading="lazy" />
                <span className="sl-cap">{p.cap}</span>
                <span className="sl-zoom">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3M11 8v6M8 11h6" /></svg>
                </span>
              </button>
            )}
          </div>
        </div>
        <button className="sl-arrow next" onClick={() => go(active + 1)} aria-label="Ø§ÙØ§ÙÙ">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
      <div className="sl-dots">
        {photos.map((_, i) =>
        <button key={i} className={`sl-dot ${i === active ? 'on' : ''}`} onClick={() => go(i)} aria-label={`ØµÙØ±Ø© ${i + 1}`} />
        )}
        <span className="sl-count">{String(active + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</span>
      </div>
      {open !== null &&
      <div className="lightbox" onClick={() => setOpen(null)}>
          <button className="lb-close" onClick={(e) => {e.stopPropagation();setOpen(null);}} aria-label="Ø¥Ø²ÙØ§Ù">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L4Ä3h6 6" /></svg>
          </button>
          <button className="lb-arrow lb-prev" onClick={(e) => {e.stopPropagation();setOpen((o) => (o + 1) % photos.length);}} aria-label="Ø§ÙØ§ÙÙ">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
            <img src={photos[open].src} alt={photos[open].cap} />
            <figcaption>{photos[open].cap} Â· {open + 1}/{photos.length}</figcaption>
          </figure>
          <button className="lb-arrow lb-next" onClick={(e) => {e.stopPropagation();setOpen((o) => (o - 1 + photos.length) % photos.length);}} aria-label="Ø§ÙØªØ§ÙÙ">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      }
    </section>);
}

function OrderForm({ chatId }) {
  const [step, setStep] = useState(1);
  const [flavor, setFlavor] = useState('hashah');
  const [qty, setQty] = useState(10);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('qassim');
  const [note, setNote] = useState('');
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const fl = MENU.find((x) => x.id === flavor);
  const isScoop = flavor === 'scoop';
  const total = (fl?.price ?? 0) * (qty / (isScoop ? 1 : 10));

  const cities = [['qassim', 'Ø§ÙÙØµÙÙ', 'ÙÙØ³ Ø§ÙÙÙÙ']];

  const validateStep2 = () => {
    const e = {};
    if (!name.trim()) e.name = 'Ø§ÙØ§Ø³Ù ÙØ·ÙÙØ¨';
    if (!phone.trim()) e.phone = 'Ø±ÙÙ Ø§ÙØ¬ÙØ§Ù ÙØ·ÙÙØ¨';
    else if (!/^05\d{8}$/.test(phone.replace(/\s/g, ''))) e.phone = 'Ø±ÙÙ ØºÙØ± ØµØ­ÙØ­ â ÙØ«Ø§Ù: 0501234567';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async () => {
    if (!validateStep2()) { setStep(2); return; }
    const cityName = cities.find((c) => c[0] === city)?.[1] ?? city;
    const text = `ðª <b>Ø·ÙØ¨ Ø¬Ø¯ÙØ¯ â ÙØ´Ù Ø¨ÙÙØ±Ù</b>\n`
      + `âââââââââââââââ\n`
      + `<b>Ø§ÙÙØµÙØ©:</b> ${fl.name}\n`
      + `<b>Ø§ÙÙÙÙÙ:</b> ${qty} ${isScoop ? 'Ø³ÙÙØ¨' : 'ÙØ·Ø¹Ø©'}\n`
      + `<b>Ø§ÙØ¥Ø¬ÙØ§ÙÙ:</b> ${Math.round(total)} Ø±.Ø³\n`
      + `âââââââââââââââ\n`
      + `<b>Ø§ÙØ§Ø³Ù:</b> ${name || 'â'}\n`
      + `<b>Ø§ÙØ¬ÙØ§Ù:</b> ${phone || 'â'}\n`
      + `<b>Ø§ÙÙØ¯ÙÙÙ:</b> ${cityName}\n`
      + (note ? `<b>ÙÙØ§Ø­Ø¸Ø©:</b> ${note}\n` : '')
      + `âââââââââââââââ\n`
      + `ð ${new Date().toLocaleString('ar-SA')}`;
    setStatus('sending');
    try {
      if (!chatId) { console.log('[Telegram]', text); await new Promise(r => setTimeout(r, 700)); setStatus('sent'); return; }
      const res = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({chat_id:chatId,text,parse_mode:'HTML'}) });
      const data = await res.json();
      if (data.ok) setStatus('sent'); else { console.error(data); setStatus('error'); }
    } catch(e) { console.error(e); setStatus('error'); }
  };

  if (status === 'sent') return (
    <section className="order" id="order"><div className="order-success"><span className="success-dia">â</span><h2>ÙØµÙÙØ§ Ø·ÙØ¨Ù.</h2><p >Ø±Ø§Ø­ ÙØªÙØ§ØµÙ ÙØ¹Ø§Ù Ø¹ÙÙ {phone||'Ø¬ÙØ§ÙÙ'} Ø®ÙØ§Ù Ø¯ÙØ§ÙÙ.</p><button className="btn ghost" onClick={()=>{setStatus('idle');setStep(1);}}>Ø·ÙØ¨ Ø¬Ø¯ÙØ¯</button></div></section>);

  return (
    <section className="order" id="order">
      <div className="sec-head"><div className="ab-eyebrow"><span className="dia">â</span><span>Ø§ÙØ·ÙØ¨</span></div><h2>ØµÙØ¯ÙÙÙ Ø§ÙØ®Ø§Øµ.</h2><p className="sub">ÙØµÙÙØ§ Ø§ÙØ·ÙØ¨ Ø¹ÙÙ ØªÙÙÙØ¬Ø±Ø§Ù ÙØ¨Ø§Ø´Ø±Ø©Ø ÙÙØ±Ø¯ Ø¹ÙÙÙ Ø®ÙØ§Ù Ø¯ÙØ§ÙÙ.</p></div>
      <div className="order-card">
        <div className="oc-steps">
          {['Ø§ÙÙØµÙØ©','ØªÙØ§ØµÙÙÙ','Ø§ÙÙØµÙÙ'].map((label,i) =>
          <button key={i} className={`ok-step ${step===i+1?'on':''} ${step>i+1?'done':''}`} onClick={()=>setStep(i+1)}>
            <span>Ù {i+1}</span><em>{label}</em>
          </button>)}
        </div>
        <div className="oc-body">
          {step===1 && <><div className="oc-flavors">{MENU.map(m =>
            <label key={m.id} className={`flav ${flavor===m.id?'on':''}`}>
              <input type="radio" name="fl" checked={flavor===m.id} onChange={()=>setFlavor(m.id)}/>
              <span className="f-name">{m.name}</span><span className="f-price">{m.price} Ø±.Ø³</span>
            </label>)}</div>
            <div className="oc-qty">
              <button onClick={()=>setQty(q=>Math.max(isScoop?1:10,q-(isScoop?1:5)))} aria-label="Ø¥ÙÙØ§Øµ">â</button>
              <div className="qty-display"><strong>{qty}</strong><span>{isScoop?'Ø³ÙÙØ¨':'ÙØ·Ø¹Ø©'}</span></div>
              <button onClick={()=>setQty(q=>q+(isScoop?1:5))} aria-label="Ø²f+bb¿b¤ø¬ð½ÕÑÑ½¸ø(ð½¥Øø(ñÀ±ÍÍ9µô½µÅÑäµ¡¥¹Ðûbfb·b¼bfbb¿ff$fffbßbä
ÜbfbËf+bb¿b¤b£f ffbßbäð½Àø(ð¼ùô(íÍÑÀôôôÈñ¥Ø±ÍÍ9µô½µ¥±Ìø(ñ±°±ÍÍ9µô±øñÍÁ¸ûbfbbÏfñÍÁ¸±ÍÍ9µôÉÄµÍÑÈø¨ð½ÍÁ¸øð½ÍÁ¸ø(ñ¥¹ÁÕÐÑåÁôÑáÐÙ±Õõí¹µô½¹
¡¹õì¡¤ôùíÍÑ9µ¡¹ÑÉÐ¹Ù±Õ¤íÍÑÉÉ½ÉÌ¡Èôø¡ì¸¸¹È±¹µèô¤¤íõôÁ±¡½±ÈôbbÏffbffbffÉÅÕ¥É¼ø(íÉÉ½ÉÌ¹¹µñÍÁ¸±ÍÍ9µô±µÉÈùíÉÉ½ÉÌ¹¹µôð½ÍÁ¸ùô(ð½±°ø(ñ±°±ÍÍ9µô±øñÍÁ¸ûbÇffbfb³f#bfñÍÁ¸±ÍÍ9µôÉÄµÍÑÈø¨ð½ÍÁ¸øð½ÍÁ¸ø(ñ¥¹ÁÕÐÑåÁôÑ°Ù±ÕõíÁ¡½¹ô½¹
¡¹õì¡¤ôùíqÑA¡½¹¡¹ÑÉÐ¹Ù±Õ¤íÍÑÉÉ½ÉÌ¡Èôø¡ì¸¸¹È±Á¡½¹èô¤¤íõôÁ±¡½±ÈôÀÔÀÄÈÌÐÔØÜÉÅÕ¥É¼ø(íÉÉ½ÉÌ¹Á¡½¹ñÍÁ¸±ÍÍ9µô±µÉÈùíÉÉ½ÉÌ¹Á¡½¹ôð½ÍÁ¸ùô(ñÍÁ¸±ÍÍ9µô±µ¡¥¹ÐûbÇbb´f+b«fbfb«f#bb×ffbËbfbçff$bfb»bbÔffb«b·f#f+fð½ÍÁ¸ø(ð½±°ø(ñ±°±ÍÍ9µô±øñÍÁ¸ûffbb·bãb¤£bb»b«f+bbÇf(¤ð½ÍÁ¸ø(ñÑáÑÉÙ±Õõí¹½Ñô½¹
¡¹õì¡¤ôùÍÑ9½Ñ¡¹ÑÉÐ¹Ù±Õ¥ôÁ±¡½±Èôff#Ø¹Ø¯ Ø§ÙØªØ³ÙÙÙØ Ø¹ÙÙØ§ÙØ Ø£Ù ØªÙØµÙÙâ¦" rows={3}/>
            </label>
          </div>}
          {step===3 && <div className="oc-city">
            {cities.map(([id,n t]) => <label key={id} className={`city ${city===id?'on':''}`}>
              <input type="radio" name="city" checked={city===id} onChange={()=>setCity(id)}/>
              <span>{n}</span><em>{t}</em>
            </label>)}</div>}
        </div>
        <div className="oc-foot">
          <div className="oc-total"><span>Ø§ÙØ¥Ø¬ÙØ§ÙÙ Ø§ÙØªÙØ±ÙØ¨Ù</span><strong>{Math.round(total)} <i>Ø±.Ø³</i></strong></div>
          {step<3 ? <button className="btn primary block" onClick={()=>{if(step===2&&!validateStep2())return;\nsetStep(s=>s+1);}}>Ø§ÙØªØ§ÙÙ</button> :
            <button className="btn primary block" onClick={submit} disabled={status==='sending'}>
              {status==='sending'?'Ø¬Ø§Ø±Ù Ø§ÙØ¥Ø±Ø³Ø§Ùâ¦':status==='error'?'ÙØ´Ù â - Ø­Ø§ÙÙ ÙØ±Ø© Ø«Ø§ÙÙØ©':'Ø¥Ø±Ø³Ø§Ù Ø¹ÙÙ ØªÙÙÙØ¬Ø±Ø§Ù'}
            </button>}
        </div>
      </div>
    </section>);
}

function Footer() {
  return (
    <footer className="footer">
      <div className="f-center">
        <img src="assets/logo.png" alt="ÙØ´Ù Ø¨ÙÙØ±Ù" className="f-logo"/>
        <p className="f-tag">ÙÙÙÙØ² Ø¯Ø§ÙØ¦Ø©Ø ÙØ´ÙØ©Ø ÙÙØ³ØªØ­ÙÙ ØªÙÙÙ Ø§ÙØ£Ø®ÙØ±Ø©.</p>
        <a href="https://www.tiktok.com/@hashah.bake" target="_blank" rel="noopener" className="f-tiktok">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 6.7a4.8 4.8 0 0 1-3.5-1.7 4.8 4.8 0 0 1-1.2-3.2h-3.4v13.3a2.7 2.7 0 1 1-2.7-2.7c.3 0 .6 0 .9.1V8.9a6.1 6.1 0 1 0 5.2 6V9.3a8.2 8.2 0 0 0 4.7 1.5V7.4a4.8 4.8 0 0 1 0-.7z"/></svg>
          <span>@hashah.bake</span>
        </a>
        <span className="f-bake">ÙØ®Ø¨Ø² Ø¹ÙØ¯ Ø§ÙØ·ÙØ¨</span>
      </div>
      <div className="f-base"><span>Â© Ù¢Ù Ù¢Ù¦ ÙØ´Ù Ø¨ÙÙØ±Ù</span><span className="dia">â</span><span>ØµÙÙØ¹Ùª ÙÙ Ø§ÙÙØµÙÙ</span></div>
    </footer>);
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{"tgChatId":"482226336","showTray":true}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const onJump = id => {
    const el = id==='top'?document.body:document.getElementById(id);
    if (!el) return;
    const y = id==='top'?0:el.getBoundingClientRect().top+window.pageYOffset-60;
    window.scrollTo({top:y,behavior:'smooth'});
  };
  return (
    <div className="app">
      <div className="hero-wrap">
        <Nav onJump={onJump}/>
        <Hero onJump={onJump}/>
      </div>
      <About/>
      <MenuSection/>
      <Gallery/>
      <OrderForm chatId={t.tgChatId}/>
      <Footer/>
      <TweaksPanel title="Tweaks">
        <TweakSection title="ØªÙÙÙØ¬Ø±Ø©Ù">
          <TweakText label="Chat ID ÙÙØ§Ø³ØªÙØ§Ù" value={t.tgChatId} onChange={(v)=>setTweak('tgChatId',v)} placeholder="ÙØ«Ø§Ù: 123456789"/>
        </TweakSection>
      </TweaksPanel>
    </div>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
