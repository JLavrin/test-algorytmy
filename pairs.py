def findPairWithSameProduct(arr):
  for i in range(len(arr) - 1):
    for j in range(i + 1, len(arr)):
      if arr[i] * arr[j] == arr[i + 1] * arr[j + 1]:
        return [i, i + 1]
  return None