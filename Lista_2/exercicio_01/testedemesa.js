/*
let k
let j = 3
a = 0
k = j == 3
j = 2 * k - 7 <= j - 8
a = k % 2 > j && a != 3
k = !(a-j)
a = !a + k
a *= 3 + 6 % 3
k += j <5 && a !=0 && k > 5 || j < a
j = !a *!0
a = !((!j == 1 || k < 2) && k > 5 || j < a)
k = a / a && !j && a || k * 3 > !! j
j = a * 3 + k % 2 - 3 / (0 || a > j)
console.log(j)
*/

let k
console.log("k : ", k)
let j = 3
console.log("j : ", j)
 a = 0
console.log("a : ", a)
k = j == 3;
console.log("k : ", k)
j = 2 * k - 7 <= j - 8;
console.log("j : ", j)
a = k % 2 > j && a != 3;
console.log("a : ", a)
k = !(a - j);
console.log("k : ", k)
a = !a + k;
console.log("a : ", a)

a *= 3 + 6 % 3;
console.log("a : ", a)
k += j < 5 &&  a != 0 && k > 5 || j < a;
console.log("k : ", k)

console.log('')
j = !a * !0;
console.log("j : ", j)
a = !((!j == 1 || k < 2)) //&& a < 3);
console.log("a : ", a)
k = a / a && !j && a || k * 3 > !!j;
console.log("k : ", k)
j = a * 3 + k % 2 - 3 / (0 || a > j);
console.log("j : ", j)