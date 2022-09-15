"use strict";

const test = (actual, expected) => {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.group("Test Passed:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
    return ;
  } else {
    console.error("Test Failed");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
};

/**
 * Tests for Question 1
 */

console.log("%cTests for Question 1:", "color: tomato");


/**
 * Tests for Question 2
 */
const list1 = new SortedArray([5, 4, 3, 2, 1]);
const list2 = new SortedArray([-1, 100, 3, 0.5, 24, 15.6, 1]);
const sortedList1 = list1.sorted();
const sortedList2 = list2.sorted();
const reversedList1 = list1.reversed();
const reversedList2 = list2.reversed();

console.log("%cTests for Question 2:", "color: tomato");
test(sortedList1, [1, 2, 3, 4, 5]);
test(sortedList2, [-1, 0.5, 1, 3, 15.6, 24, 100]);
test(reversedList1, [5, 4, 3, 2, 1]);
test(reversedList2, [100, 24, 15.6, 3, 1, 0.5, -1]);

/**
 * Tests for Question 3
 */

console.log("%cTests for Question 3:", "color: tomato");
