let navItems = gsap.utils.toArray(".nav li");
let currentItem = navItems[0]

function initialNav(){
    gsap.set('.line', {x:currentItem.offsetLeft, width:currentItem.clientWidth})

}

navItems.forEach((el, i) => {
  el.addEventListener("mouseenter", function () {
    gsap.to('.line', {duration: 2, overwrite: true, x:el.offsetLeft, width:el.clientWidth})
    currentItem = el
  });
});

window.addEventListener('resize', initialNav)

initialNav()

gsap.to('.line', {autoAlpha: 1})