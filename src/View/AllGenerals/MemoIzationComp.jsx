import React from 'react'

export default function MemoIzationComp() {

    let cache = {};
    function multiValues(num) {
        if(num in cache) {
            console.log(cache[num]);
        } else {
            cache[num] = num * 2; 
            console.log(cache[num]);
        }
       
    }

    multiValues(10);  // multiple function call here i.e memoization
    multiValues(20);

    return (
        <div>MemoIzationComp</div>
    )
}
