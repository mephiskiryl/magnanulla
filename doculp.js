function node_sort(compare) {
  return function(arr) {
    return arr.sort(function(a, b) {
      return compare(a, b);
    });
  };
}
