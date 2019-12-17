
var count = 1;
var sky;
var man;
var spray;
var bucket;
var valve;
var line;
var smoke;
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
    this.load.image('line', 'assets/line.png');
    this.load.image('spray', 'assets/spray2.png');
    this.load.image('smoke', 'assets/smoke.png');
    this.load.image('squeeze','assets/p1.png');
    this.load.image('sweep1','assets/sweep2.png');
    this.load.image('kid','assets/kid.png');
    this.load.image('arrow1','assets/1.png');
    this.load.image('arrow2','assets/2.png');
    this.load.image('arrow3','assets/3.png');
    this.load.image('arrow4','assets/4.png');
  
}

function create ()
{
    //  A simple background for our game
    this.add.image(350, 210, 'sky');

    //SWEEP
sweep1=this.physics.add.image(330,260,'sweep1');

    //FIRE EXTINGUISHER
   fireextinguisher=this.physics.add.image(350,150,'fireextinguisher');
   fireextinguisher.angle=-35;

    //FIRE
  fire=this.physics.add.image(180,290,'fire');

    //SPRAY
    spray=this.physics.add.group();

    //SMOKE
    smoke=this.physics.add.group()

    //SQUEEZE

    squeeze=this.physics.add.image(340,30,'squeeze');
    squeeze.angle=-35;


    
    //RIGHT ARROW
    this.add.image(120,25,'arrow1');
    this.add.image(180,25,'arrow1');
    this.add.image(250,25,'arrow1');
    this.add.image(310,25,'arrow1');
    this.add.image(390,25,'arrow1');
    this.add.image(450,25,'arrow1');
    this.add.image(510,25,'arrow1');
     //RIGHT ARROW AFTER VALVE
    
     

    //DOWN ARROW

    this.add.image(550,100,'arrow2');
    this.add.image(550,200,'arrow2');
    this.add.image(550,280,'arrow2');
    this.add.image(550,350,'arrow2');   
   
    

    
    //LEFT ARROW
    this.add.image(480,350,'arrow3');   
    this.add.image(400,350,'arrow3');   
    this.add.image(330,350,'arrow3');   
   
    
    //UP ARROW
    
    this.add.image(330,290,'arrow4');   
   
    


   //LINE
   line=this.physics.add.image(330,235,'line');


    //Kid
    kid=this.physics.add.image(50, 50, 'kid');
    kid.setCollideWorldBounds();


   
         this.physics.add.overlap(kid,squeeze,appear,null,this);

    this.physics.add.overlap(kid,line,appear1,null,this);

    
      this.physics.add.overlap(kid,line,disappear1,null,this);


}

function update ()
{
    
       
}


function disappear1()
{

    fire.disableBody(true,true);
    
}
function appear()
{

        setTimeout( function timer(){
        
        
        var sprayy=spray.create(250,290,'spray');
     },1*100 );
  
}

function appear1()
{

        setTimeout( function timer(){
        
        
        var smokee=smoke.create(180,290,'smoke');
     },1*100 );
  
}
