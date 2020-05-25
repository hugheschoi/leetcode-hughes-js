// 盛最多水的容器
var maxArea = function (height) {
	
	let maxArea = 0
	// 双指针，夹逼
	for (let i = 0, j = height.length - 1; i<j) {
		maxArea = Math.max(maxArea, (j-i)*(height[i]<height[j]?height[i++]:height[j--]))
	}
	// 暴力双重遍历
	for (let i = 0; i <height.length - 1;i++) {
		for (let j = 0; j<height.length; j++) {
			maxArea = Math.max(maxArea, (j-i)*Math.min(height[i], height[j]))
		}
	}
	return maxArea
	
}
// 移动零
var moveZeroes = function(nums){
	// 遇到0就删，随后马上push 0
	for (let i = 0; i <nums.length; i++) {
		if (nums[i] === 0) {
			nums.splice(i,1)
			nums.push(0)
		}
	}
	// 遍历取非0值，剩下的变为0
	let index = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i]!==0) {
			nums[index] = nums[i]
		}
	}
	while(index < nums.length) {
		nums[index++] = 0
	}
	// 双指针，j是最前面0的下标，移动i，当没遇到0时，同时加，遇到0后j就停下来，当继续没遇到0时，就和i交换
	let j = 0
	for (let i = 0; i<nums.length; i++) {
		if (nums[i] !== 0) {
			if (j < i) {
				nums[j] = nums[i]
				nums[i] = 0
			}
			j++
		}
	}
}
// 爬楼梯

var climbStairs = function(n) {
	/*
    0 1
    1 1
    2 2
    3 3
    4 5
    5 8
    根据规律发现是费布拉切数列 f(n) = fn(n-1)+f(n-2)
    用费布拉切数列数列模板解题，进行累加
    */
	let res1 = 1
	let res2 = 1
	let sum = res2
	for (let i = 2; i<=n; i++) {
		sum = res1 + res2
		res1 = res2
		res2 = sum
	}
	return sum
	/*
     一维动态规划，dp[i]表示i个阶梯有多少走法，那么dp[i] = dp[i-1] + dp[i-2],
  	 设置初始值dp[0] = 1, dp[1] = 1
	*/
	let dp = []
	dp[0] = 1
	dp[1] = 1
	for (let i=2;i<n.length;i++){
		dp[i] = dp[i-1]+ dp[i-2]
	}
	return dp[n]
}

// 两数之和
var twoSum = function(nums, target) {
	// 暴力求解，双重循环只要找到 num[i] +num[j] = target，就返回下标
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i+1; j<nums.length; j++) {
			if(nums[i]+nums[j] === target) {
				return [i, j]
			}
		}
	}
	// hash表求解
	const map = {}
	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i]
		if (map[nums[i]] !== undefined) {
			return [map[nums[i]], i]
		} else {
			map[diff] = i
		}
		
	}
}
// 三数之和
var threeSum = function(nums) {
	// 先排序
	// 暴力法，循环三层，用map set stringify后的数据，去重，不写了
	/*
	双指针夹逼，外部循环指针i，L为i+1，R为nums.length - 1, 夹逼。
	跳出循环条件 nums[i] > 0
	去重条件 当nums[i] = nums[i+1], nums[L] = nums[L+1] nums[R] = nums[R-1]
	*/
	if (nums === null || nums.length <= 2) return []
  	nums.sort((a, b) => a - b)
  	let result = []
  	for (let i = 0; i<nums.length;i++) {
  		if (nums[i] > 0) break
  		if (i > 0 && nums[i] = num[i-1]) continue
  		let L = i + 1,
  			R = nums.length - 1
  		while (L < R) {
  			let sum = nums[i] + nums[L] + nums[R]
  			if (sum === 0) {
  				result.push([nums[i], nums[L], nums[R]])
  				while(L<R && nums[L] === nums[++L])
  				while(L<R && nums[R] === nums[--R])
  				L++
  				R--
  			}else if (sum < 0) {
  				L++
  			} else {
  				R--
  			}
  		}
  	}
  	return result
}