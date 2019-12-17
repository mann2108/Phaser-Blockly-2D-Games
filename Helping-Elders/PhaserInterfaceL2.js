
var count = 1;
var player;
var old;
var gameOver = false;
var scoreText;
var config;
var kid;
var specs;
var a1;
var a2;
var a3;
var a4;
var specs;

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
    this.load.image('bg', 'assets/living room.jpg');
    this.load.image('specs','assets/s1.png');
    this.load.image('kid','assets/k2.png');
    this.load.image('a1','assets/1.png');
    this.load.image('a2','assets/2.png');
    this.load.image('a3','assets/3.png');
    this.load.image('a4','assets/4.png');
    this.load.image('old','assets/old1.png');

    
    //  this.load.image('old','assets/old.png');
  //this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 55, frameHeight:109});
  
  
  
}

function create ()
{
    //  A simple background for our game
        this.add.image(384, 249, 'bg');
//old
    old = this.physics.add.image(600,370,'old');
   
   // old.setCollideWorldBounds(true);

   
        //specs

        specs=  this.physics.add.image(350,350,'specs');

    
    //arrow right
    arrow=this.physics.add.group();
    arrow.create(150,450,'a1');
    arrow.create(200,450,'a1');
    arrow.create(250,450,'a1');
    
    arrow.create(310,350,'a1');
    arrow.create(380,350,'a1');

    arrow.create(450,480,'a1');
    arrow.create(500,480,'a1');
    arrow.create(550,480,'a1');
    
    //arrow up

    arrow=this.physics.add.group();
    
    arrow.create(280,420,'a4');
    arrow.create(280,370,'a4');

    //arrow down

    arrow=this.physics.add.group();
    
    arrow.create(400,390,'a2');
    
    arrow.create(400,460,'a2');
    


      //kid
      kid = this.physics.add.image(95,420,'kid');
      kid.setCollideWorldBounds(true);
  
 /*   // The player and its settings
    

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
   this.physics.add.overlap(kid,specs,gayabchasma,null,this);
    this.physics.add.overlap(kid,old,chashmawapas,null,this);


}



function update ()
{
    
       
}

function gayabchasma()
{
 
specs.disableBody(true,true);

   
}

function chashmawapas()
{

    specs.enableBody(true,670,370,true,true);
}
