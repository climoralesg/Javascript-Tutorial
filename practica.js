let x=10;
//console.log("hola mundo");
letTest();

function letTest() {
   // console.log("X "+x);
    let x = 31;
    let y=40;

    const fn3=(x,y)=>{
        console.log("x en arrow "+x);
        console.log("y en arrow "+y);
    }

    const variable=fn3(x,y);
    if (true) {
        //console.log("let test 1 "+x);  // 71
        let x = 71;  // variable diferente
        console.log("let test 2 "+x);  // 71
    }
    console.log("let test 3 "+x);  // 31
  }
  
