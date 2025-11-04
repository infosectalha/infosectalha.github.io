// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Matrix effect
const canvas = document.getElementById('matrixBackground');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const binary = '0101010110010101101010010101010110101010010101010101';
const fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(13,17,23,0.05)';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = '#00ff99';
  ctx.font = fontSize + 'px monospace';

  for(let i=0; i<drops.length; i++) {
    const text = binary.charAt(Math.floor(Math.random()*binary.length));
    ctx.fillText(text, i*fontSize, drops[i]*fontSize);

    if(drops[i]*fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);
