let numbers = [5, 12, 8, 20, 7, 15, 3, 10, 18, 6];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 10) {
    count++;
  }
}
console.log("Số lượng số nguyên lớn hơn hoặc bằng 10 là: " + count);

