// let add = 3 + [];
// console.log(add);

// let obj = {};
// console.log(obj);

console.log('Hello TypeScript!');

// types:
// - boolean
// - number max:2^53
//   - bigint
// - string
// - any / unknown

function squareOf(n: number) {
    return n * n;
}
console.log(squareOf(2));
console.log(squareOf(1.1));
// console.log(squareOf('z'));

let a: any = 666; // any
let b: any = ['danger']; // any
let c = a + b; // any

// function add(a: unknown, b: unknown) {
//     return a + b;
// }
// console.log(add(2, 3));

console.log({ x: Symbol('z') });

let d = {
    b: 'x',
};
console.log(d.b);
