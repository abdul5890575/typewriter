const sentence = "hello there from lighthouse labs";
let time = 0;
let time2= 50 * sentence.length
for (const char of sentence) {
  time += 50;
  setTimeout(() => {
        process.stdout.write(char);
  }, time)
}
setTimeout(() => {
  process.stdout.write('\n');
}, time2)
