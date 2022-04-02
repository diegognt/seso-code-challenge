"use strict";

// Print all entries, across all of the sources, in chronological order.
// Heapsort implementation.

const heapify = require('../lib/heapify');

module.exports = (logSources, printer) => {
  let mergedLogs = [];
  for (const logSource of logSources) {
    while (!logSource.drained) {
      const entry = logSource.pop();
      if (entry) {
        mergedLogs.push(entry);
      }
    }
  }

  const mergedLogsLength = mergedLogs.length;

  // Build heap (rearrange array)
  for (let i = parseInt(mergedLogsLength / 2 - 1); i >= 0; i--)
    heapify(mergedLogs, mergedLogsLength, i);

  // One by one extract an element from heap
  for (let i = mergedLogsLength - 1; i >= 0; i--) {
    printer.print(mergedLogs[0]);
    [mergedLogs[0], mergedLogs[i]] = [mergedLogs[i], mergedLogs[0]];
    heapify(mergedLogs, i, 0);
  }

  printer.done();
  return console.log("Sync sort complete.");
};

