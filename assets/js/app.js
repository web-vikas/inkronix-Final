const ham = document.querySelector("#ham");
const nav = document.querySelector(".nav_links");
const talk = document.querySelector('#talk')
const talk_section = document.querySelector('.talk')
const close_icon_btn = document.querySelector('.close_icon_btn')
ham.addEventListener("click", () => {
  nav.classList.toggle("active");
});

talk.addEventListener('click',()=>{
  document.body.style.overflow = 'hidden'
  talk_section.classList.add('show')
})
close_icon_btn.addEventListener('click',()=>{
  document.body.style.overflow = 'scroll'
  talk_section.classList.remove('show')
})