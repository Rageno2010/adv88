canvas = new fabric.Canvas("myCanvas")
// Create canvas variable

//Set initial positions for ball and hole images.
var goal = "golf-h.png";
var ball = "ball.png";
block_image_width = 20;
block_image_height = 20;
ball_x = 20;
ball_y = 20;
hole_x = 1400;
hole_y = 450;
holeobject = "";
ballobject = "";


function load_img() {
	fabric.Image.fromURL(goal, function (Img) {
		holeobject = Img;
		holeobject.scaleToWidth(50);
		holeobject.scaleToHeight(50);
		holeobject.set({
			top: hole_y,
			left: hole_x
		});
		canvas.add(holeobject);
	});

	//fabric.Image.fromURL("ball.png", function (Img) {
      //  ballobject = Img;
        //ballobject.scaleToHeight(block_image_height);
       // ballobject.scaleToWidth(block_image_width);
        //ballobject.set({
          //  top: ball_y,
            //left: ball_x
        //});
       // canvas.add(ballobject);

	new_image();
	//}
}


function new_image() {
    fabric.Image.fromURL(ball, function (Img) {
        ballobject = Img;
        ballobject.scaleToHeight(block_image_height);
        ballobject.scaleToWidth(block_image_width);
        ballobject.set({
            top: ball_y,
            left: ball_x
        });
        canvas.add(ballobject);

		//fabric.Image.fromURL("goal-h.png", function (Img) {
			//holeobject = Img;
			//holeobject.scaleToWidth(50);
			//holeobject.scaleToHeight(50);
			//holeobject.set({
				//top: hole_y,
				//left: hole_x
			//});
			//canvas.add(holeobject);

		//});

		
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	 {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

	function up() {
		if (ball_y > 0){
        ball_y = ball_y - block_image_height
		canvas.remove(ballobject);
        load_img();
		}
	}

	function down() {
		if (ball_y < 480){
			ball_y = ball_y + block_image_height
			canvas.remove(ballobject);
        load_img();
		}
	}

	function left() {
		if (ball_x > 0) {
			ball_x = ball_x - block_image_width
			canvas.remove(ballobject);
        load_img();
		}
	}

	function right() {
		if (ball_x <= 1480) {
		ball_x = ball_x + block_image_width
		canvas.remove(ballobject);
		load_img();
		}
	}

}