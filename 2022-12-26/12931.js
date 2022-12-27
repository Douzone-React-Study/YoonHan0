function solution(n) {
    var answer = 0;
    let numStr = n.toString().split('');

    numStr.forEach(el => answer += parseInt(el));
    return answer;
}