function lengthOfLongestSubstring(s) {
    let n = s.length;
    let set = new Set();
    let maxLength = 0, i = 0, j = 0;
    
    while (i < n && j < n) {
        if (!set.has(s[j])) {
            set.add(s[j++]);
            maxLength = Math.max(maxLength, j - i);
        } else {
            set.delete(s[i++]);
        }
    }
    
    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
