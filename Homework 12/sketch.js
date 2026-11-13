var playerX = 100;
var playerY = 100;
var obstacleX = 50;
var obstacleY = 200;
var obstacleXSpeed;
var obstacleYSpeed;
var obstacle2X = 300;
var obstacle2Y = 150;
var obstacle2XSpeed;
var obstacle2YSpeed;
var mouseShapeX = -50;
var mouseShapeY = -50;

function setup() {
    createCanvas(500,500);
    obstacleXSpeed = random(-3,3);
    obstacleYSpeed = random(-3,3);
    obstacle2XSpeed = random(-3,3);
    obstacle2YSpeed = random(-3,3);
}
function draw() {
    background(210,190,230);

    //exit
    fill(100,200,100);
    rect(450,450,50,50);
    fill(0);
    textSize(16);
    text("EXIT",455,480);

    //player
    fill(100,50,150);
    circle(playerX, playerY, 30);

    //move the player
    if (keyIsDown(87)) {
        playerY -= 5;
    }
    else if (keyIsDown(83)) {
        playerY += 5;
    }
    else if (keyIsDown(68)) {
        playerX += 5;
    }
    else if (keyIsDown(65)) {
        playerX -= 5;
    }

    // first moving obstacle
    fill(255,100,150);
    circle(obstacleX, obstacleY,40);

    // move the obstacle
    obstacleX += obstacleXSpeed;
    obstacleY += obstacleYSpeed;

    //Keep the obstacle moving around the canvas
    if (obstacleX >width) {
        obstacleX = 0;
    }
    else if (obstacleX <0) {
        obstacleX = width;
    }
    if (obstacleY >height) {
        obstacleY = 0;
    }
    else if (obstacleY < 0) {
        obstacleY = height;
    }

    // second moving obstacle
    fill(70,150,255);
    circle(obstacle2X, obstacle2Y, 20);

    //move the second obstacle
    obstacle2X += obstacle2XSpeed;
    obstacle2Y += obstacle2YSpeed; 

    // keep second obstacle on the canvas
    if (obstacle2X > width) {
        obstacle2X = 0;
    }
    else if (obstacle2X < 0) {
        obstacle2X = width;
    }
    if (obstacle2Y > height) {
        obstacle2Y = 0;
    }
    else if (obstacle2Y < 0) {
        obstacle2Y = height;
    }

    //obstacle
    fill(120,120,120);
    circle(mouseShapeX, mouseShapeY, 25);


    //winning 
    if (playerX >= 450 && playerY >= 450) {
        fill(0);
        textSize(30);
        text("YOU WON!", 180,250);
    }
    else {
        //player has not reached the exit 
    }
}
    function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}