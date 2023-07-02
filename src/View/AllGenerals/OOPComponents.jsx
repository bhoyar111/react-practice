import React from 'react'

export default function OOPComponents() {
    // class hello { // this is class
    //     ak() {   // this is method 1
    //         console.log("Have a nice day");
    //     }

    //     bk() { // this is method 2
    //         console.log("Nice to meet you");
    //     }
    // }
    // let a = new hello();  // this is object
    // a.ak();   // method 1 call 
    // a.bk();   // method 2 call

    // class student {
    //     constructor(name, age) {  // call object only, no need to call constructor method like a.constructor(), take by default 
    //         this.fName = name;
    //         this.age = age;
    //         console.log("constructor method call");
    //     }

    //     hello() {  // need to call a.hello() 
    //         console.log(`this is prototype method, my name is ${this.fName} and my age are ${this.age}`);
    //     }

    //     static staticMethod() {   // this is static method no need to call with object only class name student.staticMethod
    //         console.log("Static method call"); 
    //     }
    // }
    // let a = new student("Akash", 25);
    // let b = new student("Surendra", 29);
    // let c = new student("Anay", 3);
    // a.hello()
    // b.hello()
    // c.hello()
    // student.staticMethod();



    //  Class inheriteance {access parent class to child class by using extends}

     class employees {  // this is parent class
        constructor(name, age) {
            this.fName = name;
            this.age = age
            console.log(`emp: is ${this.fName} and age are ${this.age}`);
        }
        info() {
            console.log(`EmployeeName: is ${this.fName} and age are ${this.age}`);
        }
    }

    class managers extends employees { // this is chid class
        info() {
            super.info();
            console.log(`ManagerName: is ${this.fName} and age are ${this.age}`);
        }
    }

    let a = new managers("Akash", 29);
    a.info();

  return (
    <div>OOPComponents</div>
  )
}
