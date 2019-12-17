
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
    this.load.image('sky', 'assets/grass.png');
    this.load.image('old','assets/woman.png');
  //this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 55, frameHeight:109});
  this.load.image('kid','assets/kid.png');
this.load.image('hospital','assets/hospital.png');
  this.load.image('road','assets/sand_tile.png');
  this.load.image('road1','assets/sand_tile.png');
  this.load.image('roadt','assets/turn.png');
  this.load.image('roadd','assets/downturn.png');
 
}

function create ()
{
    //  A simple background for our game
        this.add.image(384, 220, 'sky');
  //road
  this.add.image(-10,120,'road');
  this.add.image(80,120,'road');
  this.add.image(180,120,'road');
  this.add.image(280,120,'road');
  this.add.image(380,120,'road');
  this.add.image(480,120,'road');
  this.add.image(580,120,'road');
  this.add.image(680,120,'road');
  this.add.image(780,120,'road');
  this.add.image(880,120,'road');

  //down road
  this.add.image(80,210,'road');
  this.add.image(80,310,'road');
  this.add.image(80,410,'road');
 
  this.add.image(180,410,'road');
  this.add.image(280,410,'road');
  this.add.image(380,410,'road');
  this.add.image(480,410,'road');
  this.add.image(580,410,'road');
  
 
  
   
    
    //old
    old = this.physics.add.image(50,70,'old');
    old.setCollideWorldBounds(true);
     //kid
     kid = this.physics.add.image(105,95,'kid');
     kid.setCollideWorldBounds(true);
 //hospital
 this.add.image(680,370,'hospital');
    
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
    //this.physics.add.overlap(kid,old,exchangeSeats,null,this);

}

function update ()
{
    
       
}

function exchangeSeats()
{
    old.x=270;
    old.y=145;
    kid.x=370;
    kid.y=250;

   
}
