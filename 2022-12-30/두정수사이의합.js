function solution(a, b) {
    if(a === b) {
        return a;
    }
    let minNum = Math.min(a, b);
    let maxNum = Math.max(a, b);
    let result = 0;
    for(let i = minNum; i <= maxNum; i++) {
        result += i;
    }
    return result;
}
function solution1(a, b) {
    if(a === b) {
        return a;
    }
    let result = 0;
    for(let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        result += i;
    }
    return result;
}
function solution2(a, b){
    return (a+b)*(Math.abs(b-a)+1)/2;
}