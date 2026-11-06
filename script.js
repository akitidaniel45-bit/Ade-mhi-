function playMusic() {

    const music = document.getElementById("music");

    music.play();

}

function sayYes() {

    document.getElementById("response").classList.remove("hidden");

    document.getElementById("response").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    createHearts();

}

function createHearts() {

    for (let i = 0; i < 30; i++) {

        let heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);

    }

}
