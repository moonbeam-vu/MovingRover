canvas=document.getElementById('myCanvas')
ctx=canvas.getContext('2d')
background_image='mars.jpg'
rover_image='rover.png'
rover_width=300
rover_height=300
rover_x=250
rover_y=250
function add(){
    background_imgtag=new Image()
    background_imgtag.onload=uploadBackground
    background_imgtag.src=background_image
   rover_imgtag=new Image()
    rover_imgtag.onload=uploadRover
    rover_imgtag.src=rover_image
}
function uploadBackground(){
    ctx.drawImage(background_imgtag, 0,0, canvas.width, canvas.height)
}
function uploadRover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width, rover_height)
}
window.addEventListener('keydown', myKeyDown)
function myKeyDown(e){
    keyPressed=e.keyCode;
    console.log (keyPressed)
    if (keyPressed=='38'){
        console.log('up')
        up()
    }
    if (keyPressed=='40'){
        console.log('down')
        down()
    }
    if (keyPressed=='37'){
        console.log('left')
        left()
    }
    if (keyPressed=='39'){
        console.log('right')
        right()
    }
}
function up(){
    rover_y=rover_y-5
    uploadBackground()
    uploadRover()
}
function left(){
    rover_x=rover_x-5
    uploadBackground()
    uploadRover()
}
function right(){
    rover_x=rover_x+5
    uploadBackground()
    uploadRover()
}
function down(){
    rover_y=rover_y+5
    uploadBackground()
    uploadRover()
}