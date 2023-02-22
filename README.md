# Tournament Brackets
A tournament brackets builder and viewer using vanilla JavaScript and CSS. Build from simple to complex tournament brackets, adding multiple teams per bracket, double elimination and more.

## Install
Copy both `tournament-brackets.min.css` and `tournament-brackets.min.js` from the `dist` folder to your local project folder, and include them into your html file:

CSS
`<link href="src/tournament-brackets.css" rel="stylesheet">`

JS
`<script src="src/tournament-brackets.js"></script>`

## Usage
Inside the `<body>` tag, add the following price of code that will be used as container for the tournament brackets:

`<div id="tournament-brackets"></div>`

After the script for including the JS file, open a `script` tag, and add the following piece of code:

`<script>new TournamentBrackets()</script>`

The `TournamentBrackets` accepts an options object as parameter, which you can override the following default parameters:
- `containerElement`: the element selector which the brackets are going to be rendered;
- `hasDoubleElimination`: if the tournament has the double elimination;
- `showResult`: if the brackets should show the result of the match or not;
- `showControls`: if the controls for adding, removing or editing brackets should be visible;
- `data`: the data used to render the brackets. It has the following structure:
    - `winners`: array of arrays, each element represents a round from the winners bracket;
        - each array inside a round represents a group of players that played that round;
            - each element inside a group of players is an object with the name of the player, the result and if the player has won or not;
    - `losers`: array of arrays, each element represents a round from the losers bracket. Has the same structure as the winners;

Example:

```
new TournamentBrackets({
    containerElement: '#tournament-bracket',
    hasDoubleElimination: false,
    showResult: false,
    showControls: false,
    data: {
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
    }
});
```