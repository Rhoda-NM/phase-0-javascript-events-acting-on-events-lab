const dodger = document.getElementById("dodger");
dodger.style.background = "#ff69b4";
dodger.style.bottom = "0px";
dodger.style.left = "180px";
dodger.style.right = "180px";
document.addEventListener('keydown', function(event) {
    //console.log(event);
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();  
    }
    else if( event.key === "ArrowRight") {
       moveDodgerRight();
    }
    
})
function moveDodgerLeft () {
    const leftNum = dodger.style.left.replace("px", "");
    const left = parseInt(leftNum, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
        console.log(left);
    }
}
function moveDodgerRight() {
    const leftNum = dodger.style.left.replace("px", "");
    const left = parseInt(leftNum, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}
