// gameState function sets up the game
var gameState = function() {

  var mineCount = 10; // default number of mines for 8x8 map will be 10
  var mines = []; // ex: [3, 5, 7, 34, 33, 21, 8, ]

  // generate 10 unique random numbers - these numbers will coincide with
  // pos value of squares, making them into mines

  while(mines.length < 10){
    var randomnumber=Math.ceil(Math.random()*63);
    var found=false;
    for(var i = 0; i < mines.length; i++) {
	     if(mines[i]==randomnumber) { found=true;break }
     }
     if(!found) { mines[mines.length]=randomnumber };
   };

   console.log("mines: " + mines);

   // take the random numbers and use them to select map[random_number]
   // give the selected squares the value of "mine"

   for(var i = 0; i < 10; i++) {
     var mine = mines[i];
     map[mine]["value"] = "mine";
   };

   // evaluate remaining squares and give a numeric value based on the number of
   // mines contained in adjacent squares

   // find out how many mines are in adjacent squares
   // this is the HARD part!!

   var numberOfAdjacentMines = function(){
     for(var i = 0; i < map.length; i++) { // for every square in map
       var sqX = map[i]['x'];
       var sqY = map[i]['y'];
       map[i]['pos'] = [sqX, sqY];
       var pos = map[i]['pos'];
       var adj = [];

       if(sqX == 0 && sqY == 0) { // what to do if at 0,0

       };




       //console.log(pos);

       //console.log(sqX + ',' + sqY); // logging x, y coordinates for each square

     };

   };

   numberOfAdjacentMines();

};

gameState();

// for(var i = 0; i < map.length; i++) {
//   console.log(map[i]);
// };
