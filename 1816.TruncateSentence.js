var truncateSentence = function (s, k) {
  // let str = new String();
  let count = 0;
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === " ") count++;
  //   if (count < k) str += s[i];
  // }
  console.log(s.split(" ", k).join(" "));
};

truncateSentence("Hello how are you Contestant", 4);
