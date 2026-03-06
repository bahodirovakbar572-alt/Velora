// Real-time soat
function updateClock(){
    const hourEl = document.querySelector('.hour');
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    h = h<10 ? '0'+h : h;
    m = m<10 ? '0'+m : m;
    hourEl.textContent = `${h}:${m}`;
}
setInterval(updateClock, 1000);
updateClock();

// Fokus va scroll index
let currentIndex = 0;
const games = document.querySelectorAll('.games');

function moveRight(){
    if(currentIndex < games.length-1) currentIndex++;
    games[currentIndex].focus();
    games[currentIndex].scrollIntoView({behavior:'smooth', inline:'center'});
}

function moveLeft(){
    if(currentIndex>0) currentIndex--;
    games[currentIndex].focus();
    games[currentIndex].scrollIntoView({behavior:'smooth', inline:'center'});
}

// Keyboard arrow keys (TV pult)
document.addEventListener('keydown', e=>{
    if(e.key==='ArrowRight') moveRight();
    if(e.key==='ArrowLeft') moveLeft();
});

// Gamepad API (PS pult)
function updateGamepad(){
    const gp = navigator.getGamepads()[0];
    if(!gp) return;

    if(gp.axes[0] > 0.5) moveRight();
    if(gp.axes[0] < -0.5) moveLeft();

    requestAnimationFrame(updateGamepad);
}
updateGamepad();