function chuanHoaCau(cau) {
  cau = cau.trim();

  let arr = cau.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let firstChar = arr[i].charAt(0);
    let restOfWord = arr[i].slice(1).toLowerCase();
    arr[i] = firstChar.toUpperCase() + restOfWord;
  }

  return arr.join(" ");
}

let cau = " this isAtEst";
var chuanHoaCau = chuanHoaCau(cau);
console.log(chuanHoaCau);
