Algorithm questions - Richard Beavis
Notes:
- Write your code in-line or use GitHub / CodePen, etc. 
- You may use your preferred programming language.


1. All permutations of a list of number
Notes: the purpose of this question is to check your algorithm understanding, so don't use official modules such like itertools 

- Input : a list of numbers (1,2,3 e.g.)
- Output : print all permutations of these numbers
  - 123/132/213/231/312/321
- Conditions : 
  - We do not know the size of the list, it can be any
  - No duplicated number in the list
  - Fewer steps and less code is better


2. Declare a class of SortedArray
- Input : a list of numbers
- Output : 
  - Declare a class which has a constructor that accepts a list of numbers as arguments 
  - Sort the list automatically
  - Provides 2 member functions to use
    - sorted() : get sorted array
    - reversed() : get a reversed array without changing the sorted list.
- Condition : 
  - WITHOUT using any official functions like sort() assort() reverse()...
  - Use OOP to declare a class with member functions
  - The size of the list could be millions of elements
  - Fewer steps and less code is better
- Checkpoints 
  -  sorting algorithm


3.  Generate a file
Notes: the purpose of this question is to generate and download a file from your browser, not your backend

- Input : specify the number of megabytes to be generated
- Output : A file of the specified size 
- Condition : 
  - Sequenced hex number only
  - Example of decimal to hex: if decimal range is 1-1,000,000 Then the hex range is 00000001-000F4240 
  - every hex number takes 8bytes
  - 1GB =1024 * 1024 bytes
  - if you are using js in browser, let user download that file after generating 
