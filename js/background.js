const images = [ "1.jpg", "2.jpg", "3.jpg",];
const todayImage = images[Math.floor(Math.random()*images.length)];
const body = document.querySelector("body");
body.style.backgroundImage = `url(img/${todayImage})`;