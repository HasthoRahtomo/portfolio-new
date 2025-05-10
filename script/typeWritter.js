const rawText = "HELLO, MY NAME IS<br />HASTHO RAHTOMO";
const speed = 100;
let i = 0;

const typewriterEl = document.getElementById("typewriter");

const tokens = rawText.match(/<[^>]+>|[^<]/g);

function typeWriter() {
  if (i < tokens.length) {
    typewriterEl.innerHTML += tokens[i];
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
