//Block-scoped Constructs let

//var: biến toàn cục or biến trong phạm vi 1 hàm
//let: phạm vi 1 khối
var a = 12;
var b = 30;
if(a<b)
{
    let tmp = a;
    a = b;
    b = tmp;
}

document.write("a:" + a);
document.write("b:" + b);
document.write("tmp:" + tmp);