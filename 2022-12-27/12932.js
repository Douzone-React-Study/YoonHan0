function solution(n) {
    let arr = n.toString().split("").reverse();
    let _arr = [];
    for(let i = 0; i < arr.length; i++) {
        _arr[i] = parseInt(arr[i]);
    }
    return _arr;
}