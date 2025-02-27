let radius = parseFloat(prompt("Nhập bán kính hình trụ:"));
let height = parseFloat(prompt("Nhập chiều cao hình trụ:"));

const PI = Math.PI;

let basePerimeter = 2 * PI * radius;

let lateralArea = basePerimeter * height;

let baseArea = PI * radius * radius;
let totalArea = lateralArea + 2 * baseArea;

let volume = baseArea * height;

console.log(`Chu vi đáy: ${basePerimeter.toFixed(2)}`);
console.log(`Diện tích xung quanh: ${lateralArea.toFixed(2)}`);
console.log(`Diện tích toàn phần: ${totalArea.toFixed(2)}`);
console.log(`Thể tích hình trụ: ${volume.toFixed(2)}`);
