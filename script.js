const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

if (window.matchMedia('(pointer:fine)').matches) {
  let mx = innerWidth/2, my = innerHeight/2, rx = mx, ry = my;
  window.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; dot.style.left=mx+'px'; dot.style.top=my+'px'; });
  function animateCursor(){
    rx += (mx-rx)*0.16; ry += (my-ry)*0.16;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  document.querySelectorAll('a, button, .project, .skill-cloud span').forEach(el=>{
    el.addEventListener('mouseenter',()=>{ring.style.width='54px';ring.style.height='54px'});
    el.addEventListener('mouseleave',()=>{ring.style.width='34px';ring.style.height='34px'});
  });
}

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}
  });
});
