var crossword_across = ['ghost', 'react', 'bobby'];
var crossword_down = ["cat", "array", "batman"];
var item = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];

var compare = '';


function wordCompare(string1, string2) {
    // return -1 = failstate, no shared letters
    compare = [-1, -1];
    // for testing
    console.log(string1 + string2 + ' Wabuu');
    for (var i = 0; i < string1.length; i++) {
        if (string2.indexOf(string1.charAt(i)) >= 0) {
            // Found a match
            compare[0] = i;
            compare[1] = string2.indexOf(string1.charAt(i));
            console.log(compare);
            console.log('test: ' + i);
            break;
        }
    }
}

function getItem(string1, string2) {
    //across and down are word cross value + distance
    // value == match; distance == X-distance in graph
    var across;
    var down;
    wordCompare(string1, string2);
    // Sets test to matching letter: first letter in global var compare
    var test = compare[0];
    //down_count and across_count are other distance
    var down_count = 0;
    var across_count = 0;
    // Writing to Puzzle Graph
    //set wordcompare
    if (test > -1) {
        //crossing value
        across = compare[0];
        down = compare[1];
        console.log("down:" + string1 + down + " across:" + string2 + across);
        //down_count += acrosstest(string1);
        //across_count += downtest(string2);

        for (var i = 0; i < string1.length; i++) {
            item[ i+across_count][ down] = string1.charAt(i);

        }
        //across string
        //down_count = downtest(string2, across);

        for (var i = 0; i < string2.length; i++) {
            if (string2.charAt(i) != compare[1]) {
                item[ across][ i+down_count] = string2.charAt(i);
            }
        } //end for
        console.log(item);
    } //end if  
}

function acrosstest(string2) {
    //test the down word, so it doesnt cut across word
    // count_length, count lenght of free space.
    var count_length = 0;
    //return value for down
    var down = 0;
    console.log('acrosstest:'+string2);
    for (var i_row = 0; i_row < item.length; i_row++) {
        for (var downvalue = 0; downvalue < item.length; downvalue++) {
        //go throught item
            if ((item[i_row][downvalue] == ' '||item[i_row][downvalue]== string2.charAt(i_row))) {
                count_length++;
                console.log(count_length);
            } else {
                console.log(item[i_row][downvalue]);
            }
            if (count_length >= string2.length) {
                //down equal downvalue
                down =downvalue;
                down -= string2.length;
                if(down <=0) {
                    down =0;
                }
                console.log('i_row'+i_row +'\n downvalue'+ downvalue+'\n limit ' + down);
                return(down);
            }
        }
    } //end i_row
    console.log('down'+ down);
    return (down);
} //end function



//  function amakeCross(crossword_across,crossword_down) {
//      var count_length =0;
//      for (var i_row = 0; i_row < crossword_across.length; i_row++) {
//          for (var i_col = 0; i_col < crossword_down.length; i_col++) {
//                   getItem(crossword_across[i_row], crossword_down[i_col]);
//          }//end i_col
//      }//end i_row
// }//end function


getItem(crossword_across[1], crossword_down[0]);
getItem(crossword_across[0], crossword_down[2]);
//getItem(crossword_across[2], crossword_down[1]);
