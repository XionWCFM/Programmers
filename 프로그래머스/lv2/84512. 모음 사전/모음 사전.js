function generateWords(n, word, words) {
  if (n === 0) {
    words.push(word);
    return;
  }
  for (let i = 0; i < 5; i++) {
    generateWords(n - 1, word + ["A", "E", "I", "O", "U"][i], words);
  }
}

function solution(word) {
  let words = [];
  for (let i = 1; i <= 5; i++) {
    generateWords(i, "", words);
  }

  words.sort();

  let count = 0;
  for (let i = 0; i < words.length; i++) {
    count++;
    if (words[i] === word) {
      return count;
    }
  }
}

