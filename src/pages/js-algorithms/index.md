---
title: Typescript Algorithms
description: Answers to common problems using Typescript.
intro:
  algorithms:
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
---
