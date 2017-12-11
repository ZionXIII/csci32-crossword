// Puzzle Metadata (i.e. not the puzzle itself, but everything above that)
'use strict'
const ObjectID = require('mongodb').ObjectID;

module.exports = class puzzle
{
    constructor(puzzletitle, puzzlecreator, creationdate, puzzlecontentsid, wordtotal, puzzleid)
    {
        // If editting an existing puzzle, retain id
        if(puzzleid)
        {
            this._id = puzzleid;
        }
        this.puzzle_title       = puzzletitle;
        this.puzzle_creator     = puzzlecreator;
        this.creation_date      = creationdate;
        this.puzzle_contents_id = puzzlecontentsid;
        this.word_total          = wordtotal;
    }
}