// an example how \r works by placing the cursor @ beginning of new line
// process.stdout.write("hello from spinner1.js... \rheyyy\n")

const stdout = process.stdout;

setTimeout(() => {
  stdout.write("\r|    ");
}, 100)

setTimeout(() => {
  stdout.write("\r/    ");
}, 300)

setTimeout(() => {
  stdout.write("\r-    ");
}, 500)

setTimeout(() => {
  stdout.write("\r\\    ");
}, 700)

setTimeout(() => {
  stdout.write("\r|    ");
}, 900)

setTimeout(() => {
  stdout.write("\r/    ");
}, 1200)

setTimeout(() => {
  stdout.write("\r-    ");
}, 1400)

setTimeout(() => {
  stdout.write("\r\\    ");
}, 1600)

setTimeout(() => {
  stdout.write("\r|    ");
}, 1800)



// returns new line 
setTimeout(() => {
  stdout.write("\n");
}, 2000)




