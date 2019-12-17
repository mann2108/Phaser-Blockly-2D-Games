
var count = 1;
var player;
var remote;
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
        width: 490,
        height: 300,
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
    this.load.image('sky', 'assets/backgroud.jpg');
    this.load.image('remote','assets/remote.png');
    this.load.image('tv','assets/tv.jpg');
    this.load.image('btv','assets/blacktv.png');
  //this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 55, frameHeight:109});
  this.load.image('kid','assets/kid.png');
  this.load.image('arrow','assets/3.png');
  
}

function create ()
{
    //  A simple background for our game
        this.add.image(245,149, 'sky');
         //arrow
    arrow=this.physics.add.group();

    arrow.create(200,165,'arrow');
    arrow.create(250,165,'arrow');
    arrow.create(300,165,'arrow');
    arrow.create(350,165,'arrow');
    arrow.create(400,165,'arrow');
  
    //btv to turn tv black
   btvs = this.physics.add.group();
  
 
    //tv 
    this.add.image(256,120,'tv');

    
    //remote
    remote = this.physics.add.image(160,110,'remote');
   
    remote.setCollideWorldBounds(true);

    //kid
    kid = this.physics.add.image(540,155,'kid');
    kid.setCollideWorldBounds(true);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
   this.physics.add.overlap(remote,kid,disappearRemote,null,this);

}

function update ()
{
    
       
}

function disappearRemote()
{
    remote.disableBody(true,true);
    remote.enableBody(true,189,158,true,true);
    count++;
    setTimeout( function timer(){

         var btv = btvs.create(254,120,'btv');
  }, count*150 )
  
}
