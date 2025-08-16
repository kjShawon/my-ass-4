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