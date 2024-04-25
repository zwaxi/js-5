let name = prompt("Ismingizni kiriting . . . .").toLocaleLowerCase()
let abc = prompt("Ixtyoriy harf kiriting . . . ").toLocaleLowerCase()
let test = name.includes(abc);

if (test) {
    alert("Sizning ismingizda "+ + abc + " harif mavjud...");
} else {
    alert("Sizning ismingizda " + abc + " harif mavjud emas...");
}