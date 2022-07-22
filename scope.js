//ex 1
(function foo(){
    let x = "foo";
    if(x == "foo"){
        let y = "bar";
        console.log(x, y);
    }
    //console.log(x, y); returns reference exception becasue y not declared in scope
    console.log(x);
})();

//ex 2
function doSomething() {
    console.log(a); //a undeclared, reference exception
    console.log(foo());
    let a = 1;
    function foo() {
      return 2;
    }
  }
  doSomething();