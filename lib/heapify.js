/**
 * Builds an array-Heap MinHeap.
 *
 * @param {Array} array Array to Heapify
 * @param {number} heapSize The size of the Heap.
 * @param {number} i The index of the Array.
 */
const heapify = (array, heapSize, i) => {
  var smallest = i; // Initialize the smallest as root
  var l = 2 * i + 1; // left = 2*i + 1
  var r = 2 * i + 2; // right = 2*i + 2

  // If left child is smaller than root
  if (l < heapSize && array[l].date < array[smallest].date) smallest = l;

  // If right child is smaller than smallest so far
  if (r < heapSize && array[r].date < array[smallest].date) smallest = r;

  // If smallest is not root
  if (smallest != i) {
    [array[i], array[smallest]] = [array[smallest], array[i]];

    // Recursively heapify the affected sub-tree
    heapify(array, heapSize, smallest);
  }
};

module.exports = heapify;
