# tinyjson
## Tiny JavaScript Object Notation
A format based on json to reduce the size of json object by getting rid of repeated keynames into a schema object

### Install via npm
`npm install tinyjson --save`

### Import
`var tinyjson = require('tinyjson');`

`var encodedJSON = tinyjson.encode(jsonObject);`

`var decodedJSON = tinyjson.decode(tinyjsonObject);`

A json file with 5000 array of data size comparision

```
Orignal file size : 2.8MB 

Encoded file size : 1.9MB `

Size gain percentage : 32.9%
```
The gain percentage can reach upto 75% depending on your repeated key data.


### Sample
```
{
  "schema": [
    "_id",
    "index",
    "guid",
    "isActive",
    "balance",
    "picture",
    "age",
    "eyeColor",
    "name",
    "gender",
    "company",
    "email",
    "phone",
    "address",
    "registered",
    "latitude",
    "longitude",
    "greeting",
    "favoriteFruit"
  ],
  "data": [
    [
      "59a9c5e9c5104e592ba5eec1",
      0,
      "8549d313-5e0d-4ae7-895e-45c61b8086bd",
      false,
      "$3,694.78",
      "http://placehold.it/32x32",
      36,
      "green",
      "Christi Huff",
      "female",
      "MANTRO",
      "christihuff@mantro.com",
      "+1 (987) 413-2036",
      "650 McKibben Street, Marenisco, California, 4228",
      "2017-08-04T02:37:42 -06:-30",
      -67.501859,
      -156.9881,
      "Hello, Christi Huff! You have 4 unread messages.",
      "apple"
    ],
    ... 4999 more
  ]
},

```
### Orignal json format
```
[
  {
    "_id": "59a998587ce6b3baa3bb4659",
    "index": 0,
    "guid": "b8c91fcb-a950-4173-8e4d-761fba77ab77",
    "isActive": false,
    "balance": "$1,673.28",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "blue",
    "name": "Delgado Callahan",
    "gender": "male",
    "company": "SYBIXTEX",
    "email": "delgadocallahan@sybixtex.com",
    "phone": "+1 (870) 487-2839",
    "address": "571 Columbia Place, Camas, Utah, 5713",
    "about": "Elit laborum ex ullamco tempor consequat est elit. Aliqua sint enim eiusmod irure enim esse esse ipsum excepteur aute id ut. Cillum amet occaecat anim cupidatat est velit.\r\n",
    "registered": "2017-08-03T12:18:31 -06:-30",
    "latitude": -77.004553,
    "longitude": 93.476534,
    "greeting": "Hello, Delgado Callahan! You have 4 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "59a998582952ea956ac7574c",
    "index": 1,
    "guid": "d98970d7-08c1-467a-bfb8-97f1949e6dab",
    "isActive": true,
    "balance": "$3,030.96",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "blue",
    "name": "Henderson Davidson",
    "gender": "male",
    "company": "HANDSHAKE",
    "email": "hendersondavidson@handshake.com",
    "phone": "+1 (974) 508-2717",
    "address": "185 Front Street, Newkirk, Arizona, 1667",
    "about": "Aliqua ut occaecat voluptate velit adipisicing commodo ex velit nisi quis deserunt. Ex aliquip pariatur esse laboris excepteur. Ipsum nulla anim nisi non laborum tempor. Ipsum consequat esse officia incididunt enim est adipisicing velit irure pariatur nisi consequat in.\r\n",
    "registered": "2015-04-25T08:02:35 -06:-30",
    "latitude": 56.916396,
    "longitude": -140.692789,
    "greeting": "Hello, Henderson Davidson! You have 1 unread messages.",
    "favoriteFruit": "banana"
  },
  ... 4998 more
]