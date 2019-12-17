
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
        width: 700,
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
    this.load.image('sky', 'assets/kitchen.jpg');
    this.load.image('old','assets/old2.png');
  //this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 55, frameHeight:109});
  this.load.image('kid','assets/kid.png');
this.load.image('med','assets/medic.png');
this.load.image('right','assets/w-arrow.png');
this.load.image('left','assets/left.png');
this.load.image('down','assets/down.png');
this.load.image('table','assets/table.png');
}

function create ()
{
    //  A simple background for our game
        this.add.image(365, 205, 'sky');
    //arrows
    arrow=this.physics.add.group();
    //right
    arrow.create(200,250,'right');
    arrow.create(280,250,'right');
    arrow.create(360,250,'right');
 
   //down

   arrow.create(400,300,'down');
   arrow.create(400,350,'down');
   //left
   arrow.create(360,370,'left');
   arrow.create(280,370,'left');
   arrow.create(200,370,'left');
   arrow.create(120,370,'left');
   arrow.create(200,370,'left');

   //table
 this.add.image(450,290,'table');
 

    //kid
     kid = this.physics.add.image(150,250,'kid');
  kid.setCollideWorldBounds(true);

    
    //old
    old = this.physics.add.image(50,320,'old');

    //medic.
med=this.physics.add.image(430,260,'med') ;
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
