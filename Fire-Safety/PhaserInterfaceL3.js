22
var count = 1;
var sky;
var fire;
var smoke;
var basin;
var water;
var bucket;
var kid;
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
    this.load.image('sky', 'assets/kitchen.jpg');
    this.load.image('fire', 'assets/fire.png');
    
    this.load.image('smoke', 'assets/smoke.png');
    this.load.image('basin', 'assets/basin.png');
    this.load.image('water', 'assets/water.png');
    this.load.image('bucket', 'assets/bucket1.png');
    this.load.image('kid','assets/kid.png');
    this.load.image('arrow1','assets/1.png');
  //  this.load.image('arrow2','assets/k2.png');
    this.load.image('arrow3','assets/3.png');
    this.load.image('arrow4','assets/4.png');
  
}

function create ()
{
    //  A simple background for our game
        this.add.image(350, 210, 'sky');
        
 
    // Fire
    fire=this.physics.add.image(80,115, 'fire');

    //Smoke
    
    smoke=this.physics.add.image(200, 90, 'smoke');

    //Basin
    this.add.image(660, 220, 'basin');

    //Water
    this.add.image(670, 200, 'water');

    //Bucket

    bucket=this.physics.add.image(610, 250, 'bucket');

    //Rigth arrow
    this.add.image(130, 370, 'arrow1');
    this.add.image(200, 370, 'arrow1');
    this.add.image(270, 370, 'arrow1');
    this.add.image(340, 370, 'arrow1');
    this.add.image(410, 370, 'arrow1');
    this.add.image(480, 370, 'arrow1');
    this.add.image(550, 370, 'arrow1');
    this.add.image(620, 370, 'arrow1');
    
    //Up arrow
    this.add.image(620, 310, 'arrow4');
    
    //Left arrow
    this.add.image(550, 250, 'arrow3');
    this.add.image(480, 250, 'arrow3');
   
   
    //Kid
    kid=this.physics.add.image(60, 350, 'kid');
    kid.setCollideWorldBounds();
   
   
    //girl
    //girl = this.physics.add.image(50,400,'girl');
   
    //boy
  //  boy= this.physics.add.image(650,400,'boy');
  //  girl.setCollideWorldBounds(true);
    
  //  boy.setCollideWorldBounds(true);
    
    //center image
  ///  kid = this.physics.add.image(340,395,'kid');
   // kid.setCollideWorldBounds(true);

   //heading
  // this.add.image(350,50,'poster');
  this.physics.add.overlap(kid,bucket,disappear,null,this);
    
  this.physics.add.overlap(kid,smoke,appear,null,this);

 
}

function update ()
{
    
       
}


function disappear()
{
        bucket.disableBody(true,true);
}

function appear()
{
    bucket.enableBody(true,400,200,true,true);
    bucket.angle=-45;
    setTimeout( function timer(){
        //  player.anims.play('right', true);
         
              fire.disableBody(true,true);
         
      }, 1*500 )
      
}
