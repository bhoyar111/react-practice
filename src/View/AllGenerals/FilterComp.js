import React from 'react'

export default function FilterComp() {

    let ages = [10, 15, 20, 25, 30, 35, 40];
    
    function adultArr(age) {
        return age >= 18;
    }

    let ak = ages.filter(adultArr);
    // let ak = ages.find(adultArr); // first value print as per condition only one value print
    // let ak = ages.findIndex(adultArr); // index print as per condition
    // let ak = ages.some(adultArr); // anyone value is present as per condition so condition satisfy
    // let ak = ages.every(adultArr); // everyone value is present as per condition so condition satisfy
    console.log(ak);
    
    return (
        <>
            <h1>ArrayObject</h1>
        </>
    )
}
