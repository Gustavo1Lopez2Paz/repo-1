let num = prompt("Ingrese un numero del 1 al 3");
let v = prompt("Ingrese un valor");

let val;
switch (num) {
    case 1:
        val = 100*v;
        console.log(val);
        break;
        case 2:
        val = Math.pow(100,v);
        console.log(val);
        break;
        case 3:
        val = 100/v;
        console.log(val);
        break;

    default:
        val = 0;
        console.log(val);
        break;
}