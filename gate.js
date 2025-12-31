function a() {
  return [2, 3, 5, 7].reduce((x, y) => x * y);
}

function b() {
  return new Date(2018, 11, 31).getFullYear();
}

function c() {
  return Math.floor(Math.PI * Math.E * 100);
}

function resolve() {
  const x = b() + a();
  const y = c() - 644;
  return x - y;
}

function spawnHeart() {
  const heart = document.createElement("div");
  heart.className = "sparkle";
  heart.textContent = Math.random() > 0.5 ? "💗" : "✨";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}

function unlock() {
  const input = prompt("Password:");
  if (parseInt(input, 10) !== resolve()) {
    document.body.innerHTML = "Access denied 🚫";
    return;
  }

  const btn = document.getElementById("enterBtn");
  const img = document.getElementById("photo");
  const music = document.getElementById("music");

  btn.style.display = "inline-block";

  btn.onclick = () => {
    btn.style.display = "none";
    img.style.display = "block";

    music.play().catch(() => {});

    setInterval(spawnHeart, 600);
  };
}

setTimeout(unlock, 500);
