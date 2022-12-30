function solution1(num) {
  var answer = 0;
  while(num != 1) {
    if(num%2 == 0) {
      num = num/2;
    }
    else{
      num = num*3 + 1;
    }
    ++answer;
  }
  if(answer >= 500) {
    answer = -1;
  }
  return answer;
}

function solution2(n){
    let count = 0;
    while(n !== 1){
        n = n % 2 === 0 ? n / 2 : (n * 3) + 1;
        count++;
    }
    return count >= 500 ? -1 : count;
}

const solution3 = (num,count = 0) => num == 1 ? (count >= 500 ? -1 : count) : solution3(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);