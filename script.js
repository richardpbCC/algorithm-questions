"use strict";

/**
 * Question 1: getAllPermutations
 */

const getAllPermutations = (numbers) => {
  let result = [];

  const recurseCombo = (currentCombo = []) => {
    if (currentCombo.length === numbers.length) {
      result.push(currentCombo);
      return;
    }

    for (let number of numbers) {
      if (!currentCombo.includes(number)) {
        recurseCombo(currentCombo.concat(number));
      }
    }
  };

  recurseCombo();
  return result;
};

/**
 * Question 2: SortedArray
 */

class SortedArray {
  constructor(list) {
    this.list = list;
    this.sortedList = this.sortList();
  }

  sortList() {
    const sortedList = [];
    const unsortedArray = this.list.slice();

    unsortedArray.forEach((listNum) => {
      let sortIndex = 0;

      sortedList.forEach((sortedNum, i) => {
        if (listNum >= sortedNum) {
          sortIndex = i + 1;
        }
      });

      sortedList.splice(sortIndex, 0, listNum);
    });

    return sortedList;
  }

  sorted() {
    return this.sortedList;
  }

  reversed() {
    const sortedList = this.sortedList;
    const reversedList = [];

    sortedList.forEach((number) => reversedList.unshift(number));
    return reversedList;
  }

}

/**
 * Question 3: generateAFile
 */

function generateAFile(megabytes) {

  const bytes = megabytes * 1048576;
  const bytesArray = Array(bytes).fill(8);
  const hexArray = new Uint8Array(bytesArray);

  const file = new File([hexArray], "hex-file.bin", {
    type: "application/octet-stream",
  });

  const link = document.createElement("a");
  const url = URL.createObjectURL(file);

  link.href = url;
  link.download = file.name;
  document.body.appendChild(link);

  link.click();
  
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);

  return file;
}
