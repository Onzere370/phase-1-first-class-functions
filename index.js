
function receivesAFunction (spy) {
    console.log(receivesAFunction);
  spy()
}
function returnsANamedFunction () {
    const spy = () => { console.log("Spy returns a named function")};
    return spy;
}

function returnsAnAnonymousFunction (){
    return  () => { console.log("The anonymous function.")}
}