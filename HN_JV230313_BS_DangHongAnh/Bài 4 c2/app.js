function compare(arr) {
  let abc = arr.length;
  for (let i = 0; i < abc - 1; i++) {
    for (let j = 0; j < abc - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let input = prompt(
  "Nhập mảng số nguyên bất kì, các phần tử cách nhau bằng dấu phẩy"
);
let arr = input.split(",").map(Number);
let sortedArr = compare(arr);
console.log(sortedArr);
