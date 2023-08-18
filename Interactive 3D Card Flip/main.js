// let animation = gsap.to('.faces', {rotationY:360, duration:2})

let wrapper = document.querySelector(".wrapper");
let parentCard = document.querySelector(".card");

let cardCount = 4;

const createCards = () => {
  for (var i = 0; i < cardCount - 1; i++) {
    let clone = parentCard.cloneNode(true);
    wrapper.appendChild(clone);
  }
};
createCards();

let cards = gsap.utils.toArray('.card > .faces')

cards.forEach(function(card, index){
    let animation = gsap.timeline()
    animation.to(card, {rotationY:180})
    animation.progress(1)
    card.animation = animation
    card.addEventListener('click', function(){
        card.animation.reversed(!card.animation.reversed())
    })
})

gsap.set(wrapper, {autoAlpha:1})
gsap.from(".card", {opacity:0, duration: 1, stagger: 0.2})