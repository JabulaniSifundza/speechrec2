export const drawBall = (ctx, x, y, r) =>{
	ctx.beginPath()
	ctx.arc(x,y,r,0, 3*Math.PI);
	ctx.fillStyle = "#aa0000"
	ctx.fill()
}