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