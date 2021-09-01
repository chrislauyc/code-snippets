const foo=()=>{
    console.log("foo")
};

const bar=(callback)=>{
    callback();
    console.log("bar");
}

bar(foo);
//foo
//bar