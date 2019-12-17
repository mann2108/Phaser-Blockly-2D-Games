
var count = 1;
var sky;
var fireextin;
var kid;
var exit;
var door;
var fire2;
var smoke;
var smoke1;
var arrow1;
var arrow2;
var arrow3;
var arrow4;
var line;
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
    this.load.image('sky', 'assets/classroom.jpg');
    this.load.image('line', 'assets/line.png');
    this.load.image('fireextin', 'assets/fireex1.png');
    this.load.image('fire2', 'assets/fire2.png');
    this.load.image('fire3', 'assets/fire3.png');
    this.load.image('smoke1', 'assets/smoke1.png');
    this.load.image('smoke', 'assets/smoke.png');
    this.load.image('exit','assets/exit.png');
    this.load.image('door','assets/door1.jpg');
    this.load.image('kid','assets/kid.png');
    this.load.image('arrow1','assets/1.png');
  //this.load.image('arrow2','assets/k2.png');
    this.load.image('arrow3','assets/3.png');
    this.load.image('arrow4','assets/4.png');
  
}

function create ()
{
    //  A simple background for our game
        this.add.image(350, 210, 'sky');

        //FIRE EXTINGUISHER
        this.add.image(240,180, 'fireextin');


        
 
    // Fire
    fire2=this.physics.add.image(80, 230, 'fire2');
    fire2.angle=-25;
    fire2=this.physics.add.image(80, 200, 'fire2');
    fire2.angle=-25;

    //Fire 2
    fire3=this.physics.add.image(240, 240, 'fire3');
    
    fire3=this.physics.add.image(200, 370, 'fire3');
    
    //Smoke
    
    smoke=this.physics.add.image(170, 120, 'smoke');
    smoke1=this.physics.add.image(240, 200, 'smoke1');
    smoke1=this.physics.add.image(200, 350, 'smoke1');

    //Basin
 //   this.add.image(660, 220, 'basin');

    //Water
   // this.add.image(670, 200, 'water');

    //Bucket

   // bucket=this.physics.add.image(610, 250, 'bucket');

    //Rigth arrow
    this.add.image(430, 260, 'arrow1');
    this.add.image(480, 260, 'arrow1');
    
  /*      
    //Left arrow
    this.add.image(550, 250, 'arrow3');
    this.add.image(480, 250, 'arrow3');
   
   */

   
   //DOOR
   door=this.physics.add.image(530, 235, 'door');
   
   //Exit
   exit=this.physics.add.image(530, 235, 'exit');

   //Line
   line=this.physics.add.image(550, 235, 'line');

   //Up arrow
   this.add.image(420, 310, 'arrow4');

    //Kid
    kid=this.physics.add.image(420, 380, 'kid');
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
  this.physics.add.overlap(kid,line,disappear,null,this);
  //this.physics.add.overlap(kid,exit,disappear,null,this);
    
   // this.physics.add.overlap(exit,door,appear,null,this);


}



function update ()
{
    
       
}

function disappear()
{
        kid.disableBody(true,true);
        exit.disableBody(true,true);
    }
/*
function appear()
{
    door.enableBody(true,530,235,true,true);
}*/
