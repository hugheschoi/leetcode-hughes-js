// 5.最长回文子串
var longestPalindrome = function(s) {
    // 定义数组的含义：dp[i,j]：字符串s从索引i到j的子串是否是回文子串
    // 找到关系式
    	// 回文串就是 正着和反着读都一样 所以条件1 子串也是回文串 dp[i+1][j-1] 为true
    	// s[i]和s[j]要相同 s[i] == s[j]
    	// 结论 dp[i, j] = dp[i+1][j-1] && s[i] == s[j]
    // 设定最初值
    	// 特殊情况j-i 如果 小于 2，且s[i] = s[j]，那也行 
    	// 初始值可以没有
    let n = s.length
    // 定义规划二维数组
    let dp = Array.from(new Array(n), () => new Array(n).fill(0))
	let res = ''
    for (let i = n - 1; i >= 0; i--) {
    	for (let j = i; j < n; j ++) {
    		dp[i][j] = s[i] == s[j] && (j -i < 2 || dp[i+1][j-1])
    		if (dp[i][j] && j - i + 1 > res.length) { 
    			// 需要最长，要大于原来的长度 j - i +1 > res.length
    			res = s.substring(i, j + 1)
    		}
    	}
    }
    return res
};
// 62. 不同路径
var uniquePaths = function(m, n) {
	// 定义数组元素的含义 当终点在 [i, j]时，共有dp[i][j]条路径
	// 找到关系式 dp[i][j]  把走到[i-1][j] +和走到[i][j-1] 的走法次数相加就为 dpp[i][j]
		// 所以关系式： dp[i][j] = dp[i-1][j] + dp[i][j-1]
	// 设定初始值 i和j不能为0, 当一行或者一列怎么排时只有一种解法
	if (m <= 0 || n <= 0) {
		return 0
	}
	let dp = Array.from(new Array(m), () => new Array(n).fill(0))
	for (let i = 0; i < m; i++) {
		dp[i][0] = 1
	}
	for (let i = 0; i < n; i++) {
		dp[0][i] = 1
	}
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = dp[i-1][j] + dp[i][j-1]
		}
	}
	return dp[m-1][n-1]
};

// 64. 最小路径和
var minPathSum = function(grid) {
    // 定义数组元素的含义i*j 的grid中 路径最小和为dp[i][j]
	// 找到关系式 min(dp[i - i][j], dp[i][j-1]) + grid[i][j]
	// 设定初始值 
	  // 一行或一列时，就等于上一个加值
	  // dp[0][j] = dp[0][j-1] + grid[0][j]  dp[i][0] = dp[i-1][0] + grid[i][0]
	let m = grid.length
	let n = grid[0].length
    if (m <= 0 || n <= 0) {
        return 0;
    }
    let dp = []
	let dp = Array.from(new Array(m), () => new Array(n).fill(0))
    dp[0][0] = grid[0][0]
	for (let i = 1; i < m; i++) {
		dp[i][0] = dp[i-1][0] + grid[i][0]
	}	
	for (let i = 1; i < n; i++) {
		dp[0][i] = dp[0][i-1] + grid[0][i]
	}
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = Math.min(dp[i - 1][j], dp[i][j-1]) + grid[i][j]
		}
	}
	return dp[m-1][n-1]
};







