'use strict';
goog.require('Blockly.JavaScript');
var p = 1;
var count = 0;
var flag=true;

var commands="";

function End(){
if(commands!="eeeeseeeddddwwwusw"){
  setTimeout( function timer(){
    $("#exampleModal1").modal('show');
    Reset();
    
  
 },5*500 );

}
else{
 
  setTimeout( function timer(){
      $("#exampleModal").modal();
    
   },18*759 );

}


}

function Reset(){
  kid.x=50;
  kid.y=50;
 
  player.anims.play('turn',true);
  if (Blockly.mainWorkspace !== null) {
  Blockly.mainWorkspace.clear();
   }
   count=0;
}

Blockly.JavaScript['up'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }
  if(p==1){
    //For spritesheet
  //   player.anims.play('right', true);
   
     kid.y -=70;
     
     //speech bubble
    
     
     p=0;
     count++;
     }else{
       //speech bubble
   
       count++;
       setTimeout( function timer(){
       //  player.anims.play('right', true);
        
               kid.y -=70;
        
     }, count*800 )
     }
 
    commands+="u";
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['down'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }
  
  if(p==1){
    //For spritesheet
  //   player.anims.play('right', true);
   
     kid.y +=70;
     
     //speech bubble
    
     
     p=0;
     count++;
     }else{
       //speech bubble
   
       count++;
       setTimeout( function timer(){
       //  player.anims.play('right', true);
        
               kid.y +=70;
        
     }, count*800 )
     }
 
    commands+="d";
  return code;
};

Blockly.JavaScript['east'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }

  if(p==1){
   //For spritesheet
 //   player.anims.play('right', true);
    kid.x +=70;
    //speech bubble
   
    
    p=0;
    count++;
    }else{
      //speech bubble
  
      count++;
      setTimeout( function timer(){
      //  player.anims.play('right', true);
      kid.x+=70;
       
    }, count*800 )
    }

    
    
    commands+="e";
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['west'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }
  
  if(p==1){
    //For spritesheet
  //   player.anims.play('right', true);
     
     kid.x -=70;
     
     //speech bubble
    
     
     p=0;
     count++;
     }else{
       //speech bubble
   
       count++;
       setTimeout( function timer(){
       //  player.anims.play('right', true);
         
               kid.x -=70;
        
     }, count*800 )
     }
 
    commands+="w";
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['start'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  flag=false;
  var code = '...;\n';
  return code;
};


Blockly.JavaScript['loop'] = function(block) {  
 
  if(flag)
  {
      $("#exampleModal3").modal('show');
    return;

  }
  var number_loopvalue = block.getFieldValue('loopValue');  
  for( var i=0;i<number_loopvalue;i++)
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  
  var code = '...;\n';
  return code;
};

//PULL BLOCK
Blockly.JavaScript['p'] = function(block) {
  commands+='p';
  // TODO: Assemble JavaScript into code variable.
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }
 
  var code = '...;\n';
  return code;
};


//AIM BLOCK
Blockly.JavaScript['a'] = function(block) {
  commands+='a';
  // TODO: Assemble JavaScript into code variable.
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }
 
  var code = '...;\n';
  return code;
};


//SQUEEZE BLOCK

Blockly.JavaScript['s'] = function(block) {
  commands+='s';
  // TODO: Assemble JavaScript into code variable.
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }
 
  var code = '...;\n';
  return code;
};


//SWEEP BLOCK

Blockly.JavaScript['sw'] = function(block) {
  commands+='sw';
  // TODO: Assemble JavaScript into code variable.
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }
 
  var code = '...;\n';
  return code;
};
