let n = +prompt("Nhập số phần tử của mảng:");
let arr = [];

for (let i = 0; i < n; i++) {
    let num = +prompt("Nhập phần tử thứ " + (i + 1) + ":");
    arr.push(num);
}

let countNegative = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        countNegative++;
    }
}

console.log("Mảng vừa nhập:", arr);
console.log("Số phần tử nguyên âm trong mảng là:", countNegative);
