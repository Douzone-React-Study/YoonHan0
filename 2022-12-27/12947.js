function solution(x) {
    let arr = x.toString().split("").map(el => el = parseInt(el));
    return x % arr.reduce((el, acc) => acc += el, 0) === 0 ? true : false;
} 