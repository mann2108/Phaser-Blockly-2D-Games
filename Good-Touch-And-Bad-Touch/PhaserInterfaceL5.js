
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
        width: 500,
        height: 300,
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
    this.load.image('sky', 'assets/bg.png');
    this.load.image('old','assets/man.png');
  this.load.image('kid','assets/kid.png');
  this.load.image('kis','assets/kis.png');
  this.load.image('shout','assets/shout.png');
  this.load.image('tell','assets/Telelder.png');
  this.load.image('right','assets/1.png');

  this.load.image('down','assets/2.png');
  this.load.image('up','assets/4.png');
}

function create ()
{
    //  A simple background for our game
        this.add.image(300, 150, 'sky');

        this.add.image(400, 50, 'kis');
        this.add.image(100, 70, 'tell');
        this.add.image(380, 240, 'shout');
 //arrows
 arrow=this.physics.add.group();
 arrow.create(150,200,'right');
 arrow.create(200,200,'right');
 arrow.create(250,200,'right');

 arrow.create(260,50,'right');
 

 arrow.create(310,50,'right');
 
 arrow.create(310,250,'right');
    //up
    arrow.create(260,150,'up');
    arrow.create(260,100,'up');

    arrow.create(60,150,'up');
    arrow.create(60,100,'up');

   //down
   
   arrow.create(270,250,'down');

     //kid
     kid = this.physics.add.image(80,205,'kid');
      //old
    old = this.physics.add.image(50,210,'old');
    
 
 //hospital
 this.add.image(680,370,'hospital');
    
 
}

function update ()
{
    
       
}

function exchangeSeats()
{

    kid.x=370;
    kid.y=250;

   
}
