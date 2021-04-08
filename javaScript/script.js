
var EndSeco = 45;
var stop = true;
function time() {
  if(EndSeco <= 11){
    document.querySelector("#RemainingTime").style.color = "#ff073a";
  }
  if (EndSeco <= 1) {
    stop = false;
    document.getElementById("gameOver").style.display = "inline-block";
  } else {
    EndSeco--;
    document.querySelector("#RemainingTime").textContent = EndSeco;
  }
}
if (stop) {
  setInterval(time, 1000);
}

function refresh(){
  location.reload();
}