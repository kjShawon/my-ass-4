function bestTeam(player1, player2) {
    if (
        typeof player1 !== "object" || player1 === null ||
        typeof player2 !== "object" || player2 === null ||
        typeof player1.foul !== "number" || typeof player1.cardY !== "number" || typeof player1.cardR !== "number" ||
        typeof player2.foul !== "number" || typeof player2.cardY !== "number" || typeof player2.cardR !== "number"
    ) {
        return "Invalid";
    }

    //total score for each team
    const score1 = player1.foul + player1.cardY + player1.cardR;
    const score2 = player2.foul + player2.cardY + player2.cardR;

    //the best team
    if (score1 < score2) {
        return player1.name;
    } else if (score2 < score1) {
        return player2.name;
    } else {
        return "Tie";
    }
}

console.log(
	bestTeam(
		{ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
    // { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },Brazil
    // { name: "Germany", foul: 10, cardY: 1, cardR: 1 },Germany
    // { name: "France", foul: 10, cardY: 2, cardR: 1 }Germany
    // { name: "Germany", foul: 10, cardY: 1, cardR: 1 },tie
    // { name: "France", foul: 10, cardY: 1, cardR: 1 } tie
    // "Germany", { name: "France", foul: 10, cardY: 1, cardR: 1 }
    
	)
);
// Output: "Brazil"