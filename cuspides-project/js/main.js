// ── Nav ──────────────────────────────────────
const mainNav=document.getElementById('mainNav');
window.addEventListener('scroll',()=>{mainNav.classList.toggle('scrolled',window.scrollY>50)},{passive:true});
const navMob=document.getElementById('navMob'),burgerBtn=document.getElementById('burgerBtn');
function toggleNav(f){const o=typeof f==='boolean'?f:!navMob.classList.contains('open');navMob.classList.toggle('open',o);burgerBtn.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':'';}
burgerBtn.addEventListener('click',()=>toggleNav());

// ── Hero parallax ────────────────────────────
const heroImg=document.getElementById('heroImg');
window.addEventListener('scroll',()=>{if(window.scrollY<window.innerHeight)heroImg.style.transform=`translateY(${window.scrollY*.28}px)`},{passive:true});
setTimeout(()=>document.getElementById('heroTopo').classList.add('go'),300);

// ── Reveal ───────────────────────────────────
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// ── Counters ─────────────────────────────────
function counter(el,to,suf='',dur=1100){const s=performance.now();const run=t=>{const p=Math.min((t-s)/dur,1),e=1-Math.pow(1-p,3);el.textContent=Math.floor(e*to)+suf;if(p<1)requestAnimationFrame(run)};requestAnimationFrame(run)}
const sIO=new IntersectionObserver(entries=>{if(entries[0].isIntersecting){counter(document.getElementById('cStat1'),47,'+');counter(document.getElementById('cStat2'),12,'');counter(document.getElementById('cStat3'),100,'%');sIO.disconnect()}},{threshold:.5});
const sEl=document.querySelector('.hero__stats');if(sEl)sIO.observe(sEl);

// ── Smooth scroll ─────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();window.scrollTo({top:t.getBoundingClientRect().top+scrollY-68,behavior:'smooth'})}})});

// ── CAROUSEL FACTORY ─────────────────────────
function makeCarousel(trackId,prevId,nextId,dotsId,visibleFn){
  const track=document.getElementById(trackId);
  const items=[...track.children];
  const dotsEl=document.getElementById(dotsId);
  let current=0;

  function getVisible(){
    const w=window.innerWidth;
    if(typeof visibleFn==='function')return visibleFn(w);
    return w>=900?3:w>=600?2:1;
  }

  function getCardW(){
    const vis=getVisible();
    const gap=24; // 1.5rem
    const trackW=track.parentElement.offsetWidth;
    return (trackW - gap*(vis-1)) / vis;
  }

  function totalSlides(){return Math.max(0,items.length-getVisible())}

  function buildDots(){
    dotsEl.innerHTML='';
    const n=totalSlides()+1;
    for(let i=0;i<n;i++){
      const d=document.createElement('button');
      d.className='carousel-dot'+(i===current?' active':'');
      d.setAttribute('role','tab');d.setAttribute('aria-selected',i===current);
      d.setAttribute('aria-label',`Ir al ${i+1}`);
      d.addEventListener('click',()=>goTo(i));
      dotsEl.appendChild(d);
    }
  }

  function goTo(idx){
    const max=totalSlides();
    current=Math.max(0,Math.min(idx,max));
    const cw=getCardW()+24;
    track.style.transform=`translateX(-${current*cw}px)`;
    [...dotsEl.children].forEach((d,i)=>{d.classList.toggle('active',i===current);d.setAttribute('aria-selected',i===current)});
  }

  document.getElementById(prevId).addEventListener('click',()=>goTo(current-1));
  document.getElementById(nextId).addEventListener('click',()=>goTo(current+1));

  function resize(){
    items.forEach(item=>{item.style.flexBasis=getCardW()+'px';item.style.minWidth=getCardW()+'px'});
    if(current>totalSlides())current=totalSlides();
    goTo(current);buildDots();
  }

  window.addEventListener('resize',resize);
  resize();buildDots();

  // touch swipe
  let tx=0;
  track.addEventListener('touchstart',e=>{tx=e.touches[0].clientX},{passive:true});
  track.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>40){dx<0?goTo(current+1):goTo(current-1)}});
}

makeCarousel('modTrack','modPrev','modNext','modDots');
makeCarousel('expTrack','expPrev','expNext','expDots');
makeCarousel('teamTrack','teamPrev','teamNext','teamDots',w=>w>=1024?4:w>=600?2:1);