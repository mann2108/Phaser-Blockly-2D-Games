'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([
  {
    "type": "up",
    "message0": "Top %1",
    
    "args0": [
      {
        "type": "field_image",
        "src": "assets/up3.png",
        "width": 50,
        "height": 40,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#C38D9E',
    "tooltip": "",
    "helpUrl": ""
  
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "down",
    "message0": "Down %1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/d.png",
        "width": 50,
        "height": 40,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#C38D9E',
    "tooltip": "",
    "helpUrl": ""
  
  }
]);

Blockly.defineBlocksWithJsonArray([
{
  "type": "east",
  "message0": "Right %1",
  "args0": [
    {
      "type": "field_image",
      "src": "assets/right3.png",
      "width": 50,
      "height": 40,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#C38D9E',
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.defineBlocksWithJsonArray([

{
  "type": "west",
  "message0": "Left %1",
  "args0": [
    {
      "type": "field_image",
      "src": "assets/left3.png",
      "width": 50,
      "height": 40,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#C38D9E',
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "start",
    "message0": "START GAME %1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/play.png",
        "width": 50,
        "height": 50,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "nextStatement": null,
    "colour": '#41B3A3',
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "loop",
    "message0": "Repeat %1 %2 %3 %4",
    "args0": [
     {
       "type":"field_image",
       "src":"assets/reset-512.png",
       "width":50,
       "height":50,
       "alt":"*",
       "flipRtl":false
     },
     
      {
        "type": "input_dummy",
        "align": "CENTRE"
      },
      {
        "type": "field_number",
        "name": "loopValue",
        "value": 0
      },
      {
        "type": "input_statement",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#379683' ,
    "tooltip": "",
    "helpUrl": ""
  }
  
  ]); 

  
Blockly.defineBlocksWithJsonArray([
  {
    "type": "dropdown",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "Path",
        "options": [
          [
            "Left Path",
            "0"
          ],
          [
            "Right Path",
            "1"
          ],
          [
            "Top Path",
            "2"
          ],
          [
            "Down Path",
            "3"
          ]
        ]
      }
    ],
    "inputsInline": false,
    "output": "String",
    "colour": '#C38D9E',
    "tooltip": "",
    "helpUrl": ""
  }
  ]);
  
  

  Blockly.defineBlocksWithJsonArray([
    {
      "type": "if_else",
      "message0": "if %1 do %2",
      "args0": [
        {
          "type": "input_value",
          "name": "if"
        },
        {
          "type": "input_statement",
          "name": "do"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#55BCC9',
      "tooltip": "",
      "helpUrl": ""
    }
]); 
  