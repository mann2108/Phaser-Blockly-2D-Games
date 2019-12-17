
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
        width: 785,
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
    this.load.image('sky', 'assets/b5.jpg');
    this.load.image('cycle','assets/cycle.png');
    
    this.load.image('bike','assets/bike.png');
    this.load.image('car','assets/car.png');
  //this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 55, frameHeight:109});
  this.load.image('kid','assets/kid2.png');
  this.load.image('arrow','assets/l.png');
  this.load.image('up','assets/u.png');
  this.load.image('left','assets/r.png');
}

function create ()
{
    //  A simple background for our game
        this.add.image(394, 249, 'sky');
         //arrow
    arrow=this.physics.add.group();
   
    arrow.create(390,400,'arrow');
    arrow.create(460,400,'arrow');
    arrow.create(530,400,'arrow');
    arrow.create(600,400,'arrow');

    arrow.create(320,310,'arrow');
    arrow.create(250,310,'arrow');
    arrow.create(180,310,'arrow');

    arrow.create(380,330,'up');
    arrow.create(380,260,'up');
    arrow.create(380,190,'up');
    arrow.create(380,70,'up');

    arrow.create(380,130,'up');
    arrow.create(440,130,'left');
    arrow.create(500,130,'left');
    arrow.create(570,130,'left');

    arrow.create(190,50,'arrow');
    arrow.create(260,50,'arrow');
    arrow.create(330,50,'arrow');
   
    
    //old
    old = this.physics.add.image(100,50,'cycle');
   
    old.setCollideWorldBounds(true);

    //bike
    this.physics.add.image(90,300,'bike');

    //car
    this.physics.add.image(700,130,'car');
    //kid
    kid = this.physics.add.image(680,395,'kid');
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
