

export function whatsMyType<T>( argument: T ): T{

    return argument;
}


let aImString = whatsMyType<string>('Hola Mundo');
let aImNumber = whatsMyType<number>(100);
let aImArraay = whatsMyType<number[]>([1,2,3,4,5]);



console.log( aImString.split(' '));
console.log( aImNumber.toFixed());
console.log( aImArraay.includes(1));