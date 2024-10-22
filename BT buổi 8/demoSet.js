// Tạo một Set mới
const mySet = new Set();

// Thêm các giá trị vào Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(3); // Bị bỏ qua vì giá trị 3 đã tồn tại

// Kiểm tra kích thước của Set
console.log("Kích thước của Set:", mySet.size); // 3

// Kiểm tra một giá trị có trong Set hay không
console.log("Có 2 trong Set không?", mySet.has(2)); // true
console.log("Có 4 trong Set không?", mySet.has(4)); // false

// Xóa một phần tử
mySet.delete(2);
console.log("Set sau khi xóa 2:", [...mySet]); // [ 1, 3 ]

// Lặp qua Set và in các giá trị
mySet.forEach(value => {
  console.log("Giá trị trong Set:", value);
});

// Xóa tất cả phần tử trong Set
mySet.clear();
console.log("Kích thước của Set sau khi xóa tất cả:", mySet.size); // 0
