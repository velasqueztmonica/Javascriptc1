// Step 1 - create an empty team object

const team = {
    _players: [
        {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
        },
        {
            firstName: 'Pete',
            lastName: 'Glover',
            age: 54
        },
        {
            firstName: 'Monica',
            lastName: 'Ferguson',
            age: 32
            }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Veltor',
            teamPoints: 40,
            opponentPoints: 38
        },
        {
            opponent: 'Fedal',
            teamPoints: 56,
            opponentPoints: 40
        }

    ],

// Getter methods for _players and _games
// Getter for _players
    get players() {
        return this._players
    },

    get games() {
        return this._games
    },
// Step 6 - add a player - method
    
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName : firstName,
            lastName : lastName,
            age : age
        };
        return this._players.push(player);
    },

// Step 8 - addGame mthod
    
    addGame(opponentName, teamPoints, opponentPoints) {
        const game = {
            opponent: opponentName,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints,
        };
        return this._games.push(game)
    }

};

// Step 7 invoke the method
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team._players)

team.addGame('Spurs', 59, 35);
team.addGame('Blues', 70, 45);
team.addGame('Tins', 80, 56);

console.log(team._games)