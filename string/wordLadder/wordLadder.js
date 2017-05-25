/* !!!!!!!!!!!The solution is not completes
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
For example,

Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Note:
Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
UPDATE (2017/1/20):
The wordList parameter had been changed to a list of strings (instead of a set of strings). Please reload the code definition to get the latest changes.
*/


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {
     const visited = new Set();
     let beginningSet = new Set();
     let count = 2;

     const wL = new Set();

     wordList.forEach( word => {
        wL.add(word);
     });

     beginningSet.add(beginWord);


     while(beginningSet.size > 0){
         const temp = new Set();
         for(let word of beginningSet) {

             const wordArray = word.split('');


             for(let index in wordArray){

                 let oldChar = wordArray[index];
                 for(let i=97; i< 123; i++){
                     wordArray[index] = String.fromCharCode(i);
                     let candidate = wordArray.join('');
                     if(wL.has(candidate) && candidate === endWord){
                         return count;
                     }

                     if( wL.has(candidate) && !visited.has(candidate) ){
                       temp.add(candidate);
                         visited.add(candidate);

                     }
                 }
                 wordArray[index] = oldChar;
             }

         }
         count ++;
         beginningSet = temp;
     }

     return 0;
 };
