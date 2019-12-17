
var count = 1;
var player;
var girl;
var kid0;
var gameOver = false;
var scoreText;
var config;

function resize() {
    
    var canvas = document.querySelector("canvas");

    canvas.style.width="50%";
    canvas.style.height="50%";

    canvas.style.minHeight="50%";
    canvas.style.minWidth="50%";

}

window.onload = function() {

    //Game config here
    config = {
        type: Phaser.AUTO,
        width: 700,
        height: 420,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    game = new Phaser.Game(config);
    resize();
    window.addEventListener("resize", resize, false);
}


function preload ()
{
    this.load.image('sky', 'assets/white.png');
    this.load.image('girl','assets/badtouch9.jpg');
    this.load.image('boy','assets/goodtouch.jpg');
    this.load.image('poster','assets/poster.jpg');
  //  this.load.image('kid','assets/bad2.jpg');
  //  this.load.image('kid1','assets/baddddddddddddd.jpg');
    this.load.image('kid0','assets/kid.png');
  //  this.load.image('line','assets/line.htm');
    this.load.image('arrow','assets/3.png');
    this.load.image('arrow1','assets/1.png');
  
}

function create ()
{
    //  A simple background for our game
        this.add.image(350, 230, 'sky');
         //arrow
 
 
 
 //line
 //this.add.image(150, 235, 'line');

// this.add.image(500, 235, 'line');
 
 //left arrow
 this.add.image(200, 235, 'arrow');
 this.add.image(260, 235, 'arrow');
 
 //right arrow
 this.add.image(400, 235, 'arrow1');
 this.add.image(470, 235, 'arrow1');
 
  //girl
    girl = this.physics.add.image(80,220,'girl');
   
    //boy
    boy= this.physics.add.image(600,220,'boy');
 ///   girl.setCollideWorldBounds(true);
    
  //  boy.setCollideWorldBounds(true);
    
    //center image
  //       kid= this.physics.add.image(600,130,'kid');
  //  kid.setCollideWorldBounds(true);
 // kid = this.physics.add.image(600,360,'kid1');
   //heading
   this.add.image(350,10,'poster');
 

   //kid
 
 kid0= this.physics.add.image(340,235,'kid0');

}

function update ()
{
    
       
}
