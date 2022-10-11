console.log('hola');

let grupo:number = 10;

type operations = 'subtract'|'add'|'divide'|'multiplie'
type result = number|string

const resolve = (a:number, b:number, operation:operations):result => {
  switch(operation){
    case 'add':
      return a+b;
    case 'divide':
      if(b===0){
        return 'no se puede dividir entre cero pana';
      }
      return a/b;
    case 'multiplie':
      return a*b
    case 'subtract':
      return a-b
    default:
      return 'operacion invalida'
  }
}

console.log(resolve(15, 20, 'add'));
