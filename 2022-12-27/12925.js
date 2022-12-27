function solution(s) {
    return s.match(/[0-9]/) ? parseInt(s) : 0 - parseInt(s.slice(0, 1)) ;
}