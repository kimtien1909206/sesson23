let n = +prompt("Nhập số phần tử của mảng:");
let arr = [];

for (let i = 0; i < n; i++) {
    let char = prompt("Nhập ký tự thứ " + (i + 1) + ":");
    arr.push(char);
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] !== " ") {
        sum += Number(arr[i]);
    }
}

console.log("Mảng vừa nhập:", arr);
console.log("Tổng các ký tự là số:", sum);
