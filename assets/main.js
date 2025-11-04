// ==========================
// Mobile Sidebar Toggle
// ==========================
const openSidebarBtn = document.getElementById('openSidebarBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');
const mobileSidebar = document.getElementById('mobileSidebar');

openSidebarBtn?.addEventListener('click', () => {
  mobileSidebar.setAttribute('aria-hidden', 'false');
  mobileSidebar.classList.add('active');
});

closeSidebarBtn?.addEventListener('click', () => {
  mobileSidebar.setAttribute('aria-hidden', 'true');
  mobileSidebar.classList.remove('active');
});

// ==========================
// Matrix-like Background Animation
// ==========================
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

const binary = "010101110010101001001010101010101001010100101010";
const fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0078ff";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = binary.charAt(Math.floor(Math.random() * binary.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

function animate() {
  drawMatrix();
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  resizeCanvas();
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
});
