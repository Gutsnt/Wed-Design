/*class Book{

	constructor(title,author,year,gender){
		this.title = title;
		this.author = author;
		this.year = year;
		this.gender = gender;
	}

	bookInfo(){
		return `${title} escrito por ${author} 
		del genero ${gender} en el año ${year}`
	}

}

	let  books = []

	while (books.length < 3){
		let title = prompt(`Introduce el titulo del libro`);
		let author = prompt(`Introduce el author del libro`);
		let year = prompt(`Introduce el year del libro`);
		let gender = prompt(`Introduce el gender del libro`).toLowerCase();

		if( title != `` && author != `` && year.length == 4 &&
			(gender == `accion` || gender == `terror`)){
			
			books.push(new Book(title,author,year,gender))
		}

	}

	const showAllBooks = () =>{
		console.log(books);
	}

	showAllBooks();
*/
 const days = ['Lunes','Martes','Miercoles','Jueves','Viernes']

 const title = document.getElementById('title')
 const daysList = document.getElementById('daysList')
 const daysSelect = document.getElementById('daysSelect')

 const itemList = document.createElement('LI')

 itemList.textContent = 'Lunes'
 daysList.appendChild(itemList)

 title.innerHTML = '<span>Practica<span>'
 console.log(itemList);

 const fragment = document.createDocumentFragment()

 /*for (const day of days){
 	const itemList = document.createElement('LI')
	itemList.textContent = day

	fragment.appendChild(itemList)
 }
*/
 for (const day of days){
 	const selecItem = document.createElement('OPTION')
 	selecItem.setAttribute('value',day.toLowerCase())
 	selecItem.textContent = day
 	fragment.appendChild(selecItem)

 }
 daysSelect.appendChild(fragment)
 g

