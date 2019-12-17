'use strict';
goog.require('Blockly.JavaScript');
var p = 1;
var count = 0;
var flag=true;

var commands="";

function End(){
if(commands!="eeeeeeeeeeees"){
  $("#exampleModal1").modal('show');
Reset();
}
else{
  /*$("#exampleModal").modal();*/
  setTimeout( function timer(){
      $("#exampleModal").modal();
    
   }, 11*759 );

}


}

function Reset(){
  player.x=95;
  player.y=420;
 
  player.anims.play('turn',true);
  if (Blockly.mainWorkspace !== null) {
  Blockly.mainWorkspace.clear();
   }
   count=0;
}


Blockly.JavaScript['switch-off'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }
     commands+="s";
   var code = '...;\n';
   return code
 };

//up
Blockly.JavaScript['up'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }
    commands+="u";
  var code = '...;\n';
  return code
};

//DOWN
  

Blockly.JavaScript['down'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }
     commands+="d";
   var code = '...;\n';
   return code
 };
  
//EAST

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
   // old.x +=150;
    kid.x +=50;
    
    //speech bubble
   
    
    p=0;
    count++;
    }else{
      //speech bubble
  
      count++;
      setTimeout( function timer(){
      //  player.anims.play('right', true);
     //   old.x +=150;
              kid.x +=60;
       
    }, count*500 )
    }

    
    
    commands+="e";
  var code = '...;\n';
  return code
};

Blockly.JavaScript['west'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }
     commands+="w";
   var code = '...;\n';
   return code
 };

//START

Blockly.JavaScript['start'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  flag=false;
  var code = '...;\n';
  return code;
};



//LOOP

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


