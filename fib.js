function fibs(n) {
	let fib = [];
	let num1 = 0;
	let num2 = 1;
	let sum = 0;

	fib.push(num1);

	for (let i = 1; i < n; i += 1) {
		fib.push(num2);
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
	}
	return fib;
}

function fibsRec(num) {
	if (num < 2) {
		return num;
    } else {
        return fibsRec(num - 1) + fibsRec(num - 2);
    }
}
for (let i = 0; i < 8; i++) {
	console.log(fibsRec(i));
}