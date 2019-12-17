'use strict';
goog.require('Blockly.JavaScript');

Blockly.JavaScript['alphabets'] = function(block) {
    var value_alpha1 = Blockly.JavaScript.valueToCode(block, 'alpha1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_alpha2 = Blockly.JavaScript.valueToCode(block, 'alpha2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_alpha3 = Blockly.JavaScript.valueToCode(block, 'alpha3', Blockly.JavaScript.ORDER_ATOMIC);
    var value_alpha4 = Blockly.JavaScript.valueToCode(block, 'alpha4', Blockly.JavaScript.ORDER_ATOMIC);
    var value_alpha5 = Blockly.JavaScript.valueToCode(block, 'alpha5', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.

    var flag2=0;
    var x = parseInt(value_alpha1, 10);
    if(flag==1 && value_alpha1=='A' && value_alpha2=='B' && value_alpha3=='C' && value_alpha4=='D' && value_alpha5=='E'){
    flag2=1;
    alert("Yayy, Path-1 crossed!")
    }
    else{
        flag2=0;
        alert("Wrong Solution :(")
        }
    var code = '...;\n';
    return code;
  };