// 1. totalFine ফাংশন - জরিমানা হিসাব করে
function totalFine(fare) {
    // ফেয়ার ভ্যালিডেশন চেক (সংখ্যা এবং শূন্যের বেশি হতে হবে)
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    // জরিমানা হিসাব: মূল ভাড়া + ২০% + ৩০ টাকা ফিক্সড
    const fine = fare + fare * 0.2 + 30;
    return fine;
}
console.log(totalFine(200))

// 2. onlyCharacter ফাংশন - স্ট্রিং প্রসেসিং করে
function onlyCharacter(str) {
    // ইনপুট স্ট্রিং কিনা চেক
    if (typeof str !== "string") {
        return "Invalid";
    }
    // সব স্পেস রিমুভ করে এবং বড় হাতের অক্ষরে কনভার্ট করে
    return str.replace(/\s/g, "").toUpperCase();
}
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));

// 3. bestTeam ফাংশন - সেরা টিম নির্বাচন করে
function bestTeam(player1, player2) {
    // ইনপুট ভ্যালিডেশন চেক (অবজেক্ট এবং প্রপার্টিগুলো সংখ্যা কিনা)
    if (
        typeof player1 !== "object" || player1 === null ||
        typeof player2 !== "object" || player2 === null ||
        typeof player1.foul !== "number" || typeof player1.cardY !== "number" || typeof player1.cardR !== "number" ||
        typeof player2.foul !== "number" || typeof player2.cardY !== "number" || typeof player2.cardR !== "number"
    ) {
        return "Invalid";
    }

    // প্রতিটি টিমের টোটাল স্কোর হিসাব (ফাউল + ইয়েলো কার্ড + রেড কার্ড)
    const score1 = player1.foul + player1.cardY + player1.cardR;
    const score2 = player2.foul + player2.cardY + player2.cardR;

    // স্কোর কম হলে ভাল টিম (কারণ কম ডিসিপ্লিন সমস্যা)
    if (score1 < score2) {
        return player1.name;
    } else if (score2 < score1) {
        return player2.name;
    } else {
        return "Tie"; // সমান স্কোর হলে টাই
    }
}

console.log(bestTeam(
    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
));

// 4. isSame ফাংশন - দুইটি অ্যারে সমান কিনা চেক করে
function isSame(arr1, arr2) {
    // ইনপুট অ্যারে কিনা চেক
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    // অ্যারের দৈর্ঘ্য সমান কিনা চেক
    if (arr1.length !== arr2.length) {
        return false;
    }
    // প্রতিটি এলিমেন্ট সমান কিনা চেক
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true; // সব কিছু মিললে true
}
console.log(isSame([1, 2, 3], [1, 2, 3]));

// 5. resultReport ফাংশন - স্টুডেন্ট রেজাল্ট রিপোর্ট জেনারেট করে
function resultReport(marks) {
    // ইনপুট অ্যারে কিনা চেক
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    let totalSubject = marks.length;
    let sum = 0;
    // সব মার্কস যোগ করে টোটাল বের করে
    for (let i = 0; i < totalSubject; i++) {
        sum += marks[i];
    }
    // গড় নেয় এবং রাউন্ড করে (যদি সাবজেক্ট থাকে)
    let roundAverage = totalSubject === 0 ? 0 : Math.round(sum / totalSubject);
    let totalPass = 0;
    // পাস করা সাবজেক্ট কাউন্ট করে (৪০ বা তার বেশি মার্কস)
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 40) {
            totalPass++;
        }
    }
    // রেজাল্ট অবজেক্ট রিটার্ন করে
    return {
        finalScore: roundAverage,
        pass: totalPass,
        fail: totalSubject - totalPass,
    };
}

console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));