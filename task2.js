class Player 
{
    constructor(playerId, playerName, playerRuns, playerDob, playerShirtNo)
    {
        this.playerId = playerId;
        this.playerName = playerName;
        this.playerRuns = playerRuns;
        this.playerDob = playerDob;
        this.playerShirtNo = playerShirtNo;
    }
    displayInfo()
    {
        console.log(`Player ID is ${this.playerId} \n Player Name is ${this.playerName} \n Player Date of Birth is ${this.playerDob} \n Player Shirt Number is ${this.playerShirtNo}`);
    }
    getRuns()
    {
        console.log(`Player runs are ${this.playerRuns}`);
    }
    addRuns(runs)
    {
        this.totalRuns = runs;
        this.totalRuns = this.totalRuns + this.playerRuns;
    }
    totalRuns()
    {
        console.log(`Total runs scored are ${this.totalRuns}`);
    }
}
const player1 = new Player(1, 'Mubeen Baig,', 88, '14-02-1999', 13);
player1.addRuns(99);
player1.totalRuns();
player1.displayInfo();