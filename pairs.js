// 3
// O(n^2)
function findPairWithSameProduct(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] === arr[i + 1] * arr[j + 1]) {
        return [i, i + 1];
      }
    }
  }
  return null;
}

// wykorzystanei mapy do przechowywania produktów w celu optymalizacji :)
// O(n)
function findPairWithSameProduct(arr) {
  let productMap = new Map();
  for (let i = 0; i < arr.length - 1; i++) {
    let product = arr[i] * arr[i + 1];
    if (productMap.has(product)) {
      return [productMap.get(product), i];
    }
    productMap.set(product, i);
  }
  return null;
}