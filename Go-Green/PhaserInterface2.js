
var count = 1;
var player;
var gameOver = false;
var scoreText;
var config;
var d1;
var b1;
var bottle;
var paper;
var arrow1;
var arrow2;
var arrow3;
var arrow4;


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
    this.load.image('b1', 'assets/b1.jpg');
    this.load.image('kid','assets/kid.png');
    this.load.image('d1','assets/red.png');
    this.load.image('bottle','assets/1.png');
    this.load.image('paper','assets/paper2.png');
    this.load.image('arrow1','assets/w-arrow.png');
    this.load.image('arrow2','assets/w-arrowd.png');
    this.load.image('arrow3','assets/w-arrowl.png');
    this.load.image('arrow4','assets/w-arrowu.png');

    
    //  this.load.image('old','assets/old.png');
  //this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 55, frameHeight:109});
  
  
  
}

function create ()
{
    //  A simple background for our game
      this.add.image(384, 249, 'b1');

      //arrow right

      //arrows after kid
    arrow=this.physics.add.group();
    arrow.create(100,430,'arrow1');
    arrow.create(150,430,'arrow1');
    arrow.create(200,430,'arrow1');
    arrow.create(250,430,'arrow1');
    arrow.create(300,430,'arrow1');
    arrow.create(350,430,'arrow1');
//arrow before paper`
    arrow.create(405,480,'arrow1');
    arrow.create(450,480,'arrow1');
    
    //arrow before plastic bottle
    arrow.create(405,395,'arrow1');
    arrow.create(450,395,'arrow1');
    //arrow after paper
    arrow.create(560,480,'arrow1');
    arrow.create(610,480,'arrow1');
//arrow after bottle
    arrow.create(560,395,'arrow1');
    arrow.create(610,395,'arrow1');


    /*  arrow.create(310,350,'arrow1');
    arrow.create(380,350,'arrow1');

    arrow.create(450,480,'arrow1');
    arrow.create(500,480,'arrow1');
    arrow.create(550,480,'arrow1');*/
    
    //arrow down

   arrow=this.physics.add.group();
    
    arrow.create(360,460,'arrow2');
    //arrow.create(370,450,'arrow2');

    //arrow up

     arrow=this.physics.add.group();
     arrow.create(360,400,'arrow4');
    
       //dustbin
       
      d1=  this.physics.add.image(690,440,'d1');

      //kid
      kid = this.physics.add.image(50,380,'kid');
      kid.setCollideWorldBounds(true);

      //plastic bottle

     bottle= this.physics.add.image(500,400,'bottle');



     //arrow on bottle

     arrow.create(500,370,'arrow1');
      //paper

      this.physics.add.image(490,470,'paper');
//arrow on paper
arrow.create(505,490,'arrow1');
     

  
 
 
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
    this.physics.add.overlap(kid,bottle,disappear,null,this);
    
    this.physics.add.overlap(kid,d1,appear,null,this);


}



function update ()
{
    
       
}

function disappear()
{
        bottle.disableBody(true,true);
}

function appear()
{
    bottle.enableBody(true,690,400,true,true);
}
