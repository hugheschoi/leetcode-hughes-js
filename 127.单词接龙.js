/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
/*
输入:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

输出: 5

解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
     返回它的长度 5。
     {
	  '*ot': [ 'hot', 'dot', 'lot' ],
	  'h*t': [ 'hot' ],
	  'ho*': [ 'hot' ],
	  'd*t': [ 'dot' ],
	  'do*': [ 'dot', 'dog' ],
	  '*og': [ 'dog', 'log', 'cog' ],
	  'd*g': [ 'dog' ],
	  'l*t': [ 'lot' ],
	  'lo*': [ 'lot', 'log' ],
	  'l*g': [ 'log' ],
	  'c*g': [ 'cog' ],
	  'co*': [ 'cog' ]
	}

*/

var ladderLength = function(beginWord, endWord, wordList) {
	if (!endWord || wordList.indexOf(endWord) === -1) {
		return 0
	}
	const comboDicts = {}
	const len = beginWord.length
	for (let i = 0; i< wordList.length; i++) {
		for (let r = 0; r < len; r++) {
			let newWord = wordList[i].substring(0,r)+'*'+wordList[i].substring(r+1,len)
      if (!comboDicts[newWord]) {
        comboDicts[newWord] = []
      }
			comboDicts[newWord].push(wordList[i]);
		}
	}
  console.log(comboDicts)
	let queue = [[beginWord, 1]]
	let visited = {beginWord: true}
  console.log(visited)
	while (queue.length > 0) {
		let currNode = queue.shift()
		let currWord = currNode[0]
		let currLevel = currNode[1]
		for (let i = 0; i <len; i++) {
			let newWord = currWord.substring(0,i)+'*'+currWord.substring(i+1,len);
			if(newWord in comboDicts) {
				let tmpWords = comboDicts[newWord];
				for(let z = 0;z<tmpWords.length;z++) {
					if(tmpWords[z] == endWord) {
						return currLevel + 1
					}
					if(!visited[tmpWords[z]]) {
						visited[tmpWords[z]] = true
						queue.push([tmpWords[z],currLevel+1])
					}
				}
			}
		}
	}
	return 0
}
// @lc code=end

