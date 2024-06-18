// document.addEventListener('DOMContentLoaded', function() {
//     const links = document.querySelectorAll('a');

//     links.forEach(link => {
//         link.addEventListener('mouseover', () => {
//             const cursorDot = document.querySelector('.custom-cursor-dot');
//             cursorDot.style.transform = 'scale(1.5)';
//         });

//         link.addEventListener('mouseleave', () => {
//             const cursorDot = document.querySelector('.custom-cursor-dot');
//             cursorDot.style.transform = 'scale(1)';
//         });
//     });
    
//     document.addEventListener('mousemove', function(e) {
//         const cursor = document.querySelector('.custom-cursor');
//         const cursorDot = document.querySelector('.custom-cursor-dot');
//         const mouseX = e.pageX;
//         const mouseY = e.pageY;

//         cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

//         // Smooth follow effect for the dot
//         setTimeout(() => {
//             cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
//         }, 50);
//     });
// });
// document.addEventListener('mousemove', function(e) {
//     const cursor = document.getElementById('customCursor');
//     cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
// });

const cursorRounded = document.querySelector('.custom-cursor');
const cursorPointed = document.querySelector('.custom-cursor-dot');


const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  
  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px)`;
 
}

window.addEventListener('mousemove', moveCursor)


function handleResize() {
  if (window.innerWidth <= 768) {
    cursorRounded.style.display = 'none';
    cursorPointed.style.display = 'none';
  } else {
      cursorRounded.style.display = 'block';
      cursorPointed.style.display = 'block';
  }
}


handleResize();