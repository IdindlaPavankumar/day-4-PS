//    given a number find the previous prime of that number
let num = 13
found = true;
while (found) {
    num = num - 1
    fact = 0;
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            fact++
            break;
        }
        if (fact == 0) {
            found = false;
        }
    }
}
console.log(num)
// given a range of numbers find the largest prime in that range
prime_count = 0;
for (i = 1; i <= 20; i++) {
    fact = 0;
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            fact++
            break
        }
    }
    if (fact == 0) {
        console.log(i, 'is prime')
        prime_count++
    }
}