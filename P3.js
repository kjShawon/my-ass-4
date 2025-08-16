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