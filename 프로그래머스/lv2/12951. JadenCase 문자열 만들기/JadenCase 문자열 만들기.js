function solution(s) {
    return s
    .split(" ")
    .map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1,ele.length).toLowerCase())
    .join(" ")
}