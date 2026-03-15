// Initialize AOS
AOS.init({ duration: 1200, once: true });

// Hero typing effect
const heroText = document.querySelector('.hero-text');
const textContent = "Best Pizza in Town";
let index = 0;
function typeEffect() { if(index < textContent.length){ heroText.textContent += textContent.charAt(index); index++; setTimeout(typeEffect, 150); } }
window.addEventListener('load', () => { heroText.textContent=""; typeEffect(); });

// Smooth scroll
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
  });
});

// Back-to-top button
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => { backBtn.style.display = window.scrollY>300?"block":"none"; });
backBtn.addEventListener('click', () => { window.scrollTo({ top:0, behavior:'smooth' }); });

// Menu modal
const menuCards = document.querySelectorAll('.menu-card');
const pizzaData = [
  {name:"Margherita", image:"images/pizza1.jpg", desc:"Classic Margherita with fresh basil.", price:"$12"},
  {name:"Pepperoni", image:"images/pizza2.jpg", desc:"Spicy pepperoni with mozzarella.", price:"$15"},
  {name:"Vegetarian", image:"images/pizza3.jpg", desc:"Loaded with fresh vegetables.", price:"$14"}
];
menuCards.forEach((card,i)=>{
  card.addEventListener('click', ()=>{
    document.getElementById('modalTitle').textContent=pizzaData[i].name;
    document.getElementById('modalImage').src=pizzaData[i].image;
    document.getElementById('modalDesc').textContent=pizzaData[i].desc+" Price: "+pizzaData[i].price;
    new bootstrap.Modal(document.getElementById('pizzaModal')).show();
  });
});