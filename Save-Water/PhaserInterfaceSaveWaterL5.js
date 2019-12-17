var border;
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
    this.load.image('sky', 'assets/holi1.png');
    this.load.image('basket','assets/basket.png');
    this.load.image('basket1','assets/basket2.png');
    this.load.image('box','assets/box.png');
    this.load.image('dew','assets/dew.png');
    this.load.image('balloon','assets/waterballon.png');
    this.load.image('arrow','assets/w-arrow.png');
    this.load.image('down','assets/w-arrowd.png');
    this.load.image('left','assets/w-arrowl.png');
    this.load.image('up','assets/w-arrowu.png');
    this.load.image('gun','assets/watergun.png');
    this.load.image('colors','assets/holicolors.png');
    this.load.image('border','assets/border.png');
    this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 55, frameHeight:109});
}

function create ()
{
    //  A simple background for our game
        this.add.image(400, 280, 'sky');
    
    //balloon
    //basket
    basket=this.physics.add.staticGroup();
    basket.create(90,290,'basket');
    balloon=  this.physics.add.image(90,280,'balloon');
   
     //gun
     basket.create(720,460,'basket1')
     gun=  this.physics.add.image(700,450,'gun');
    

 /*   //dew
          dew = this.physics.add.group({
        key: 'dew',
        frameQuantity: 4,
        gridAlign: {
            x: 650,
            y: 560,
            width:5,
            height: 1,
            cellWidth: 1
        },
        bounceY: 1,
        collideWorldBounds: true
    });

    */
   //dew.setVelocityY(10, 10);

   // this.add.image('760','470','splash');
  //  this.add.image('730','470','bucket');

    //arrows
    arrow= this.physics.add.staticGroup();
    arrow.create(250,500,'arrow');
    arrow.create(350,500,'arrow');
    arrow.create(500,500,'arrow');
    
    arrow.create(600,500,'arrow');
    arrow.create(300,80,'arrow');
    arrow.create(400,80,'arrow');
    arrow.create(500,80,'arrow');
    arrow.create(600,80,'arrow');  
    //up
    arrow.create(420,400,'up');
    arrow.create(420,300,'up');
    arrow.create(250,190,'up');
   
    //left
    arrow.create(190,290,'left');
    arrow.create(320,290,'left');

    //down
    arrow.create(670,130,'down')

   
     //colors
    basket.create(700,250,'box');

    border= this.physics.add.staticGroup();
    border.create(720,190,'border');
     colors=  this.physics.add.image(700,190,'colors');
    
    // The player and its settings
    player = this.physics.add.sprite(190, 520, 'dude');

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
  //  scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });

    //  Collide the player and the stars with the platforms
 this.physics.add.collider(player, border);


    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.physics.add.overlap(player,border,stopWater,null,this);

}

function update ()
{
    
       
}

function stopWater()
{
      
    
  //  arrow.disableBody(true, true);
    gun.disableBody(true, true);
    balloon.disableBody(true, true);
    player.anims.play('turn',true);

}
