const time = new Date().getTime();
var gone = 0;
while (gone < 10) {
    gone = Math.floor((new Date().getTime() - time) / 1000);
    console.clear();
    console.log(`Залишилось: ${10 - gone} секунд`);
}
console.log("10 секунд пройшли");
