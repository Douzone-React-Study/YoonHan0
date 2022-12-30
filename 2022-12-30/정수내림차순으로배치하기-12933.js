function solution1(n) {
    var answer = 0
    var temp = "";
    n = n.toString();           // 입력받은 정수 n 문자열로 변환
    var arr = new Array(n.length);  // 문자열 n의 길이를 크기로 하는 arr 생성

    for(let i=0; i<arr.length; i++) {
        arr[i] = n.charAt(i);       // index 값으로 하나씩 접근해서 arr에 초기화
    }
    arr.sort();     // 기본 (오름차순) 정렬
    arr.reverse();  // 내림차순 정렬

    for(let i =0; i<arr.length; i++) {  // temp에 정렬된 arr 쌓아줌
        temp += arr[i];
    }
    answer = parseInt(temp);        // int로 변환
    return answer;
}

function solution2(n) {
    return Number(n.toString().split("").sort((a,b) => b - a).join(''));
}