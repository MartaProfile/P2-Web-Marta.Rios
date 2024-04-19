import '../estilos/styles.css';
import 'swiper/swiper-bundle.css';

import Swiper from 'swiper';


document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        // Configuración del Swiper
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        autoplay: {
            delay: 3000
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

     // Agregar eventos de clic manualmente a las flechas de navegación
     const nextButton = document.querySelector('.swiper-button-next');
     const prevButton = document.querySelector('.swiper-button-prev');
 
     nextButton.addEventListener('click', function () {
         swiper.slideNext();
     });
 
     prevButton.addEventListener('click', function () {
         swiper.slidePrev();
     });
 });


 
 window.addEventListener('load', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
      const nombre = document.querySelector('#nombre').value;
      const apellidos = document.querySelector('#apellidos').value;
      const email = document.querySelector('#email').value;
      const terms = document.querySelector('#terms').checked;
  
      if (!nombre || !apellidos || !email) {
        alert('Por favor, completa todos los campos requeridos.');
        e.preventDefault(); // Evita que el formulario se envíe
      }
  
      if (!terms) {
        alert('Debes aceptar la política de privacidad para continuar.');
        e.preventDefault(); // Evita que el formulario se envíe
      }
  
      // Si todo está correcto, el evento 'submit' continúa y el formulario se enviará
    });
  });