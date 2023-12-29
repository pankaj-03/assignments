/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  //METHOD 1 O(NlogN) 
  
  // const t1 = str1.replace(/\s/g ,'').toLowerCase();
  // const t2 = str2.replace(/\s/g , '').toLowerCase();

  // const s1 = t1.split('').sort().join('');
  // const s2 = t2.split('').sort().join('');

  // if(s1 == s2)return true;

  // return false;

  //METHOD-2  O(N)
  const s1 =  str1.replace(/\s/g,'').toLowerCase();
  const s2 = str2.replace(/\s/g,'').toLowerCase();
  let char = {};

  if(s1.length != s2.length)return false;

  for(let i=0;i<s1.length;i++){
    char[s1[i]] = (char[s1[i]] || 0) +1 ;
  }

  for(let i=0;i<s2.length;i++){
    if(!char[s2[i]])return false;

    char[s2[i]]--;
  }

  if(Object.values(char).every(count => count === 0)){
    return true;
  }
  else
  {
   return false;
  }
}

module.exports = isAnagram;
