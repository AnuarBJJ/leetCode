/**
 * @param {string[]} words
 * @return {string}
 */

class Node {
    constructor(letter) {
        this.letter = letter;
        this.children = {};
        this.terminal = false;
    }

    print(lvl = 0) {
        Object.keys(this.children).forEach(child => {
            console.log(`level ${lvl}: ${child}`);
            this.children[child].print(lvl + 1);
        })
    }
};

function lexiLength(word1, word2) {
    let runner = 0;
    let equal = true;
    let smallest;

    while (equal && runner < word1.length) {
        if (word1.charCodeAt(runner) > word2.charCodeAt(runner)) {
            smallest = word2;
            equal = false;
        } else if (word1.charCodeAt(runner) < word2.charCodeAt(runner)) {
            smallest = word1;
            equal = false;
        }
        runner += 1;
    }
    return smallest;
}

var longestWord = function (words) {
    // build a trie 
    //trie branches with all terminal nodes qualify
    // the longest of them wins
    const trie = new Node('');
    trie.terminal = true;


    words.forEach(word => {
        let currentNode = trie;
        word.split('').forEach((letter, letterIndex) => {
            let nextNode = currentNode.children[letter];
            if (nextNode === undefined) {
                nextNode = new Node(letter);
                currentNode.children[letter] = nextNode;
            }
            currentNode = nextNode;
            if (letterIndex === word.length - 1) {
                currentNode.terminal = true;
            }
        })
    });


    let longestResult = '';

    (function findLongestInTrie(node, soFar) {

        if (node.terminal) {
            soFar += node.letter;

            if (soFar.length > longestResult.length) {
                longestResult = soFar;
            } else if (soFar.length > 0 && soFar.length === longestResult.length) {
                longestResult = lexiLength(soFar, longestResult);
            }

            Object.keys(node.children).forEach(character => {
                findLongestInTrie(node.children[character], soFar);

            })
        }

    })(trie, '');

    return longestResult;
};