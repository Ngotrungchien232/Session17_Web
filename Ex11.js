console.log(Math.abs(-5.5));
// Kết quả: 5.5
// Giải thích: Math.abs() trả về giá trị dương của số, bỏ qua dấu âm

console.log(Math.abs(10));
// Kết quả: 10
// Giải thích: Vì 10 đã là số dương nên kết quả giữ nguyên

console.log("\nSử dụng Math.ceil():");

// Làm tròn lên đến số nguyên gần nhất
console.log(Math.ceil(4.4));
// Kết quả: 5
// Giải thích: Math.ceil() luôn làm tròn lên, dù phần thập phân nhỏ thế nào

console.log(Math.ceil(5.8));
// Kết quả: 6
// Giải thích: 5.8 được làm tròn lên thành 6 vì Math.ceil() làm tròn lên

console.log("\nSử dụng Math.floor():");

console.log(Math.floor(5.7));
// Kết quả: 5
// Giải thích: Math.floor() làm tròn xuống, bỏ phần thập phân

console.log(Math.floor(6.1));
// Kết quả: 6
// Giải thích: 6.1 được làm tròn xuống 6 vì Math.floor() luôn làm tròn xuống

console.log("\nSử dụng Math.round():");

console.log(Math.round(10.1));
// Kết quả: 10
// Giải thích: Math.round() làm tròn theo quy tắc thông thường, dưới 0.5 làm tròn xuống

console.log(Math.round(20.6));
// Kết quả: 21
// Giải thích: 20.6 làm tròn thành 21 vì lớn hơn hoặc bằng 0.5 thì làm tròn lên
