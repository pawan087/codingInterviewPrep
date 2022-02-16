// Binary Number in a Linked List

function getNumber(binary) {
  let res = [];

  while (binary !== null) {
    res.push(binary.data);
    binary = binary.next;
  }

  let binaryStr = res.join("");

  console.log(binaryStr)

  return convertBinaryToDecimal(binaryStr);
}

function convertBinaryToDecimal(binaryStr) {
  return parseInt(binaryStr, 2);
}
