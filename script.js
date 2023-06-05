function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

const n = prompt('Enter a positive integer:');
const result = fibonacci(parseInt(n));

alert('The ' + n + 'th Fibonacci number is: ' + result);


module.exports = fibonacci;
