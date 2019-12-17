//var dew;
var count = 1;
var player;
var bottle;
var plastic;
var paper;
var tiles;
var kid;
var dustbin;
//var tap;
//var group;
//var path;
//var arrow;
//var arrow1;
//var arrow2;

//var score = 0;
var gameOver = false;
//var scoreText;
//var config;



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
        height: 550,
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

    this.load.image('bg','assets/backgroung1.jpg.png');
    this.load.image('tiles','assets/path.png');
    this.load.image('kid', 'assets/kid2.png');
    this.load.image('paper','assets/paper2.png');
    this.load.image('bottle','assets/5.png');
    this.load.image('dustbin','assets/red 1.png');
    //this.load.image('arrow','assets/arrow.png');
    //this.load.image('arrow1','assets/up.png');
    //this.load.image('arrow2','assets/down.png');

    //this.load.image('bucket','assets/bucket.png');

  //  this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 55, frameHeight:109});
}

function create ()
{
    //  A simple background for our game
        this.add.image(400, 275, 'bg');

    // path

    this.add.image(600,100,'tiles');
    this.add.image(500,100,'tiles');
    this.add.image(400,100,'tiles');
    this.add.image(300,100,'tiles');
    this.add.image(200,100,'tiles');
    this.add.image(600,200,'tiles');
    this.add.image(500,200,'tiles');
    this.add.image(400,200,'tiles');
    this.add.image(300,200,'tiles');
    this.add.image(200,200,'tiles');
    this.add.image(600,300,'tiles');
    this.add.image(500,300,'tiles');
    this.add.image(400,300,'tiles');
    this.add.image(300,300,'tiles');
    this.add.image(200,300,'tiles');
    this.add.image(600,400,'tiles');
    this.add.image(500,400,'tiles');
    this.add.image(400,400,'tiles');
    this.add.image(300,400,'tiles');
    this.add.image(200,400,'tiles');


    kid = this.physics.add.image(200,100,'kid');
    kid.setCollideWorldBounds(true);

    
    
    //paper

    this.add.image(600,200,'paper');
    this.add.image(200,300,'paper');
    this.add.image(300,400,'paper');
    this.add.image(300,300,'paper');
    this.add.image(600,200,'paper');
    this.add.image(600,100,'paper');
    this.add.image(500,100,'paper');
    this.add.image(400,100,'paper');
    this.add.image(400,300,'paper');
    this.add.image(400,400,'paper');
    this.add.image(500,400,'paper');
    this.add.image(200,400,'paper');
    this.add.image(200,200,'paper');

    //platic bag

  //  this.add.image('720','300','plastic');

    //bottle

    this.add.image('300','100','bottle');
    this.add.image('300','200','bottle');
    this.add.image('400','200','bottle');
    this.add.image('500','300','bottle');
    this.add.image('500','200','bottle');
    this.add.image('600','300','bottle');

    //dustbin

    this.add.image('600','400','dustbin');

    
    
/*
    //arrows towards plastic bag
    arrow= this.physics.add.staticGroup();

    arrow.create(200,300,'arrow');
    arrow.create(300,300,'arrow');
    arrow.create(420,300,'arrow');
    arrow.create(550,300,'arrow');

    //arrows towards paper bag

    arrow.create(200,510,'arrow');
    arrow.create(300,510,'arrow');
    arrow.create(420,510,'arrow');
    arrow.create(550,510,'arrow');

    //arrows towards bottle

    arrow.create(200,100,'arrow');
    arrow.create(300,100,'arrow');
    arrow.create(420,100,'arrow');
    arrow.create(550,100,'arrow');

    //up arrows towards bottle
   
    arrow.create(80,220,'arrow1');
    arrow.create(80,120,'arrow1');

    //down arrows towards paper bag

   arrow.create(80,400,'arrow2');
    arrow.create(80,490,'arrow2');
*/
   
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


     
 /*   this.time.addEvent({
        delay: 500,
        callback: ()=>{
                // spawn a new apple
                dew = this.physics.add.group({
                    key: 'dew',
                    repeat: 0,
                    setXY: { x: 730, y: 450, stepX: 5 }
                });
        },
        loop: true
    });
*/
    //  Collide the player and the stars with the platforms
 //   this.physics.add.collider(dew, tap);


    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  //  this.physics.add.overlap(player,papers,null,this);

}

function update ()
{
    
       
}

function stopWater()
{
 
    dew.clear(true);
    player.anims.play('turn',true);

   
}
