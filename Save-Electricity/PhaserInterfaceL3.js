
var count = 1;
var player;
var cf;
var opf;
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
        width: 670,
        height: 410,
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
    this.load.image('sky', 'assets/kitchen2.jpg');
    this.load.image('of','assets/openfridge.png');
  
    this.load.image('cf','assets/closefridge.png');
  this.load.image('kid','assets/kid.png');
  this.load.image('down','assets/d 1.png');
  this.load.image('left','assets/left3 - Copy.png');

}

function create ()
{
    //  A simple background for our game
        this.add.image(334, 220, 'sky');

        //arrows
        this.add.image(640,370,'down');

        this.add.image(580,370,'left');
        this.add.image(480,370,'left');
        this.add.image(380,370,'left');
        this.add.image(300,370,'left');

    //cf
    cf = this.physics.add.image(80,260,'cf');
   
    //open fridge

    opf=this.physics.add.image(125,262,'of'); 


    
    kid = this.physics.add.image(640,300,'kid');
    kid.setCollideWorldBounds(true);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.physics.add.overlap(kid,opf,exchangeSeats,null,this);

}

function update ()
{
    
       
}

function exchangeSeats()
{
   opf.disableBody(true,true);

   
}
