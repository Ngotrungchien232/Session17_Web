let radius = parseFloat(prompt("Nhập bán kính hình cầu:"));

const PI = Math.PI;

let maxCircumference = 2 * PI * radius;

let surfaceArea = 4 * PI * radius * radius;

let volume = (4 / 3) * PI * radius * radius * radius;

console.log(`Chu vi lớn nhất: ${maxCircumference.toFixed(2)}`);
console.log(`Diện tích bề mặt: ${surfaceArea.toFixed(2)}`);
console.log(`Thể tích hình cầu: ${volume.toFixed(2)}`);
