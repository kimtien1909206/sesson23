let arr = ["a", "1", "b", "5", "c", "8", "d", "2", "e"];

let numbers = [];
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] !== " ") {
        numbers.push(arr[i]);
    }
}
console.log("Mảng ban đầu:", arr);
console.log("Các ký tự số trong mảng là:", numbers);
