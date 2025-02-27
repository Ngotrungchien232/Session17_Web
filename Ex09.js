function solveQuadratic(a, b, c) {
  const delta = b * b - 4 * a * c;

  if (delta < 0) {
    alert("Phương trình vô nghiệm");
  } else if (delta === 0) {
    const x = -b / (2 * a);
    alert("Phương trình có nghiệm kép: x = " + x);
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert("Nghiệm thứ nhất x1 = " + x1);
    alert("Nghiệm thứ hai x2 = " + x2);
  }
}
