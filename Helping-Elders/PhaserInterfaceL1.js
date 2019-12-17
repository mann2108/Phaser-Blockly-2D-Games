
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
        height: 500,
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
    this.load.image('sky', 'assets/giphy.gif');
    this.load.image('old','assets/old.png');
  //this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 55, frameHeight:109});
  this.load.image('kid','assets/kid.png');
  this.load.image('arrow','assets/w-arrow.png');
  
}

function create ()
{
    //  A simple background for our game
        this.add.image(384, 249, 'sky');
         //arrow
    arrow=this.physics.add.group();
    arrow.create(250,400,'arrow');
    arrow.create(320,400,'arrow');
    arrow.create(390,400,'arrow');
 
    
    //old
    old = this.physics.add.image(50,400,'old');
   
    old.setCollideWorldBounds(true);

    //kid
    kid = this.physics.add.image(140,395,'kid');
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
  //  this.physics.add.collider(dew, old);


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
