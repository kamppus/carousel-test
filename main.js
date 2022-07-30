// let n = 10
// let i = 2
// let j = 2

// exit: while (i <= n) {
// 	while (j < i) {
// 		if (i % j == 0) continue exit;
// 		j++
// 	}
// 	console.log(i)
// 	i++
// }



// 2

// let change = {
// 	а: 'b',
// 	ы: 'c',
// 	о: 'p'
// }

// let arr = ['аба', 'фыафы', 'арв', 'Ошййо']

// arr.sort(function (a, b) {
// 	return a.length - b.length
// })
// let sort = []
// for (let i of arr) {
// 	let pi = ''
// 	for (j of i) {
// 		if (change[j.toLowerCase()]) {
// 			j = change[j.toLowerCase()]
// 		}
// 		pi += j
// 	}
// 	sort.push(pi)
// }
// console.log(sort)


// 3
// let arr = ['отто', 'алла', 'влвы', 'аааааа', 'asasssf']
// let pal = []

// exit: for (let i of arr) {
// 	let len = i.length
// 	for (n = 0; n < len; n++) {
// 		if (i[n] != i[len - 1]) continue exit;
// 		len--
// 	}
// 	pal.push(i)
// }
// console.log(pal)

// =========================


// let calculator = {
// 	read() {
// 		this.num = +prompt('1')
// 		this.num2 = +prompt('2')
// 	},
// 	sum() {
// 		return this.num + this.num2
// 	},
// 	mul() {
// 		return this.num * this.num2
// 	}
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
// ===================================


// function Calculator() {
// 	this.read = function () {
// 		this.a = prompt('1')
// 		this.b = prompt('2')
// 	}
// 	this.sum = function () {
// 		return +this.a + +this.b
// 	}
// 	this.mul = function () {
// 		return +this.a * +this.b
// 	}
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());


// =========================================
// function Accumulator(value) {
// 	this.value = value;
// 	this.read = function () {
// 		this.value += +prompt('1')
// 	}
// }



// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений
let sayName = prompt('Введите имя: ')
let persones = {
	user: [
		{ name: 'Kamil', age: 17, address: { city: 'Ufa', index: 45500 } },
		{ name: 'Vadim', age: 26, address: { city: 'Ufa', index: 45500 } },
	],
	getPersonByName() {
		let i = 0
		let len = this.user.length
		for (i; i < len; i++) {
			if (this.user[i].name == sayName) {
				return this.user[i]
			}
			alert('Такого имени не существует')
		}

	}
}

console.log(persones.getPersonByName())