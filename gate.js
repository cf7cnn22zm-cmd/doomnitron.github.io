function a() {
  return [2, 3, 5, 7].reduce((x, y) => x * y); // 210
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

function unlock() {
  const input = prompt("Password:");
  if (Number(input) !== resolve()) {
    document.body.innerHTML = "Access denied 🚫";
    return;
  }

  const btn = document.getElementById("enterBtn");
  btn.style.display = "inline-block";

  btn.onclick = () => {
    btn.style.display = "none";

    const img = document.getElementById("photo");
    const music = document.getElementById("music");

    img.style.display = "block";
    music.play();
  };
}

setTimeout(unlock, 500);
