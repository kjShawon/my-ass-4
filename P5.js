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