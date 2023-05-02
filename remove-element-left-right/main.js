function removeLeftRight(arr, position) {
  if (position === 'left') {
    arr.shift();
  }
  else if (position === 'right'){
    arr.pop();
  }
  return arr;
}

console.log(removeLeftRight([1, 2, 3, 4, 5], 'left'));
console.log(removeLeftRight([1, 2, 3, 4, 5], 'right'));
console.log(removeLeftRight(["Edo", "Budi", "Joko", "Tono"], 'left'));
console.log(removeLeftRight(["Edo", "Budi", "Joko", "Tono"], 'right'));