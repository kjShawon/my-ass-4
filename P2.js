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
