 let headerOrder = document.querySelector('.header-order');
 let burger = document.querySelector('#burger');
 let body = document.querySelector('body');

 burger.addEventListener('click', () => {
     headerOrder.classList.toggle('show');
     body.classList.toggle('overflow')
 })