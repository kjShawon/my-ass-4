function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    return str.replace(/\s/g, "").toUpperCase();
}
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  ")); // "HAACKME1@RUCN"