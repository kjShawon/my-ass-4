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