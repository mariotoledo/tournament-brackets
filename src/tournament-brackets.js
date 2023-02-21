/*
    Tournament Brackets
    Author: Mario Toledo

    Usage: import this JavaScript file and CSS file to HTML file, and create the brackets by using new TournamentBrackets, and passing the options.
    
    options:
    - containerElement: the element selector which the brackets are going to be rendered;
    - hasDoubleElimination: if the tournament has the double elimination;
    - showResult: if the brackets should show the result of the match or not;
    - showControls: if the controls for adding, removing or editing brackets should be visible;
    - data: the data used to render the brackets. It has the following structure:
        - winners: array of arrays, each element represents a round from the winners bracket;
            - each array inside a round represents a group of players that played that round;
                - each element inside a group of players is an object with the name of the player, the result and if the player has won or not;
        - losers: array of arrays, each element represents a round from the losers bracket. Has the same structure as the winners;


        eg: [{
            winners: [
                [
                    [
                        {name: 'team 1', result: 3, hasWon: true}, 
                        {name: 'team 2', result: 1, hasWon: false}
                    ],
                    [
                        {name: 'team 3', result: 2, hasWon: true}, 
                        {name: 'team 4', result: 0, hasWon: false}
                    ],
                    [
                        {name: 'team 5', result: 2, hasWon: true}, 
                        {name: 'team 6', result: 1, hasWon: false}
                    ],
                    [
                        {name: 'team 7', result: 4, hasWon: true}, 
                        {name: 'team 8', result: 2, hasWon: false}
                    ]
                ], [
                    [
                        {name: 'team 1', result: 4, hasWon: true}, 
                        {name: 'team 3', result: 3, hasWon: false}
                    ],
                    [
                        {name: 'team 5', result: 2, hasWon: false}, 
                        {name: 'team 7', result: 1, hasWon: true}
                    ]
                ], [
                    [
                        {name: 'team 1', result: 3, hasWon: true}, 
                        {name: 'team 7', result: 2, hasWon: false}
                    ]
                ]
            ],
            losers: []
        }]
*/

function TournamentBrackets(options) {
    let defaulltOptions = {
        containerElement: '#tournament-brackets',
        hasDoubleElimination: false,
        showResult: false,
        showControls: false,
        data: {
            winners: [],
            losers: []
        }
    }

    options = {...defaulltOptions, ...options};

    let _this = this;

    this.init = function() {
        let container = document.querySelector(options.containerElement);

        if(!container.classList.contains('tournament-brackets'))
            container.classList.add('tournament-brackets');

        
        if(!options.data.winners)
            return;        

        container.innerHTML = this.generateHtml();
    }

    this.generateHtml = function() {
        let appendableHtml = '<div class="winners-bracket">';

        options.data.winners.forEach(round => {
            appendableHtml += '<div class="bracket-round">';

            round.forEach(table => {
                appendableHtml += '<table>';

                table.forEach(item => {
                    appendableHtml += `<tr class="${item.status ? item.status : ''}"><td>${item.name}</td>${options.showResult ? '<td>' + item.result + '</td>' : ''}</tr>`
                })

                appendableHtml += '</table>';
            })

            appendableHtml += '</div>';
        })

        appendableHtml += '</div>';

        return appendableHtml;
    }

    this.init();
}