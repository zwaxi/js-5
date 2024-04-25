let name = prompt ("Ismingizni kiriting . . . .")
let abc = prompt ("Ixtyoriy harf kiriting . . . ")
let test = abc.includes(name);

if (test) {
    alert("Sizning ismingizda bu harif mavjud...");
}else {
    alert("Sizning ismingizda bu harif mavjud emas...");
}