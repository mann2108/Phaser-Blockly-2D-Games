'use strict';
goog.require('Blockly.JavaScript');
var p = 1;
var count = 0;
var flag=true;

var commands="";

function End(){
  
if(commands!="ueeeeee"){
  setTimeout( function timer(){
    $("#exampleModal1").modal('show');
    Reset();
  
 }, 5*759 );
}
else{
 
  setTimeout( function timer(){
      $("#exampleModal").modal();
    
   }, 7*759 );

}
}

function Reset(){
 
  kid.anims.play('turn',true);
  if (Blockly.mainWorkspace !== null) {
  Blockly.mainWorkspace.clear();
   }
   count=0;
}

function right(){
  if(p==1){
     
    //For spritesheet

     kid.x +=80;
 
     p=0;
     count++;
     }else{
      
     
       count++;
       setTimeout( function timer(){
     
               kid.x +=80;
        
     }, count*500 )
     }
    }
    
//up
  function upward(){
    
  if(p==1){
     kid.y -=80;
     
     p=0;
     count++;
     }else{
       //speech bubble
   
       count++;
       setTimeout( function timer(){
       //  kid.anims.play('right', true);
     
               kid.y -=80;
        
     }, count*500 )
     }
 
  }
    
    
Blockly.JavaScript['up'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(flag)
  {
    $("#exampleModal3").modal('show');
    
    return;

  }

  upward();
    commands+="u";
  var code = '2';
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

  right();
    commands+="e";
  var code = '1';
  return code
};

Blockly.JavaScript['west'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  if(flag)
  {
    $("#exampleModal3").modal('show');
    
    return;

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



Blockly.JavaScript['dropdown'] = function(block) {
  var dropdown_path = block.getFieldValue('Path');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_path;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['if_else'] = function(block) {
  var d1 = Blockly.JavaScript.valueToCode(block, 'if', Blockly.JavaScript.ORDER_ATOMIC);
  var d2 = Blockly.JavaScript.statementToCode(block, 'do');

  // TODO: Assemble JavaScript into code variable
if(d1=='(2)' && d2==2 )
{
  upward();
}
else if(d1=='(1)' && d2==1)
{
  right();
}
else{
  $("#exampleModal1").modal('show');
  Reset();

}
var code = ';\n';
  return code;
};


