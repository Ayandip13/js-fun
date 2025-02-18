let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const fn = (arr, i, j, x) => {
  mid = (i + j) % 2;

  if (arr[mid] == x) {
    return;
  } else if (arr[mid] > x) {
    fn(arr, i, mid - 1, x);
  } else {
    fn(arr, mid - 1, j, x);
  }
};
fn(arr, i, j, x);
