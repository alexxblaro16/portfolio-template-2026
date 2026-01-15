import './style.css'
import { gsap } from 'gsap'

// Esperamos a que todo el contenido cargue
window.addEventListener('load', () => {
  const tl = gsap.timeline();

  // Animación del Header (aparece desde arriba)
  tl.from("header", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  })
  // Animación del título principal (entra con zoom suave)
  .from("h1", {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: "back.out(1.7)"
  }, "-=0.5") 
  // Animación del párrafo (aparece desde abajo)
  .from("p", {
    y: 30,
    opacity: 0,
    duration: 0.8,
  }, "-=0.5");
});