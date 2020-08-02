function solution(str) {
    // curr = str.slice(-1);
    // console.log(curr);
    // str = str - curr;
    // console.log(str);

    // let arr = str.split('');
    // let new_arr = arr.reverse();
    // str = new_arr.join('');
    // console.log(str);

    let final = str.split('').reverse().join('');
    console.log(final);
}

solution('world');
