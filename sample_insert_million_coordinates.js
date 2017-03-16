//use test;
var coll = db.coords;

//usage - insert_many_coords(40.20,-60.05, <number of coordinates to insert into coords collection>)
var insert_many_coords = function (x = 40, y = - 70, num = 2) {
  //check for illegal numbers, and only proceed if they are legal
  if (!(isNaN(x) || isNaN(y) || isNaN(num))) {
    arr = new Array // make a new array to hold an sub array of coordinates.
    for (i = 0; i <= num; i++) {
      arr[i] = [
        (x = x + (1 / num / 2)), // slowing alter the x and y value based on  ratio of the num
        (y = y + ( - 1 / num / 2)) 
      ];
      coll.insert({_id:i, coords: arr[i]}) //insert the created array into the collction
      arr = []; // clear the array
    }
    return arr;
  }
}