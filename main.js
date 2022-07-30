
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



// let sayName = prompt('Введите имя: ')
// let persones = {
// 	user: [
// 		{ name: 'Kamil', age: 17, address: { city: 'Ufa', index: 45500 } },
// 		{ name: 'Vadim', age: 26, address: { city: 'Ufa', index: 45500 } },
// 	],
// 	getPersonByName() {
// 		let i = 0
// 		let len = this.user.length
// 		for (i; i < len; i++) {
// 			if (this.user[i].name == sayName) {
// 				return this.user[i]
// 			}
// 			alert('Такого имени не существует')
// 		}

// 	}
// }

// console.log(persones.getPersonByName())