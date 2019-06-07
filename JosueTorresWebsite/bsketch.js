var swell = 0;
var swells = 0;
var blob;
var bloba;
var opacity = 255;
var speedY = 10;
var speedX = 5;
var dx = 1;
var diameter = 26;
var dy = 1;
var r = 255;
var g = 255;
var b = 255;
var r1 = 200;
var g1 = 55;
var b1 = 170;
var simonsBall;
var brettsBall;


function setup() {
  noStroke();
  createCanvas(600, 400);
  simonsBall = new Particle(25, 25);
  brettsBall = new Particlet(425, 125);
  blobs = new Blob(); 
  bloba = new Bloba(); 

}

function draw() {
  blendMode(NORMAL);
  //background(0);
  Gradient();
  simonsBall.update();
  brettsBall.update();
  simonsBall.show();
  brettsBall.show();
  blobs.update();
  blobs.show();
  bloba.update();
  bloba.show();
}

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.yspeed = 0;
  this.dy = dy;
  this.dx = dx;
  this.speedY = speedY;
  this.speedX = speedX;
  this.diameter = diameter;  
  this.history = [];
  
  this.update = function() {
    this.y += this.speedY * this.dy;
    this.x += this.speedX * this.dx;
    
    if (this.y > height - this.diameter / 2) {  blobs = new Blob(this.x, this.y);
      r = 255; g = 255; b = 0;
      this.y = height - this.diameter / 2;
      this.dy *= -1;
      this.speedY = random(1, 15);
      this.speedX = random(1, 15);

    }
    if (this.y < this.diameter / 2) {
      blobs = new Blob(this.x, this.y);
      r = 0; g = 0; b = 255;
      this.y = this.diameter / 2;
      this.dy *= -1;
      this.speedY = random(1, 10);
      this.speedX = random(1, 10);

    }
       if (this.x > width - this.diameter / 2) {  blobs = new Blob(this.x, this.y);
      r = 0; g = 255; b = 0;
      this.x = width - this.diameter / 2;
      this.dx *= -1;
      this.speedY = random(1, 10);
      this.speedX = random(1, 10);

    }
    if (this.x < this.diameter / 2) {
      blobs = new Blob(this.x, this.y);
      r = 255; g = 0; b = 0;
      this.x = this.diameter / 2;
      this.dx *= -1;
      this.speedY = random(1, 10);
      this.speedX = random(1, 10);

    }
  
    var v = createVector(this.x, this.y);
    this.history.push(v);
    
    if (this.history.length > 50) {
    this.history.splice(0, 1);
    }
  }

  
  this.show = function() {
    blendMode(SCREEN);
    noStroke();
 //   fill(0);
 //   ellipse(this.x, this.y, this.diameter, this.diameter);
    
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      var o = map(i, this.history.length, 0, 255, 0);
      fill(r + i, g + i, b + i, o);
      var rady = map(i, this.history.length, 0, diameter, 0);
      var offsets = random(-3, 3);

      ellipse(pos.x, pos.y, rady + offsets, rady + offsets);
  }
}
}

function Particlet(x, y) {
  this.x = x;
  this.y = y;
  
  this.yspeed = 0;
  this.dy = dy;
  this.dx = dx;
  this.speedY = speedY;
  this.speedX = speedX;
  this.diameter = diameter;  
  this.history = [];
  
  this.update = function() {
    this.y += this.speedY * this.dy;
    this.x += this.speedX * this.dx;
    
    if (this.y > height - this.diameter / 2) {  bloba = new Bloba(this.x, this.y);
      r1 = 255; g1 = 255; b1 = 0;
      this.y = height - this.diameter / 2;
      this.dy *= -1;
      this.speedY = random(1, 10);
      this.speedX = random(1, 10);

    }
    if (this.y < this.diameter / 2) {
      bloba = new Bloba(this.x, this.y);
      r1 = 0; g1 = 0; b1 = 255;
      this.y = this.diameter / 2;
      this.dy *= -1;
      this.speedY = random(1, 10);
      this.speedX = random(1, 10);

    }
       if (this.x > width - this.diameter / 2) {  bloba = new Bloba(this.x, this.y);
      r1 = 0; g1 = 255; b1 = 0;
      this.x = width - this.diameter / 2;
      this.dx *= -1;
      this.speedY = random(1, 10);
      this.speedX = random(1, 10);

    }
    if (this.x < this.diameter / 2) {
      bloba = new Bloba(this.x, this.y);
      r1 = 255; g1 = 0; b1 = 0;
      this.x = this.diameter / 2;
      this.dx *= -1;
      this.speedY = random(1, 100);
      this.speedX = random(1, 100);

    }
   
   
    var v = createVector(this.x, this.y);
    this.history.push(v);
    
    if (this.history.length > 50) {
    this.history.splice(0, 1);
    }
  }

  
  this.show = function() {
 blendMode(SCREEN);
      noStroke();
  //  fill(0);
   // ellipse(this.x, this.y, this.diameter, this.diameter);
    
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      var o = map(i, this.history.length, 0, 255, 0);
      fill(r1 + i, g1 + i, b1 + i, o);
      var rady = map(i, this.history.length, 0, diameter, 0);
      var offsets = random(-3, 3);

      ellipse(pos.x, pos.y, rady + offsets, rady + offsets);
  }
}
}

  function Blob(a, b) {
  this.a = a;
  this.b = b;
  this.swell = swell;
  this.update = function() {
  this.swell += 1;
  }
  
  this.show = function() {

  noFill();
  strokeWeight(1);
  stroke(255 - (this.swell * 1.5));
  ellipse(this.a, this.b, this.swell, this.swell);
  }
  
}
 function Bloba(c, d) {

  this.c = c;
  this.d = d;
  this.swell = swells;
  this.update = function() {
  this.swell += 1;
  }
  
  this.show = function() {

  noFill();
  strokeWeight(1);
  stroke(255 - (this.swell * 1.5));
  ellipse(this.c, this.d, this.swell, this.swell);
  }
  
}

  function Gradient() {
    for (var i = 0; i < height; i++) {
  var f = map(i, 0, height, 0, 150);
    stroke(f/2,0,f);
    line(0, i, width, i);
    
  }}