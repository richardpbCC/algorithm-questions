"use strict";
// const getAllPermutations = (numbers) => {
//   const result = [];
//   const rotations = numbers.length;

//   const recurse = (remainingNumbers, set, rotations) => {
//     console.log(remainingNumbers, set, rotations);

//     // if (set.length === 3) {
//     //   result.push(set);
//     //   set = [];
//     // }

//     if (rotations < 1) {
//       result.push(set);
//       return;
//     }

//     for (let i = 0; i < numbers.length; i += 1) {
//       const currentNumber = remainingNumbers[i];

//       if (!set.includes(currentNumber)) {
//         set.concat(currentNumber);
//         remainingNumbers.splice(i, 1);
//       }

//       if (remainingNumbers.length === 0) {
//         remainingNumbers = numbers.slice();
//       }

//       recurse(remainingNumbers, set, rotations - 1);
//     }
//   };
//   recurse(numbers.slice(), [], rotations);
//   return result;
// };

//https://medium.com/weekly-webtips/step-by-step-guide-to-array-permutation-using-recursion-in-javascript-4e76188b88ff

// const getAllPermutations = (numbers) => {
//   const result = [];

//   if (numbers.length === 0) {
//     return [];
//   }

//   if (numbers.length === 1) {
//     return [numbers];
//   }

//   for (let i = 0; i < numbers.length; i += 1) {
//     const currentNumber = numbers[i];

//     const remainingNumbers = numbers.slice();
//     remainingNumbers.splice(i, 1);

//     const remainingNumbersPermuted = getAllPermutations(remainingNumbers);

//     for (let j = 0; j < remainingNumbersPermuted.length; j += 1) {
//       const permutedArray = [currentNumber].concat(remainingNumbersPermuted[j]);
//       result.push(permutedArray);
//     }
//   }

//   console.log(result);
//   return result;
// };

// const sorted = (list) => {
//   const sortedArray = [];

//     list.forEach((listNum) => {
//     let sortIndex = 0;

//     sortedArray.forEach((sortedNum, i) => {
//       if (listNum >= sortedNum) {
//         sortIndex = i + 1;
//       }
//     });

//     sortedArray.splice(sortIndex, 0, listNum);
//   });

//   return sortedArray;
// };

// const sorted = (list) => {
//   const sortedArray = [];
//   const

//     list.forEach((listNum) => {
//     let sortIndex = 0;

//     sortedArray.forEach((sortedNum, i) => {
//       if (listNum >= sortedNum) {
//         sortIndex = i + 1;
//       }
//     });

//     sortedArray.splice(sortIndex, 0, listNum);
//   });

//   return sortedArray;
// };

// let bigArray = Array.from({ length: 100000 }, () =>
//   Math.floor(Math.random() * 40)
// );

// function download(megabytes) {
//   // const megabytesToBytes = (bytes) => bytes / (1024 * 1024);

//   const bytes = megabytes * 1048576;
//   const hexCode = bytes.toString(16);
//   console.log(hexCode);

//   // Size should be given in 'bytes'
//   const generateFile = (size) => {
//     return new Blob([new ArrayBuffer(size)], {
//       type: "application/octet-stream",
//     });
//   };
//   // const file = generateFile(1024 * 1024);

//   // var ia = new Uint8Array(1024);
//   // var file = new File([ia], "hexfile.bin", {type: "application/octet-stream"});

//   var bytesArray = Array(bytes).fill(8);

//   var ia = new Uint8Array(bytesArray);
//   var file = new File([ia], "hexfile.bin", {
//     type: "application/octet-stream",
//   });

//   const link = document.createElement("a");
//   const url = URL.createObjectURL(file);

//   link.href = url;
//   link.download = file.name;
//   document.body.appendChild(link);
//   link.click();

//   document.body.removeChild(link);
//   window.URL.revokeObjectURL(url);

//   // function bufferToHex(buffer) {
//   //   return [...new Uint8Array(buffer)]
//   //     .map((b) => b.toString(16).padStart(2, "0"))
//   //     .join("");
//   // }
// }

// console.log(download(15));

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
 * Question 3: downloadFile
 */

function generateAFile(megabytes) {
  const bytes = megabytes * 1048576;
  const hexCode = bytes.toString(16);
  console.log(hexCode);

  const bytesArray = Array(bytes).fill(8);

  var ia = new Uint8Array(bytesArray);
  var file = new File([ia], "hexfile.bin", {
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
}
