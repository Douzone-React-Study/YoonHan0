
function solution(s) {
    let _s = s.toLowerCase();
    let pCount = 0;
    let yCount = 0;
    _s.split("").forEach(el => {
        el === "p"? pCount+=1 : el === "y" ? yCount+=1 : pCount;
    })
    return pCount === yCount ? true : false
}