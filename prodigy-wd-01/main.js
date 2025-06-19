const navMenu=document.getElementById('nav-menu');
toggleMenu=document.getElementById('toggle-menu');
closeMenu=document.getElementById('close-menu');

toggleMenu.addEventListener('click',()=>{
  navMenu.classList.toggle('show-menu')
})

closeMenu.addEventListener('click',()=>{
  navMenu.classList.remove('show-menu')
})