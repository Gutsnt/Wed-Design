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
/*
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

 for (const day of days){
 	const itemList = document.createElement('LI')
	itemList.textContent = day

	fragment.appendChild(itemList)
 }

 for (const day of days){
 	const selecItem = document.createElement('OPTION')
 	selecItem.setAttribute('value',day.toLowerCase())
 	selecItem.textContent = day
 	fragment.appendChild(selecItem)

 }
 daysSelect.appendChild(fragment)
 
*/
/*
const parent = document.getElementById('parent')

//console.log(parent.parentElement);
console.log(parent.firstElementChild);
console.log(parent.hasChildNodes());
*/
/*
const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "i'm a new element"
*/
//list.children[0].insertAdjacentElement('beforebegin',newElement)
//list.children[0].insertAdjacentElement('afterend',newElement)
//list.insertBefore(newElement, list.children[0])

//list.children[1].insertAdjacentHTML('afterend','<li>Elemento con html</li>')
//list.children[1].insertAdjacentText('afterend','<li>Elemento con html</li>')
//list.replaceChild(newElement,list.children[0])

//list.children[0].before(newElement)
//list.prepend(newElement)
//list.append(newElement)
//list.children[0].after(newElement)
//list.children[1].replaceWith(newElement)

//list.after(list.cloneNode(true))
//list.remove()
//list.remove(list.children[1])

/*
console.log()
console.dir()
connsole.error()
console.table()
*/
/*
location.href()
location.protocol()
location.host()
location.pathname()
location.hash()
location.reload()
*/
/*
Day = it has a chingon of metods
*/
//AJAX
/*
const button = document.getElementById('button')

button.addEventListener('click',() =>{
	let xhr
	if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
	else xhr = new ActiveObject("Microsoft.XMLHttpRequest")

	xhr.open('GET',
		'archivo o url de la peticion ')

	xhr.addEventListener('load',(data) => {
		const dataJSON = JSON.parse(data.targe.response)

		const list = document.getElementById('list')
			for (const userInfor of dataJSON){
				const listItem = document.createElement('LI')
				listItem.textContent = `${userInfor.id} - 
				${userInfor.name}`
				list.appendChild(listItem)
			}
		}
	})

	xhr.send()
})
*/
/*
JAVAX III
const form = document.getElementById('form')
form.addEventListener('submit',(e) =>{
	e.preventDefault()
	sendData(form)
})

const sendData = (data) => {
	let xhr 
	if(window.XMLHttpRequest) xhr = new XMLHttpRequest
	else xhr = new ActiveObject("Microsoft.XMLHttpRequest")

	xhr.open('POST','archivo_php')
	const formData = new formData(data)
	xhr.send(formData)


}
*/

//CallBacks
/*
Funcion que se ejecuta a traves de otra funcion
No son asincronos
*/

//Promesas

//Objeto con dos ComeBacks internos
/*
const users = [{id: 1, name: 'Dorian' },{id: 2, name: 'Laura' },
				{id: 3, name: 'Carlos' }]
const emails = [{id: 1, email: 'dorian@gmail.com' },
				{id: 2, email: 'dorian@gmail.com' }]

const getUser= (id) => {
	const user = users.find(user => user.id == id )
	return promise = new Promise((resolve,reject)=>{
		if (!user) reject(`Doesn't exist an user with id ${id}`)
		else resolve(user)
	})
	
}

const getEmail = (user) => {
	const email = emails.find(email => email.id == user.id)

	return promise = new Promise((resolve,reject)=>{
		if (!email) reject(`${user.name} hasn't email `)
		else resolve({
			id: user.id,
			name: user.name,
			email: email.email 
		})
	})
}

getUser(3)
	.then(user => getEmail(user))
	.then(res=>console.log(res))
	.catch(err =>console.log(err))

getUser(2)
	.then(getEmail)
	.then(console.log)
	.catch(console.log)
*/

//Fetch I
/*
if (window.fetch != undefined) console.log('FETCH OK')
	else console.log('INTERNET EXPORE')

const button = document.getElementById('button')

button.addEventListener('click',()=>{
	fetch('Ruta-Peticion')
	.then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
	.then(res => res.json())
	.then(res => {
		

})
*/
//Fetch II
/*

	console.log(newPost)
	console.log(JSON.stringify(newPost))

const button = document.getElementById('button')

button.addEventListener('click',()=>{
	const newPost ={
		title: 'A new post',
		body: 'Lorem ipsum dolor sit amet consectetur adipicing',
		userId:1
	}

	fetch('Ruta',{
		method:'POST',
		body:JSON.stringift(newPost),
		headers:{
			"Content-type": "application/json"
		}
	})
	.then(res => res.json())
	.then(data => console.log(data))
}) 
*/

//Fetch III
/*
const buttonImg = document.getElementById('button-img')
const buttonPdf = document.getElementById('button-pdf')

buttonImg.addEventListener('click',() => { 
	fetch('images.png')
	.then(res => res.blob())
	.then(img => {
		document.getElementById('img').src = URL.createObjectURL(img)
	})
})

buttonPdf.addEventListener('click',() => { 
	fetch('demo.pdf')
	.then(res => res.blob())
	.then(pdf => {
		document.getElementById('pdf').href = URL.createObjectURL(pdf)
	})
})
*/
//Async / Await
/*
const getName = async () => {
	return new Promise ((resolve, reject) => {
		setTimeout(()=>{
			resolve('Dorian')
		},1500)
	})
}

const sayHello = async () => {
	const name = await getName()
	return `Hello ${name}`
}

sayHello().then(res => console.log(res ))

const users = [{id: 1, name: 'Dorian' },{id: 2, name: 'Laura' },
				{id: 3, name: 'Carlos' }]
const emails = [{id: 1, email: 'dorian@gmail.com' },
				{id: 2, email: 'dorian@gmail.com' }]

const getUser= async (id) => {
	const user = users.find(user => user.id == id )
		if (!user) throw new Error(`Doesn't exist an user with id ${id}`)
		else return (user)
	
}

const getEmail = async (user) => {
	const email = emails.find(email => email.id == user.id)
		if (!email) throw new Error(`${user.name} hasn't email `)
		else return({
			id: user.id,
			name: user.name,
			email: email.email 
		})
}
const getInfo = async (id) => {
	try {
	const user = await getUser(id)
	const res = await getEmail(user)
	return `${user.name} email es ${res.email}`
	}catch(e){
		console.log(e)
	} 
}
getInfo(3).then( res => console.log(res))
*/

//Axios
/*
const button = document.getElementById('button')

button.addEventListener('click', () => {
	axios({
		method:'GET'
		url:'url-aqui'
	}).then(res => {
		const list = document.getElementById('list')
		const fragment = document.createDocumentFragment()
		for (const userInfo of res.data){
			cost listItem = document.createElement('LI')
			listItem.textContent = `${userInfo.id} - ${userInfo.name}`
			fragment.appendChild(listItem)
		}
	list.appendChild(fragment)	
	}).catch(e => console.log(e))
})
*/
/*
const text = document.getElementById('title').textContent

const regEx = /axios/gi

console.log(regEx.test(text))
*/
const form = document.getElementById('form')
const button = document.getElementById('submitButton')

const name = document.getElementById('name')
const email = document.getElementById('email')
const gender = document.getElementById('gender')
const terms = document.getElementById('terms')

const formIsValid = {
	name: false,
	email: false,
	gender: false,
	terms: false
}

form.addEventListener('submit', (e) => {
	e.preventDefault()
	validateForm()
})
name.addEventListener('change', (e) => {
	if(e.target.value.trim().length > 0) formIsValid.name = true
})

email.addEventListener('change', (e) => {
	if(e.target.value.trim().length > 0) formIsValid.email = true
})

gender.addEventListener('change', (e) => {
	console.log(e.target.checked)
	if(e.target.checked == true) formIsValid.gender = true
})

terms.addEventListener('change', (e) => {
	formIsValid.terms = e.target.checked
	e.target.checked ? button.removeAttribute('disabled') : button.setAttribute('disabled', true)

})

const validateForm = () => {
	const formValues = Object.values(formIsValid)
	const valid = formValues.findIndex(value => value == false)
	if (valid == -1) form.submit()
	else alert('Form invalid')
}
