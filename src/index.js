var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d')

function drawLine(x1, y1, x2, y2) {
  context.beginPath()
  context.moveTo(x1, y1)
  context.lineTo(x2, y2)
  context.stroke()
}

r = canvas.width / 2
c_x = canvas.width / 2
c_y = canvas.height / 2
hour_hand_r = r * 0.3
minute_hand_r = r * 0.6
second_hand_r = r * 0.8
context.beginPath()
context.arc(c_x, c_y, r, 0, 2 * Math.PI, false)
context.stroke()

function animate() {
  context.clearRect(0,0, canvas.width,canvas.height)
  console.log(new Date().getSeconds())
  requestNextAnimationFrame(animate)
}

requestNextAnimationFrame(animate)