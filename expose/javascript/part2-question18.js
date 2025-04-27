function myfunc(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    return time;
}

let time = setInterval(() => myfunc(),1000);
