
var count = 1;
var kid;
var old;
var med;
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
        width: 630,
        height: 410,
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
    this.load.image('sky', 'assets/B2.jpg');
    this.load.image('old','assets/old2.png');
  this.load.image('kid','assets/kid.png');


  this.load.image('fan','assets/fan.png');
  this.load.image('top','assets/4.png');
  this.load.image('right','assets/1.png');
  this.load.image('down','assets/2.png');
this.load.image('ac','assets/ac.png');
}

function create ()
{
    //  A simple background for our game
        this.add.image(315, 205, 'sky');
    //arrows
    arrow=this.physics.add.group();
    //right
    arrow.create(90,250,'right');
    arrow.create(170,250,'right');
    arrow.create(270,250,'right');   
 

    arrow.create(330,390,'right');   
    arrow.create(400,390,'right');  
    
    arrow.create(350,40,'right');   
   
   //down

   arrow.create(300,300,'down');
 
   arrow.create(300,380,'down');
 //top
 arrow.create(300,200,'top');
 arrow.create(300,40,'top');
 arrow.create(300,120,'top');
 
   //ac
 this.add.image(530,100,'ac');
 
 //fan
 this.add.image(530,350,'fan');

    //kid
     kid = this.physics.add.image(10,250,'kid');
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
 //this.physics.add.collider(kid, old);


    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    //this.physics.add.overlap(kid,old,exchangeSeats,null,this);
     this.physics.add.overlap(kid,med,disappearMed,null,this);
   this.physics.add.overlap(kid,old,appearMed,null,this);

}

function update ()
{
    
       
}

function disappearMed()
{
    med.disableBody(true,true);
}

function appearMed()
{
   
    med.enableBody(true,80, 370, true, true);
}
