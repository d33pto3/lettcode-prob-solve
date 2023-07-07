// var startsWith = (pre, str) => {
//   for (i = 0; i <= pre.length - 1; i++) {
//     if (pre[i] === str[i]) {
//       //do nothing
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// var longestCommonPrefix = function (strs) {
//   let prefix = "";

//   if (strs.length === 1) {
//     prefix = strs[0];
//   } else {
//     for (let i = 1; i <= strs[0].length; i++) {
//       let pre = strs[0].slice(0, i);
//       for (let j = 1; j <= strs.length - 1; j++) {
//         if (startsWith(pre, strs[j])) {
//           prefix = pre;
//         } else {
//           return pre.slice(0, i - 1);
//         }
//       }
//     }
//   }
//   return prefix;
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

strs = ["flower", "flow", "flight"];
strs.sort();
console.log(strs);
