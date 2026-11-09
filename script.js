
// =====================================
// Nicole PROPOSAL WEBSITE ❤️
// Made with love by Bhaliii
// =====================================


// 1. FLOATING HEARTS

function createHeart() {
  const container = document.getElementById("hearts");

  if (!container) return;

  const heart = document.createElement("div");

  heart.className = "heart";

  const emojis = ["❤️", "💕", "💗", "💖", "💘"];

  heart.textContent =
    emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";
  heart.style.animationDuration = (5 + Math.random() * 4) + "s";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

setInterval(createHeart, 600);


// 2. GIVE Nicole TIME TO DECIDE

const thinkBtn = document.getElementById("thinkBtn");
const response = document.getElementById("response");

if (thinkBtn && response) {
  thinkBtn.addEventListener("click", function() {
    response.textContent =
      "Nicole its just a yes you dont need time to think. ❤️";
  });
}


// 3. EMAIL NOTIFICATION FOR Bhali

const notifyBtn = document.getElementById("notifyBtn");

const nokuuuEmail = "fenyerejunior@gmail.com";

if (notifyBtn) {
  notifyBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      "Nicole SAID YES!! ❤️💍"
    );

    const message = encodeURIComponent(
      "Bhalii!! ❤️\n\n" +
      "Nicole has accepted your proposal!\n" +
      "Your website celebration was a success! 💍🎉\n\n" +
      "Congratulations!!"
    );

    window.location.href =
      `mailto:${nokuuuEmail}?subject=${subject}&body=${message}`;
  });
}
