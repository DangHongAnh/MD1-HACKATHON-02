function tinhSoNgay(thang, nam) {
  let soNgayTrongThang = [
    31,
    nam % 4 === 0 && (nam % 100 !== 0 || nam % 400 === 0) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  let soNgay = 0;
  for (let i = 1; i <= soNgayTrongThang[thang - 1]; i++) {
    soNgay++;
  }

  return soNgay;
}

let soNgay = tinhSoNgay(8, 2023);
console.log(`Số ngày trong tháng là: ${soNgay}`);
