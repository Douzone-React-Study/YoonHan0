function solution(arr) {  
    return arr.reduce((el, acc) => acc+=el, 0)/arr.length;
  } 