---
templateKey: code-page
path: /ts-algorithms
title: Typescript Algorithms
description: Answers to common problems using Typescript.
content:
  snippets:
    - description: >-
        Write a function to add parentheses so that all opening and closing
        parentheses

        (brackets) have matching counterparts. You will do this by appending parenthesis

        to the beginning or end of the string. The result should contain the original string,

        and be of minimal length.
      title: Parentheses Closer
      code:
        code: >-
          const addParens = (inputString: string): string => {
            // create local vars
            let neededToCloseParens = 0;
            const openingParen = "(";
            const closingParen = ")";

            // instantiate our input and return objects
            const inputStringArray = inputString.split("");
            const returnStringArray: Array<string> = [];

            // loop through string array
            for (let i = 0; i < inputStringArray.length; i++) {
              // if we have opening bracket, push it no matter what
              if (inputStringArray[i] === openingParen) {
                returnStringArray.push(inputStringArray[i]);
                // else check for closing paren and increment needed closing parens
              } else if (inputStringArray[i] === closingParen) {
                if (!returnStringArray.pop()) neededToCloseParens++;
              }
            }

            // create arrays from counters, join to create strings
            const openingParensArray = Array(neededToCloseParens + 1).join(openingParen);
            const closingParensArray = Array(returnStringArray.length + 1).join(
              closingParen
            );

            // concatenate our final string, remove commas with regex
            return (openingParensArray + inputStringArray + closingParensArray).replace(
              /,/g,
              ""
            );
          };
    - title: Simple Palindrome Checker
      description: Return true if input is palindrome, false if not.
      code:
        code: |-
          const isPalendrome = (inputString: string): boolean => {
            const revString = inputString.split('').reverse().join('');
            return revString === str;
          };
    - title: Simple Anagram Checker
      description: Return true if input strings are anagrams of each other.
      code:
        code: >-
          const isAnagram = (aString: string, bString: string): boolean => {
            return aString.split('').sort().join('') === bString.split('').sort().join('');
          };
    - title: Simple Array Flatten
      description: Return single array from array of arrays.
      code:
        code: >-
          const flattenArray = (inputArrays: Array<any>): Array<any> => {
            return inputArrays.reduce((arrayA: Array<any>, arrayB: Array<any>) => {
              return arrayA.concat(arrayB);
            });
          };
        lang: javascript
    - title: Longest Word of a Sentence
      description: Determine longest word (or words if there is a tie in length) from
        input sentence string
      code:
        code: >-
          const getLongestWord = (sentence: string): string | Array<string> => {
            const wordArr = sentence.toLowerCase().match(/[a-z0-9]+/g);
            const sorted = wordArr.sort((a: string, b: string) => b.length - a.length);
            
            // if multiple words, insert into array
            const longestWordArr = sorted.filter((word: string) => word.length === sorted[0].length);
            
            // Check if more than one array value
            if (longestWordArr.length === 1) {
               return longestWordArr[0];
            } else {
               return longestWordArr;
            }
          };
        lang: javascript
    - title: Classic "FizzBuzz"
      description: 'Loop from start to finish number. For multiples of 3, instead of
        the number, print "Fizz".  For multiples of 5, print "Buzz". For
        multiples of both 3 and 5, return "FizzBuzz". '
      code:
        code: >-
          const printFizzBuzzToConsole = (start: number, end: number): string =>
          {
            let returnStr: string = '';
            
            for (let i = start; i <= end; i++) {
               if (i % 15 === 0) {
                 returnStr += 'FizzBuzz';
               } else if (i % 3 === 0) {
                 returnStr += 'Fizz';
               } else if (i % 5 === 0) {
                 returnStr += 'Buzz';
               }
            }
            
            return returnStr;
          };
        lang: javascript
    - code:
        code: >-
          const capitalizeEachFirstLetter = (inputString: string): string => {
            // split on words, not letters by using ' '
            const strArr = inputString.toLowerCase().split(' ');
            
            for (let i = 0; i < strArr.length; i++) {
              strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
            }
            
            // re-create the sentence
            return strArr.join(' ');
          };
        lang: javascript
      title: Capitalize First Letter of Each Word
      description: Return a string with each word having the first letter capitalized
        from an input string sentence.
    - title: Vowel Checker
      description: Check if letter is a vowel, return a boolean.
      code:
        code: |-
          const isVowelLetter = (letter: string): boolean => {
            if (typeof letter !== 'string')
              return false;
            
            const returnArr = letter.match(/[aeiou]/gi);
            return returnArr && returnArr.length > 0;
          };
    - title: Sum Array of Numbers
      description: Return sum from array of numbers.
      code:
        code: |-
          const sumNumbersFromArray = (numbersArray: Array<number>): number => {
            let result: number = 0;
            for (const number of numbersArray) {
              result += number;
            }
            return result;
          };
        lang: typescript
    - title: Sum all prime numbers
      description: Loop using input number as max, sum all prime numbers in that range.
      code:
        code: |-
          const isPrimeNumber = (num: number): boolean => {
            // numbers greater than 1 are prime
            for (let i = 2; i < num; i++) {
              if (num % i === 0) {
                return false;
              }
            }
            return true;
          }

          const sumPrimeNumbers = (num: number): number => {
            let total: number = 0;
            
            for (let i = 2; i <= num; i++) {
              if (isPrimeNumber(i)) {
                total += i;
              }
            }
            
            return total;
          }
        lang: javascript
    - title: Spread operator to remove array items
      code:
        code: |-
          const seekAndDestroy = (
            inputArr: Array<any>,
            removeArr: Array<any>
          ): Array<any> => {
            return inputArr.filter((item: any) => !removeArr.includes(item));
          };
        lang: typescript
      description: "Though potentially unsafe for larger data structures, this can be
        useful on a small scale. This will remove whatever type of params are
        passed in ...rest operator. "
---
