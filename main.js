
function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	collect_coin=loadSound("coin.wav");
	mario_gameover=loadSound("gameover.wav");
	kick=loadSound("kick.wav");
	mariodie=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotResult);
	instializeInSetup(mario);
}

function modelLoaded()
{
	console.log("Model Loaded!")
}

function gotResult(results)
{
	
	if(results.length>0)
	{
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}

function draw() {
	
	game()
}






