
var count = 1;
var player;
var old;
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
        width: 750,
        height: 440,
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
    this.load.image('sky', 'assets/backgroud1.jpg');
  this.load.image('kid','assets/kid.png');
  this.load.image('up','assets/up.png');
  this.load.image('right','assets/right.png');
  this.load.image('left','assets/left.png');

  this.load.image('lamp','assets/lamp.png');
     this.load.image('battery','assets/battery.png');
  this.load.image('wire','assets/wire.png');

}

function create ()
{
    //  A simple background for our game
        this.add.image(384, 220, 'sky');

        //arrow
        this.add.image(150,180,'up');
     this.add.image(150,230,'up');
     this.add.image(550,230,'up');
     this.add.image(550,180,'up');
    
  
     //left
     this.add.image(150,280,'left');
     this.add.image(200,280,'left');
     this.add.image(250,280,'left');
     this.add.image(300,280,'left');
     this.add.image(350,330,'up');

     //right
     this.add.image(400,280,'right');
     this.add.image(450,280,'right');
     this.add.image(500,280,'right');
     this.add.image(550,280,'right');
    
 //lamp
 this.add.image(350,100,'lamp');

 //wire
 this.add.image(550,90,'wire');

 //battery
 this.add.image(150,90,'battery');
  
     //kid
     kid = this.physics.add.image(350,395,'kid');
     kid.setCollideWorldBounds(true);


}

function update ()
{
    
       
}
