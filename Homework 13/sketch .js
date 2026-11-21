var playerX = 100;
var playerY = 100;
var obstacleX = [50,300,150,400,250];
var obstacleY = [200,150,350,100,400];
var obstacleSize = [40,25,35,50,30];
var obstacleSpeedX = [];
var obstacleSpeedY = [];
var mouseShapeX = [];
var mouseShapeY = [];

function setup() {
    createCanvas(500, 500);
    for (var i =0; i < obstacleX.length; i++) {
        obstacleSpeedX[i] = random(-3,3);
        obstacleSpeedY[i] = random(-3,3);
    }
}

function draw() {
    background(230,210,240);
    createExit();
    createPlayer();
    movePlayer();
    createObstacles();
    moveObstacles();
    drawMouseShape();
    createBorder();
    displayWin();
}

// Create The Player
function createPlayer() {
    fill(150,80,200);
    circle(playerX,playerY,30);
}

//Move the Player using WASD
function movePlayer() {
    if (keyIsDown(87)) {
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

// Create Five ostacles using arrays
function createObstacles() {
    for (var i=0; i < obstacleX.length; i++) {
        if(i== 0) {
        fill(255,120,150);
        } else if(i==1) {
        fill(80,150,255);
        } else if(i==2) {
        fill(255,200,80);
        } else if(i==3) {
        fill(100,200,150);
        } else {
        fill(200,100,255);
         }
            circle(obstacleX[i],obstacleY[i],obstacleSize[i]);
     }
}

//Move the Five Obstacle
function moveObstacles () {
    for (var i=0; i < obstacleX.length; i++) {
        obstacleX[i] += obstacleSpeedX[i];
        obstacleY[i] += obstacleSpeedY[i];
        if(obstacleX[i] > width) {
            obstacleX[i] = 0;
        }   else if(obstacleX[i] < 0) {
            obstacleX[i] = width; 
        }
        if (obstacleY[i] > height) {
            obstacleY[i] = 0;
        }   else if (obstacleY[i] < 0) {
            obstacleY[i] = height;
        }
    }
}

//draw a shape when the mouse if clicked
function drawMouseShape() {
    fill(100,200,150);
    for (var i=0; i< mouseShapeX.length; i++) {
    circle(mouseShapeX[i], mouseShapeY[i],25);    
        }
    } 
    function mouseClicked() {
        mouseShapeX.push(mouseX);
        mouseShapeY.push(mouseY);
    }

    //create the border
    function createBorder() {
        noFill();
        stroke(100,50,150);
        strokeWeight(5);
        rect(0,0,width,height);
        noStroke();
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
