
var dew;
var count = 1;
var player;
var apple;
var tap;
var group;
var path;
var arrow;
var arrow2;
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
    this.load.image('sky', 'assets/background2.jpg');

    this.load.image('dew','assets/dew.png');
    this.load.image('hose','assets/hose1.png');
    this.load.image('arrow','assets/arrow - down.png');
    this.load.image('arrow3','assets/arrow - west.png');
    this.load.image('arrow2','assets/up.png');
    this.load.image('arrow1','assets/arrow.png');
    this.load.image('grass','assets/grass.png')
    this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 55, frameHeight:109});
}

function create ()
{
    //  A simple background for our game
        this.add.image(400, 200, 'sky');
    
          //grass
          grass = this.physics.add.staticGroup();
          grass.create(720,370,'grass');
    //pipe
    hose = this.physics.add.staticGroup();
    hose.create(750,320,'hose');



   // this.add.image('760','470','splash');
    //this.add.image('730','470','bucket');

    //arrows
    arrow= this.physics.add.staticGroup();
   //arrow.create(60,220,'arrow');
    arrow.create(250,270,'arrow');
    arrow.create(250,270,'arrow');
    arrow.create(350,350,'arrow1');
    arrow.create(350,350,'arrow1');
    arrow.create(480,350,'arrow1');
    arrow.create(480,350,'arrow1');
    arrow.create(600,350,'arrow1');
    arrow.create(600,350,'arrow1');
    arrow.create(450,160,'arrow3');
    arrow.create(450,160,'arrow3');
    arrow.create(300,160,'arrow3');
    arrow.create(300,160,'arrow3');
 //  arrow2=this.add.image(700,270,'arrow2');
  
    // The player and its settings
    player = this.physics.add.sprite(550, 150, 'dude');

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
  //  scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });



    dew = this.physics.add.group({
        key: 'dew',
        frameQuantity: 4,
        gridAlign: {
            x: 720,
            y: 380,
            width:5,
            height: 1,
            cellWidth: 1,
            loop:true,
        },
        bounceY: 1,
        collideWorldBounds: true
    });

    ;
    dew.setVelocityY(0, 0);

    //  Collide the player and the stars with the platforms
  // this.physics.add.collider(dew, hose);

   // Collide of the arrow2 and dew
  //this.physics.add.collider(dew, arrow2);


    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.physics.add.overlap(player,grass,stopWater,null,this);
  //  this.physics.add.overlap(dew,arrow2,stopDew,null,this);
}

function update ()
{
    
       
}
function stopDew(){
    dew.remove(true);
}

function stopWater()
{
      
    dew.clear(true);
    player.anims.play('turn',true);

   
}
