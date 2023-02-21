/*
    Tournament Brackets
    Author: Mario Toledo

    Usage: import this JavaScript file and CSS file to HTML file, and create the brackets by using new TournamentBrackets, and passing the options.
    
    options:
    - containerElement: the element selector which the brackets are going to be rendered;
    - hasDoubleElimination: if the tournament has the double elimination;
    - showResult: if the brackets should show the result of the match or not;
    - data: the data used to render the brackets. It has the following structure:
        - winners: array of arrays, each element represents a round from the winners bracket;
            - each array inside a round represents a group of players that player that round;
                - each element inside a group of players is an object with the name of the player, the result and if the player has won or not;
        - losers: array of arrays, each element represents a round from the losers bracket. Has the same structure as the winners;
*/

function TournamentBrackets(options) {
    let defaulltOptions = {
        containerElement: '.brackets',
        hasDoubleElimination: false,
        showResult: false,
        data: [{
            winners: [],
            losers: []
        }]
    }

    options = {...defaulltOptions, ...options};

    let _this = this;

    this.init = function() {

    }
}