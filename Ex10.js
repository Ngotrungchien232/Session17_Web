let n = 9;

let sqrt = Math.sqrt(n);

let result =
  sqrt === Math.floor(sqrt)
    ? `${n} là số chính phương`
    : `${n} không phải số chính phương`;

console.log(result);
