// 1
function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    const fine = fare + fare * 0.2 + 30;
    return fine;
}
console.log(totalFine(200))

// 2
function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    return str.replace(/\s/g, "").toUpperCase();
}
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  ")); // "HAACKME1@RUCN"
// 3
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

// 4
function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
console.log(isSame([1, 2, 3], [1, 2, 3]));

// 5
function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    let totalSubject = marks.length;
    let sum = 0;
    for (let i = 0; i < totalSubject; i++) {
        sum += marks[i];
    }
    let roundAverage = totalSubject === 0 ? 0 : Math.round(sum / totalSubject);
    let totalPass = 0;
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 40) {
            totalPass++;
        }
    }
    return {
        finalScore: roundAverage,
        pass: totalPass,
        fail: totalSubject - totalPass,
    };
}

console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));

