
var count = 1;
var player;
var girl;
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
    this.load.image('girl','assets/girl.png');
    this.load.image('boy','assets/boy.png');
    this.load.image('poster','assets/poster.jpg');
      this.load.image('kid','assets/good.png');

  
}

function create ()
{
    //  A simple background for our game
        this.add.image(350, 230, 'sky');
         //arrow
 
 
    
    //girl
    girl = this.physics.add.image(50,400,'girl');
   
    //boy
    boy= this.physics.add.image(650,400,'boy');
    girl.setCollideWorldBounds(true);
    
    boy.setCollideWorldBounds(true);
    
    //center image
    kid = this.physics.add.image(340,395,'kid');
    kid.setCollideWorldBounds(true);

   //heading
   this.add.image(350,50,'poster');
 
}

function update ()
{
    
       
}
