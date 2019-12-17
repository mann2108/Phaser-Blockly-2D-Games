
var count = 1;
var sky;
var man;
var bucket;
var valve;
var line;
var fireextinguisher;
var fire;
var blanket;
var arrow1;
var arrow2;
var arrow3;
var arrow4;

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
        height: 420,
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
    this.load.image('sky', 'assets/white.png');
    this.load.image('fireextinguisher', 'assets/fireex6.png');
    this.load.image('fire', 'assets/fire4.gif.png');
    this.load.image('valve', 'assets/valve.png');
    this.load.image('line', 'assets/line.png');
    this.load.image('kid','assets/kid.png');
    this.load.image('aim1','assets/aim1.jpg.png');
    this.load.image('pull1','assets/pull1.png');
    this.load.image('arrow1','assets/1.png');
    this.load.image('arrow2','assets/2.png');
    this.load.image('arrow3','assets/3.png');
    this.load.image('arrow4','assets/4.png');
  
}

function create ()
{
    //  A simple background for our game
    this.add.image(350, 210, 'sky');

//AIM
    this.add.image(380, 340, 'aim1');

    //PULL
    this.add.image(370, 115, 'pull1');


    //FIRE EXTINGUISHER
   fireextinguisher=this.physics.add.image(370,230,'fireextinguisher');

    //FIRE
    this.add.image(180,290,'fire');

    //RIGHT ARROW
    this.add.image(120,50,'arrow1');
    this.add.image(180,50,'arrow1');
    this.add.image(250,50,'arrow1');
    this.add.image(310,50,'arrow1');
    this.add.image(370,50,'arrow1');


     //RIGHT ARROW AFTER VALVE
     this.physics.add.image(460,120, 'arrow1');
     this.physics.add.image(520,120, 'arrow1');


    //DOWN ARROW
   
    this.add.image(368,90,'arrow2');

    //DOWN ARROW AFTER VALVE

    this.add.image(550,160,'arrow2');
    this.add.image(550,240,'arrow2');
    this.add.image(550,320,'arrow2');
    this.add.image(550,400,'arrow2');
   
    //LEFT ARROW

    this.add.image(490,400,'arrow3');
    this.add.image(420,400,'arrow3');

    //UP ARROW
    this.add.image(385,365,'arrow4');

    //VALVE
   valve=this.physics.add.image(370,140,'valve');


   //LINE
   line=this.physics.add.image(400,320,'line');


    //Kid
    kid=this.physics.add.image(50, 50, 'kid');
    kid.setCollideWorldBounds();


   
    this.physics.add.overlap(kid,valve,disappear,null,this);
    
    this.physics.add.overlap(kid,line,disappear1,null,this);


}

function update ()
{
    
       
}

function disappear()
{
        
        setTimeout( function timer(){
        
              
            valve.x=370;
            valve.y=100;
    
             
        }, 1*500 )
      
        
}

function disappear1()
{

    fireextinguisher.angle=-35;
    fireextinguisher.x=350;
    fireextinguisher.y=200;

}

