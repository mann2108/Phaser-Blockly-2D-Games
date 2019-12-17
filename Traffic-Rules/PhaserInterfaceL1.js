
var count = 1;
var player;
var signal;
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
        height: 430,
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
    this.load.image('sky', 'assets/b1.jpg');
    this.load.image('signal','assets/signal.png');
     this.load.image('car','assets/car.png'); 
    this.load.image('car2','assets/car2.png');
    this.load.image('car2','assets/car2.png');
    this.load.image('bike','assets/bike.png');
    this.load.image('right','assets/1.png');
    this.load.image('up','assets/4.png');
  //this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 55, frameHeight:109});
  this.load.image('kid','assets/kid.png');
  this.load.image('arrow','assets/w-arrow.png');
  
}

function create ()
{
    //  A simple background for our game
        this.add.image(384, 220, 'sky');
         //arrow
    arrow=this.physics.add.group();
    //right

    arrow.create(240,330,'arrow');
    arrow.create(320,330,'arrow');
    arrow.create(400,330,'arrow');
    arrow.create(480,330,'arrow');
    arrow.create(560,330,'arrow');
    arrow.create(630,330,'arrow');

    //up
    arrow.create(120,445,'up');

    arrow.create(150,330,'up');
    arrow.create(120,445,'up');
    //car
    this.add.image(250,430,'car');
    
    //car2
    this.add.image(500,430,'car2');
    
    //bike
    this.add.image(400,440,'bike');
    
    //signal
    signal = this.physics.add.image(565,180,'signal');
   
    signal.setCollideWorldBounds(true);

    //kid
    kid = this.physics.add.image(150,445,'kid');
    kid.setCollideWorldBounds(true);

   
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
  //  this.physics.add.collider(dew, signal);


    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  //  this.physics.add.overlap(arrow,kid,stopWater,null,this);

}

function update ()
{
    
       
}

function stopWater()
{
 
   arrow.remove(true);
    player.anims.play('turn',true);

   
}
