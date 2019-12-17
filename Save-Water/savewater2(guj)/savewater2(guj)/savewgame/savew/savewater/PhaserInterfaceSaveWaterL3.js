
var grass;
var dew;
var count = 1;
var player;
var apple;
var tap;
var group;
var path;
var arrow;
var score = 0;
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
        width: 800,
        height: 400,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
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
    this.load.image('sky', 'assets/background2.jpg');

    this.load.image('dew','assets/dew.png');
    this.load.image('hose','assets/hose.png');
    this.load.image('arrow','assets/arrow - down.png');
    this.load.image('grass','assets/grass.png')
    this.load.image('arrow1','assets/arrow - west.png');
    this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 55, frameHeight:109});
}

function create ()
{
    //  A simple background for our game
        this.add.image(400, 200, 'sky');
    
        //grass
        grass = this.physics.add.staticGroup();
        grass.create(85,350,'grass');
    //pipe
    hose = this.physics.add.staticGroup();
    hose.create(50,300,'hose');

  

   // this.add.image('760','470','splash');
    this.add.image('730','470','bucket');

    //arrows
    arrow= this.physics.add.staticGroup();
    arrow.create(730,130,'arrow');
    arrow.create(730,130,'arrow');
    arrow.create(730,320,'arrow');
    arrow.create(730,320,'arrow');
    arrow.create(300,350,'arrow1');
    arrow.create(300,350,'arrow1');
    arrow.create(420,350,'arrow1');
    arrow.create(550,350,'arrow1');
    arrow.create(200,350,'arrow1');
    arrow.create(420,350,'arrow1');
    arrow.create(550,350,'arrow1');
    arrow.create(200,350,'arrow1');

    // The player and its settings
    player = this.physics.add.sprite(730, 20, 'dude');

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

    
player.anims.play('turn',true);
    //  The score
 //   scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

   
    this.time.addEvent({
        delay: 500,
        callback: ()=>{
                // spawn a new apple
                dew = this.physics.add.group({
                    key: 'dew',
                    repeat: 0,
                    setXY: { x: 79, y: 350, stepX: 5 }
                });
        },
        loop: true
    });

    //  Collide the player and the stars with the platforms
  // this.physics.add.collider(dew, hose);
this.physics.add.collider(player,arrow);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.physics.add.overlap(player,grass,stopWater,null,this);

}

function update ()
{
    
       
}

function stopWater()
{
   dew.clear(true);
    player.anims.play('turn',true);
}
