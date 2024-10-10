// Hàm tính chu vi hình chữ nhật
const perimeter = (length, width) => 2 * (length, width);

// Hàm tính diện tích hình chữ nhật
const area = (length, width) => length * width;

//Khai báo chiều dài và chiều rộng
const length = 5; //Chiều dài
const width = 3; //Chiều rộng

//Tính chu vi và diện tích
const rectPerimeter = perimeter(length, width);
const rectArea = area(length,width);

//In kết quả
console.log(`Chu vi hình chữ nhật: ${rectPerimeter}`); //Output: Chu vi HCN: 16
console.log(`Diện tích hình chữ nhật: ${rectArea}`); //Output: Diện tích HCN: 15