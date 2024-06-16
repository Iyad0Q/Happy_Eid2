let clicker = document.querySelector('#clicker');
let clickTimes = document.querySelector('#clickTimes');
let codes = ['@f1j', '%r1t', '*g1w', '#xh', '^f2j', '#r2t', '@g2w', '#yx', '$f3j', '&r3t', '@g3w', '&f14j'];
let r = codes[Math.floor(Math.random() * 12)];
// let sheepSound = new Audio("sheep.mp3");
// let clickSound = new Audio("pop.mp3");
let i = 1;

clicker.addEventListener("click", function () {    
    if (i <= 50) {
        clickTimes.textContent = (`${i++}`);
        // clickSound.play();
    }
    else {
        clickTimes.textContent = `${r} الكود:`;
        // sheepSound.play();
    }
});

