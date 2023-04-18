function compare(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr;
}
let input = prompt(
  "Nhập mảng số nguyên bất kì, các phần tử cách nhau bằng dấu phẩy"
);
let arr = input.split(",").map(Number);
let sortedArr = compare(arr);
console.log(sortedArr);
