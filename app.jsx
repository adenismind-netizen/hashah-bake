/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakToggle, TweakRadio, TweakText */
const { useState, useEffect, useRef } = React;

const TG_TOKEN = '8775280982:AAGplk6NGbKjVwex3GsciGJTDB-57PdKVxQ';

const MENU = [
{ id: 'hashah', name: 'كوكيز هشه', tag: 'التوقيع', price: 60, unit: 'للعشرة', note: 'ناعمة من الداخل، هشّة على الأطراف.' },
{ id: 'ny', name: 'كوكيز نيويورك', tag: 'الأشهر', price: 50, unit: 'للعشرة', note: 'سميكة، شوكولا حيّة، مالحة خفيفة.' },
{ id: 'kinder', name: 'كوكيز كندر', tag: 'الحلوة', price: 60, priceMini: 40, unit: 'للعشرة', note: 'حشوة كندر تسيح مع كل قضمة.' },
{ id: 'scoop', name: 'سكوب كوكيز', tag: 'القطعة', price: 14, unit: 'للقطعة', note: 'كرة عجين طازجة، تُخبز لحظتها.' }];


function Tray() {
  return (
    <div className="tray-wrap">
      <img src="assets/cookies-basket.gif" alt="كوكيز هشه — طازجة من الفرن" />
    </div>);

}

function Nav({ onJump }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="logo" onClick={() => onJump('top')} aria-label="هشه بيكري">
          <img src="assets/logo.png" alt="هشه بيكري" className="logo-img" />
        </button>
        <div className="nav-links">
          <a onClick={() => onJump('about')}>القصة</a>
          <a onClick={() => onJump('menu')}>المنيو</a>
          <a onClick={() => onJump('gallery')}>المعرض</a>
          <a onClick={() => onJump('order')}>الطلب</a>
        </div>
        <button className="nav-cta" onClick={() => onJump('order')}>
          <span className="dot-mark" />
          اطلب الآن
        </button>
      </div>
    </nav>);

}

function Hero({ onJump }) {
  return (
    <header className="hero" id="top">
      <div className="hero-row top">
        <div className="hero-meta">
          <span className="meta-key">الإصدار</span>
          <span className="meta-val">٠٢٦ — ٢٠٢٦</span>
        </div>
        <div className="hero-meta">
          <span className="meta-key">@</span>
          <span className="meta-val">hashah.bake</span>
        </div>
      </div>

      <h1 className="hero-display oneline">
        <span>دافئة،</span> <span className="accent">هشّة،</span> <span>ومستحيل تكون الأخيرة.</span>
      </h1>

      <div className="hero-logo-mark">
        <img src="assets/logo-hero.png" alt="هشه بيكري" />
      </div>

      <div className="hero-row bot" style={{ borderColor: "rgb(252, 231, 206)" }}>
        <p className="hero-lead">
          أربع وصفات كوكيز نخبزها عند الطلب — ونرسلها قبل لا تبرد.
        </p>
        <div className="hero-actions">
          <button className="btn primary" onClick={() => onJump('order')}>
            <span>اطلب صندوقك</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          </button>
          <button className="btn ghost" onClick={() => onJump('menu')}>المنيو</button>
        </div>
      </div>

      <div className="hero-image">
        <img src="assets/kitchen-header.gif" alt="مطبخ هشه" />
        <span className="img-tag">— على الهوا، يُخبز الآن</span>
      </div>
    </header>);

}

function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="ab-eyebrow">
          <span className="dia">◆</span>
          <span>القصة</span>
        </div>
        <div className="ab-body">
          <h2>صينية وحدة. أربع وصفات. صدق في كل قطعة.</h2>
          <p>
            بدأت من فرن صغير، بقصد بسيط: كوكيز ما تنسى. زبدة حقيقية، عجين يرتاح ٢٤ ساعة،
            ولا قطعة تطلع للزبون إلا تستحقّ.
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
        <div className="ab-eyebrow"><span className="dia">◆</span><span>المنيو</span></div>
        <h2>أربع وصفات. لا أكثر.</h2>
        <p className="sub">الأسعار بالريال السعودي · أقل طلب ١٠ قطع</p>
      </div>
      <ol className="menu-list">
        {MENU.map((m, i) =>
        <li key={m.id} className="m-row">
            <span className="m-num">٠{i + 1}</span>
            <div className="m-name">
              <h3>{m.name}</h3>
              <span className="m-tag">{m.tag}</span>
            </div>
            <p className="m-desc">{m.note}</p>
            <div className="m-price">
              {m.priceMini ?
            <>
                  <span><b>{m.price}</b><i>كلاسيك</i></span>
                  <span><b>{m.priceMini}</b><i>ميني</i></span>
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
  { src: 'assets/gallery-1.png', cap: 'لحظة دفا مع كوكيز' },
  { src: 'assets/gallery-2.png', cap: 'رائحة القهوة والكوكيز' },
  { src: 'assets/gallery-3.png', cap: 'مساء هادي وقضمة هشّة' },
  { src: 'assets/gallery-4.png', cap: 'فنجان قهوة وكوكيز دافي' },
  { src: 'assets/gallery-5.png', cap: 'كوكيز طازج، نكهة بيت' }];

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
        <div className="ab-eyebrow"><span className="dia">◆</span><span>المعرض</span></div>
        <h2>كيف تطلع على طاولاتكم.</h2>
        <p className="sub">صور من جلسات زباينا · اضغط أي صورة للتكبير</p>
      </div>

      <div className="slider">
        <button className="sl-arrow prev" onClick={() => go(active - 1)} aria-label="السابق">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <div className="sl-viewport">
          <div className="sl-track" ref={trackRef} style={{ transform: `translateX(${active * 100}%)` }}>
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
        <button className="sl-arrow next" onClick={() => go(active + 1)} aria-label="التالي">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
      <div className="sl-dots">
        {photos.map((_, i) =>
        <button key={i} className={`sl-dot ${i === active ? 'on' : ''}`} onClick={() => go(i)} aria-label={`صورة ${i + 1}`} />
        )}
        <span className="sl-count">{String(active + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</span>
      </div>

      {open !== null &&
      <div className="lightbox" onClick={() => setOpen(null)}>
          <button className="lb-close" onClick={(e) => {e.stopPropagation();setOpen(null);}} aria-label="إغلاق">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <button className="lb-arrow lb-prev" onClick={(e) => {e.stopPropagation();setOpen((o) => (o + 1) % photos.length);}} aria-label="السابق">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
            <img src={photos[open].src} alt={photos[open].cap} />
            <figcaption>{photos[open].cap} · {open + 1}/{photos.length}</figcaption>
          </figure>
          <button className="lb-arrow lb-next" onClick={(e) => {e.stopPropagation();setOpen((o) => (o - 1 + photos.length) % photos.length);}} aria-label="التالي">
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
  const [status, setStatus] = useState('idle'); // idle|sending|sent|error

  const fl = MENU.find((x) => x.id === flavor);
  const isScoop = flavor === 'scoop';
  const total = (fl?.price ?? 0) * (qty / (isScoop ? 1 : 10));

  const cities = [
  ['qassim', 'القصيم', 'نفس اليوم'],
  ['riyadh', 'الرياض', '١–٢ أيام'],
  ['jeddah', 'جدة', '٢–٣ أيام'],
  ['other', 'مدن أخرى', '٣–٤ أيام']];


  const submit = async () => {
    const cityName = cities.find((c) => c[0] === city)?.[1] ?? city;
    const text =
    `🍪 <b>طلب جديد — هشه بيكري</b>\n` +
    `━━━━━━━━━━━━━━━\n` +
    `<b>الوصفة:</b> ${fl.name}\n` +
    `<b>الكمية:</b> ${qty} ${isScoop ? 'سكوب' : 'قطعة'}\n` +
    `<b>الإجمالي:</b> ${Math.round(total)} ر.س\n` +
    `━━━━━━━━━━━━━━━\n` +
    `<b>الاسم:</b> ${name || '—'}\n` +
    `<b>الجوال:</b> ${phone || '—'}\n` +
    `<b>المدينة:</b> ${cityName}\n` + (
    note ? `<b>ملاحظة:</b> ${note}\n` : '') +
    `━━━━━━━━━━━━━━━\n` +
    `🕐 ${new Date().toLocaleString('ar-SA')}`;

    setStatus('sending');
    try {
      if (!chatId) {
        // Demo mode — log instead of send
        console.log('[Telegram] (no chat_id set) →', text);
        await new Promise((r) => setTimeout(r, 700));
        setStatus('sent');
        return;
      }
      const res = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' })
      });
      const data = await res.json();
      if (data.ok) setStatus('sent');else {console.error(data);setStatus('error');}
    } catch (e) {console.error(e);setStatus('error');}
  };

  if (status === 'sent') {
    return (
      <section className="order" id="order">
        <div className="order-success">
          <span className="success-dia">◆</span>
          <h2>وصلنا طلبك.</h2>
          <p>راح نتواصل معك على {phone || 'جوالك'} خلال دقايق لتأكيد التفاصيل.</p>
          <button className="btn ghost" onClick={() => {setStatus('idle');setStep(1);}}>طلب جديد</button>
        </div>
      </section>);

  }

  return (
    <section className="order" id="order">
      <div className="sec-head">
        <div className="ab-eyebrow"><span className="dia">◆</span><span>الطلب</span></div>
        <h2>صندوقك الخاص.</h2>
        <p className="sub">يصلنا الطلب على تيليجرام مباشرة، ونرد عليك خلال دقايق.</p>
      </div>

      <div className="order-card">
        <div className="oc-steps">
          {['الوصفة', 'تفاصيلك', 'الوصول'].map((label, i) =>
          <button key={i} className={`oc-step ${step === i + 1 ? 'on' : ''} ${step > i + 1 ? 'done' : ''}`} onClick={() => setStep(i + 1)}>
              <span>٠{i + 1}</span>
              <em>{label}</em>
            </button>
          )}
        </div>

        <div className="oc-body">
          {step === 1 &&
          <>
              <div className="oc-flavors">
                {MENU.map((m) =>
              <label key={m.id} className={`flav ${flavor === m.id ? 'on' : ''}`}>
                    <input type="radio" name="fl" checked={flavor === m.id} onChange={() => setFlavor(m.id)} />
                    <span className="f-name">{m.name}</span>
                    <span className="f-price">{m.price} ر.س</span>
                  </label>
              )}
              </div>
              <div className="oc-qty">
                <button onClick={() => setQty((q) => Math.max(isScoop ? 1 : 10, q - (isScoop ? 1 : 5)))} aria-label="إنقاص">−</button>
                <div className="qty-display"><strong>{qty}</strong><span>{isScoop ? 'سكوب' : 'قطعة'}</span></div>
                <button onClick={() => setQty((q) => q + (isScoop ? 1 : 5))} aria-label="زيادة">+</button>
              </div>
              <p className="oc-qty-hint">الحد الأدنى ١٠ قطع · الزيادة بـ ٥ قطع</p>
            </>
          }
          {step === 2 &&
          <div className="oc-fields">
              <label className="fld">
                <span>الاسم</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="اسمك الكامل" />
              </label>
              <label className="fld">
                <span>رقم الجوال</span>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="٠٥٠ ٠٠٠ ٠٠٠٠" />
              </label>
              <label className="fld">
                <span>ملاحظة (اختياري)</span>
                <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="موعد التسليم، عنوان، أي تفصيل…" rows={3} />
              </label>
            </div>
          }
          {step === 3 &&
          <div className="oc-city">
              {cities.map(([id, n, t]) =>
            <label key={id} className={`city ${city === id ? 'on' : ''}`}>
                  <input type="radio" name="city" checked={city === id} onChange={() => setCity(id)} />
                  <span>{n}</span>
                  <em>{t}</em>
                </label>
            )}
            </div>
          }
        </div>

        <div className="oc-foot">
          <div className="oc-total">
            <span>الإجمالي التقريبي</span>
            <strong>{Math.round(total)} <i>ر.س</i></strong>
          </div>
          {step < 3 ?
          <button className="btn primary block" onClick={() => setStep((s) => s + 1)}>التالي</button> :

          <button className="btn primary block" onClick={submit} disabled={status === 'sending'}>
              {status === 'sending' ? 'جاري الإرسال…' : status === 'error' ? 'فشل — حاول مرة ثانية' : 'إرسال على تيليجرام'}
            </button>
          }
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="footer">
      <div className="f-center">
        <img src="assets/logo.png" alt="هشه بيكري" className="f-logo" />
        <p className="f-tag">كوكيز دافئة، هشّة، ومستحيل تكون الأخيرة.</p>
        <a href="https://www.tiktok.com/@hashah.bake" target="_blank" rel="noopener" className="f-tiktok">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.6 6.7a4.8 4.8 0 0 1-3.5-1.7 4.8 4.8 0 0 1-1.2-3.2h-3.4v13.3a2.7 2.7 0 1 1-2.7-2.7c.3 0 .6 0 .9.1V8.9a6.1 6.1 0 1 0 5.2 6V9.3a8.2 8.2 0 0 0 4.7 1.5V7.4a4.8 4.8 0 0 1 0-.7z" /></svg>
          <span>@hashah.bake</span>
        </a>
        <span className="f-bake">نخبز عند الطلب</span>
      </div>
      <div className="f-base">
        <span>© ٢٠٢٦ هشه بيكري</span>
        <span className="dia">◆</span>
        <span>صُنعت في القصيم</span>
      </div>
    </footer>);

}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "tgChatId": "482226336",
  "showTray": true
} /*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const onJump = (id) => {
    const el = id === 'top' ? document.body : document.getElementById(id);
    if (!el) return;
    const y = id === 'top' ? 0 : el.getBoundingClientRect().top + window.pageYOffset - 60;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Nav onJump={onJump} />
      <Hero onJump={onJump} />
      <About />
      <MenuSection />
      <Gallery />
      <OrderForm chatId={t.tgChatId} />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="تيليجرام">
          <TweakText
            label="Chat ID للاستلام"
            value={t.tgChatId}
            onChange={(v) => setTweak('tgChatId', v)}
            placeholder="مثال: 123456789" />
          
          <p style={{ fontSize: 12, color: '#888', margin: '4px 0 0', lineHeight: 1.5 }}>
            للاستلام: ابعت /start للبوت من حسابك، ثم خذ chat_id من
            api.telegram.org/bot&lt;TOKEN&gt;/getUpdates
          </p>
        </TweakSection>
      </TweaksPanel>
    </div>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);