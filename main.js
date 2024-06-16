let clicker = document.querySelector('#clicker');
let clickTimes = document.querySelector('#clickTimes');
let codes = ['#f1j', 'r1t', 'g1w', '#f2j', 'r2t', 'g2w', '#f3j', 'r3t', 'g3w'];
let r = codes[Math.floor(Math.random() * 9)];
let i = 1;

clicker.addEventListener("click", function () {    
    if (i <= 50) {
        clickTimes.textContent = (`${i++}`);
    }
    else {
        clickTimes.innerHTML = `${r} الكود:`;
    }
});

