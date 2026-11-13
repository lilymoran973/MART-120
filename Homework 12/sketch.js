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
    createCanvas(500, 500);
    obstacleXSpeed = random(-3,3);
    obstacleYSpeed = random(-3,3);
    obstacle2XSpeed = random(-3,3);
    obstacle2Yspeed = random(-3,3);
}

function draw() {
    background(230,210,240);
    createExit();
    createPlayer();
    movePlayer();
    createObstacles();
    moveObstacle1();
    moveObstacle2();
    drawMouseShape();
    createBorder();
    displayWin();
}

// Create The Player
function createPlayer() {
    fill(150,80,200);
    circle(playerX,PLayerY,30);
}

//Move the Player using WASD
function movePlayer() {
    if(keyIsDown(87)) {
        playerY-= 5;
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
}

//Create Two Obstacles
function createObstacles() {
    //first obstacle
    fill(255,120,150);
    circle(obstacleX, obstacleY, 40);
    //second obstacle
    fill(80,150,255);
    rect(obstacle2X, obstacle2Y,25,25);
}

//move the first obstacle
function moveObstacle1() {
    obstacleX += obstacleXSpeed;
    obstacleY += obstacleYSpeed;
    if(obstacleX > width) {
        obstacleX = 0;
    }
    else if (obstacleX < 0) {
        obstacleX = width;
    }
    if(obstacleY >height) {
        obstacleY = 0;
    }
    else if (obstacleY < 0) {
        obstacleY = height;
    }
}

//move the second obstacle
function moveObstacle2() {
    obstacle2X += obstacle2XSpeed;
    obstacle2Y += obstacle2YSpeed;
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
}

//draw a shape when the mouse if clicked
function drawMouseShape() {
    fill(100,200,150);
    circle(mouseShapeX, mouseShapeY,25);
    } 
    function mouseClicked() {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }

    //create the border
    function createBorder() {
        noFill();
        stroke(100,50,150);
        strokeWeight(5);
        rect(0,0,width,height);
        noStorke();
    }
    //create the exit
    function createExit() {
        fill(100,220,120);
        rect(450,450,50,50);
        fill(0);
        textSize(16);
        text("Exit",455,480);
    }

    //Winning message
    function displayWin() {
        if (playerX >= 450 && playerY >= 450) {
            fill(0);
            textSize(30);
            text("YOU WON!", 180,250);
        }
    }
