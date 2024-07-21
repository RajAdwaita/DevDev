function solve() {
    let v = document.getElementById("val").innerHTML.valueOf();
    let a = parseInt(v);
    a += 1;
    document.getElementById("val").innerHTML = String(a);
    console.log(a);


}