

setInterval(gameLoop,1000/30);


let ball = {
  x:0,
  y:0
}

function gameLoop(){
  ball.x += bspeedx
  ball.y += bspeedy


  document.querySelector('someelement').style.top = ball.y + 'px'
  document.querySelector('someelement').style.top
}


window.location.href = "http://google.com"
