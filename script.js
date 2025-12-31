function send() {
  alert("Message sent successfully!");
}

function darkMode() {
  document.body.classList.toggle("dark");
}

/* COUNTER */
window.onload = function () {
  let p = 0;
  let c = 0;

  let counter = setInterval(() => {
    if (p < 50) document.getElementById("projects").innerText = ++p;
    if (c < 30) document.getElementById("clients").innerText = ++c;
    if (p === 50 && c === 30) clearInterval(counter);
  }, 50);
};

/* THREE.JS 3D DESIGN */
const scene = new THREE.Scene();

/* CAMERA */
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / 300,
  0.1,
  1000
);

/* RENDERER */
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, 300);
document.getElementById("three-container").appendChild(renderer.domElement);

/* CUBE */
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00aaff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

/* LIGHT */
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 3;

/* INTERACTIVE CUBE */
document.addEventListener("mousemove", (e) => {
  cube.rotation.y = (e.clientX / window.innerWidth) * Math.PI;
  cube.rotation.x = (e.clientY / window.innerHeight) * Math.PI;
});

/* PARTICLES BACKGROUND */
const particlesCount = 500;
const particlesGeometry = new THREE.BufferGeometry();
const particlesMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
const positions = [];
for (let i = 0; i < particlesCount; i++) {
  positions.push((Math.random() - 0.5) * 10);
  positions.push((Math.random() - 0.5) * 10);
  positions.push((Math.random() - 0.5) * 10);
}
particlesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

/* ANIMATION */
function animate() {
  requestAnimationFrame(animate);
  particles.rotation.y += 0.001; // rotate particles
  renderer.render(scene, camera);
}

animate();
