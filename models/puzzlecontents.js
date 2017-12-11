// The actual Puzzle itself
'use strict';
// Word Object Struct
var word = 
{
    "EntryOrd" : 0,
    "HintOrd"  : 0,
    "Word"     : '',
    "Hint"     : '',
    "Length"   : 0
}

module.export = class puzzlecontents
{
    constructor(wordobjectarray, puzzlecontentsid)
    {
        // If editing existing puzzle, retain id
        if (puzzlecontentsid) {
            this._id = puzzlecontentsid;
        }
        this.word_object_array = wordobjectarray;
    }
}