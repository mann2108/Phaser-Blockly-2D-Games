
var count = 1;
var player;
var bg;
var gameOver = false;
var scoreText;
var config;
var kid;
var switchs;
var a1;
var a2;
var a3;
var a4;
var switchs;

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
        height: 450,
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
    this.load.image('bg', 'assets/bedroom.png');
    this.load.image('switchs','assets/switch.png');
    this.load.image('kid','assets/k2.png');
    this.load.image('a1','assets/1.png');
    this.load.image('a2','assets/2.png');
    this.load.image('a3','assets/3.png');
    this.load.image('a4','assets/4.png');
  

    
    //  this.load.image('old','assets/old.png');
  //this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 55, frameHeight:109});
  
  
  
}

function create ()
{
    //  A simple background for our game
       bg = this.physics.add.image(400, 228, 'bg');

        //switchs

        switchs=  this.physics.add.image(790,320,'switchs');
     
        
    
    //arrow right
    arrow=this.physics.add.group();
    arrow.create(150,390,'a1');
    arrow.create(200,390,'a1');
    arrow.create(250,390,'a1');
    
    arrow.create(300,390,'a1');
    arrow.create(350,390,'a1');

    arrow.create(400,390,'a1');
    arrow.create(450,390,'a1');
    arrow.create(500,390,'a1');
    arrow.create(550,390,'a1');

    arrow.create(600,390,'a1');
    arrow.create(650,390,'a1');
    arrow.create(700,390,'a1');
 


      //kid
      kid = this.physics.add.image(95,390,'kid');
      

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
   this.physics.add.overlap(kid,switchs,gayabchasma,null,this);



}



function update ()
{
    
       
}

function gayabchasma()
{
    setTimeout( function timer(){
        switchs.disableBody(true,true);
        bg.disableBody(true,true);
        kid.disableBody(true,true);
     }, 1*400 );
  
  }
  

   

