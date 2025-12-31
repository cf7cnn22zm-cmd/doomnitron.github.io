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
  const y = c() - 624;
  return x - y;
}

function unlock() {
  const input = prompt("Password:");
  if (Number(input) !== resolve()) {
    document.body.innerHTML = "Nope 🚫";
    return;
  }

  document.getElementById("photo").style.display = "block";

  const music = document.getElementById("music");
  music.style.display = "block";
  music.play();
}

setTimeout(unlock, 800);
