
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
    this.load.image('sky', 'assets/bus.jpg');
    this.load.image('old','assets/old.png');
  //this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 55, frameHeight:109});
  this.load.image('kid','assets/kid.png');
  this.load.image('arrow','assets/w-arrow.png');
  this.load.image('seat','assets/seat.jpg');
  this.load.image('lady','assets/lady.png');
  this.load.image('guy','assets/guy.png');
  this.load.image('right','assets/w-arrow.png');
  
  this.load.image('down','assets/down.png');
}

function create ()
{
    //  A simple background for our game
        this.add.image(384, 220, 'sky');

        //arrow
        this.add.image(320,150,'right');
        this.add.image(360,210,'down');
        this.add.image(360,280,'down');
    
    //old
    old = this.physics.add.image(370,500,'old');
   
    old.setCollideWorldBounds(true);


    
//guy and lady
this.add.image(370,150,'lady');
this.add.image(500,140,'guy'); //500,150
    //kid
    kid = this.physics.add.image(270,145,'kid');
    kid.setCollideWorldBounds(true);

 
    //seat
    this.add.image(245,202,'seat');

    
 /*   // The player and its settings
    player = this.physics.add.sprite(140,380, 'dude');

    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    
player.anims.play('turn',true);*/
  
//  Collide the player and the stars with the platforms
  //  this.physics.add.collider(dew, old);


    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.physics.add.overlap(kid,old,exchangeSeats,null,this);

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
