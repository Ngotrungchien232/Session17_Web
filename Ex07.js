var goc = prompt("Mời bạn nhập số tiền cần chuyển đổi: ");

goc = Number(goc);

if (!isNaN(goc)) {
  console.log(
    goc.toLocaleString("vi-VN", { style: "currency", currency: "VND" })
  );
} else {
  console.log("Vui lòng nhập một số hợp lệ.");
}
