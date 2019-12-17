
var count = 1;
var player;
var old;
var stop;
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
        height: 400,
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
    this.load.image('sky', 'assets/background.gif');
    this.load.image('old','assets/green.png');
  //this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 55, frameHeight:109});
  this.load.image('kid','assets/cycle3.png');
  this.load.image('right','assets/1.png');
  this.load.image('down','assets/2.png');
  this.load.image('left','assets/3.png');
  this.load.image('up','assets/4.png');
  this.load.image('stop','assets/stop.png');
  this.load.image('slow','assets/slow.png');
  this.load.image('go','assets/go.png');
  this.load.image('right','assets/w-arrow.png');
  
  this.load.image('down','assets/down.png');
}

function create ()
{
    //  A simple background for our game
        this.add.image(350, 198, 'sky');
      stop=  this.physics.add.image(350,250,'go');
       //arrow
        this.add.image(580,280,'left');
        this.add.image(480,280,'left');
        this.add.image(380,280,'left');
        this.add.image(460,330,'down');
        this.add.image(400,350,'left');
        this.add.image(300,350,'left');
        this.add.image(460,220,'up');
        this.add.image(380,180,'left');
        this.add.image(300,180,'left');
        this.physics.add.image(250,350,'stop');
        this.physics.add.image(250,150,'slow');
     
    //old
    old = this.physics.add.image(100,90,'old');
   
  

   //kid
    kid = this.physics.add.image(670,250,'kid');
  
 
    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
 //   this.physics.add.overlap(kid,old,exchangeSeats,null,this);

}

function update ()
{
    
       
}

function exchangeSeats()
{
    old.x=270;
    old.y=222;
    kid.x=370;
    kid.y=250;

   
}
