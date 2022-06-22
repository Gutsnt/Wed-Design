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
/*
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
*/
//#44 al 47 Expresiones Regulares 
//Expresiones

/*
    API webStorage:
        Los dos mecanismos en el almacenamiento web son los siguientes:
            sessionStorage mantiene un área de almacenamiento separada para cada origen que está disponible mientras dure la sesión de la página (mientras el navegador esté abierto, incluyendo recargas de página y restablecimientos).
            localStorage hace lo mismo, pero persiste incluso cuando el navegador se cierre y se reabra.
        Ambos funcionan con clave:valor y tienen dos métodos fundamentales setItem() para asignar una clave:valor y getItem() que recibe como parámetro la clave de la que quieremos obtener el valor
*/
/*
const form = document.getElementById('form')
const keys = document.getElementById('keys')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    sessionStorage.setItem(form.key.value, form.value.value)

    keys.innerHTML +=`<option>${form.key.value}</option>`

    form.reset()

 })

keys.addEventListener('change',() =>{
	document.getElementById('infoValue').textContet = 
	sessionStorage.getItem(keys[keys.selectedIndex].textContent)
})
*/
/*
    API drag & drop:
    Existen dos partes principales en esta API, el objeto a arrastrar y la zona donde vamos a dejarlo
    Para controlar estas acciones tenemos varios eventos de cada una de las partes
        Objeto a arrastrar:
            dragstart: Se dispara al comenzar a arrastrar
            drag: Se dispara mientras arrastramos
            dragend: Se dispara cuando soltamos el objeto
        Zona de destino:
            dragenter: Se dispara cuando el objeto entra en la zona de destino
            dragover: Se dispara cuando el objeto se mueve sobre la zona de destino
            drop: Se dispara cuando soltamos el objeto en la zona de destino
            dragleave: Se dispara cuando el objeto sale de la zona de destino
*/
/*
const smile = document.getElementById('smile')
const dropZone = document.getElementById('drop-zone')

smile.addEventListener('dragstart', () => {
	console.log('start')
})

dropZone.addEventListener('dragover',(e) =>{
	e.preventDefault()
	console.log('a')
})

dropZone.addEventListener('drop',(e) =>{
	e.preventDefault()
	console.log('drop')
})
*/
/*
const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')

pendingTasks.addEventListener('dragstart', (e) => {
	e.dataTransfer.setData('text/plain',e.target.id)
})
pendingTasks.addEventListener('drag',(e) => {
	e.target.classList.add('active')
})
finishedTasks.addEventListener('dragover', (e) =>{
	e.preventDefault()
})
finishedTasks.addEventListener('drop', (e) => {
	e.preventDefault()
	const element = document.getElementById(e.dataTransfer.getData('text'))
	finishedTasks.appendChild(pendingTasks.removeChild(element))
	element.classList.remove('active')

})

*/
/*
const fileInput = document.getElementById('file')
const img = document.getElementById('img')
const text = document.getElementById('text')

fileInput.addEventListener('change', (e) => { 
	 const file = e.target.files[0]
	 const fileReader = new FileReader()
	 fileReader.readAsText(file)
	 fileReader.addEventListener('load', (e) =>{
	 	text.textContent = e.target.result
	 })
})
*/
/*
const fileInput = document.getElementById('file')
const progress = document.getElementById('progress')


fileInput.addEventListener('change', (e) => { 
	 const file = e.target.files[0]
	 const fileReader = new FileReader()
	 fileReader.readAsDataURL(file)

	 fileReader.addEventListener('progress', (e) => {
	 	progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%'
	 })

	 fileReader.addEventListener('loadend', () => {
	 	progress.style.width = '100%'
	 })
})

const root = document.documentElement

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e) => {
        root.style.setProperty('--bar-width', Number.parseInt(e.loaded * 100 / e.total) + '%')
    })

    fileReader.addEventListener('loadend', () => {
        root.style.setProperty('--bar-width', '100%')
    })
})
*/
/*
const fileInput = document.getElementById('file')
const dropZone = document.getElementById('drop-zone')

dropZone.addEventListener('click', () => fileInput.click())

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault()
    dropZone.classList.add('drop-zone--active')
})

dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault()
    dropZone.classList.remove('drop-zone--active')
})

dropZone.addEventListener('drop', (e) => {
    e.preventDefault()
    fileInput.files = e.dataTransfer.files
    // console.log(fileInput.files);
})

fileInput.addEventListener('change', (e) => {
    console.log(fileInput.files);
})
*/
/*
 const indexedDB = window.indexedDB
 const form = document.getElementById('form')
 const tasks = document.getElementById('tasks')

 if(indexedDB && form){
 	let db
 	const request = indexedDB.open('tasksList',)
 	request.onsuccess = () => {1
 		db = request.result
 		console.log('OPEN',db)
 		readData();
 	}

 	request.onupgradeneeded = () => {
 		db = request.result
 		console.log('Create',db)
 		const objectStore = db.createObjectStore('tasks',{
 			keyPath: 'taskTitle'
 		})

 	}

 	request.onerror = (error) =>{
 		console.log('Error',error)
 	}

 	const addData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.add(data)
        readData()
    }

    const getData = (key) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.get(key)

        request.onsuccess = (e) => {
            form.task.value = request.result.taskTitle
            form.priority.value = request.result.taskPriority
            form.button.dataset.action = 'update'
            form.button.textContent = 'Update Task'
        }
    }

    const updateData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.put(data)
        request.onsuccess = () => {
            form.button.dataset.action = 'add'
            form.button.textContent = 'Add Task'
            readData()
        }
    }

    const deleteData = (key) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.delete(key)
        request.onsuccess = () => {
            readData()
        }
    }

    const readData = () => {
        const transaction = db.transaction(['tasks'], 'readonly')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.openCursor()
        const fragment = document.createDocumentFragment()

        request.onsuccess = (e) => {
        	
        	const cursor = e.target.result
        	if(cursor){
        		const taskTitle = document.createElement('P')
        		taskTitle.textContent = cursor.value.taskTitle
        		fragment.appendChild(taskTitle)

        		const taskPriority = document.createElement('P')
        		taskPriority.textContent = cursor.value.taskPriority
        		fragment.appendChild(taskPriority)

        		const taskUpdate = document.createElement('BUTTON')
                taskUpdate.dataset.type = 'update'
                taskUpdate.dataset.key = cursor.key
                taskUpdate.textContent = 'Update'
                fragment.appendChild(taskUpdate)

                const taskDelete = document.createElement('BUTTON')
                taskDelete.textContent = 'Delete'
                taskDelete.dataset.type = 'delete'
                taskDelete.dataset.key = cursor.key
                fragment.appendChild(taskDelete)

                

        		cursor.continue()
        	} else{
        		tasks.textContent = ""
        		tasks.appendChild(fragment)
        	}
        }
    }


 	form.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }

        if (e.target.button.dataset.action == 'add') {
            addData(data)
        } else if (e.target.button.dataset.action == 'update') {
            updateData(data)
        }

        form.reset()
    })

    tasks.addEventListener('click', (e) => {
        if (e.target.dataset.type == 'update') {
            getData(e.target.dataset.key)
        } else if (e.target.dataset.type == 'delete') {
            deleteData(e.target.dataset.key)
        }
    })
 }
 */
/*
 	const video = document.getElementById('video')
// addEventListener('visibilitychange', (e) => {
//     if (document.visibilityState === 'visible') {
//         console.log('PLAY')
//         video.play()
//     } else if (document.visibilityState === 'hidden') {
//         console.log('PAUSE')
//         video.pause()
//     }
// })
	addEventListener('visibilitychange', () 
	=> document.visibilityState === 'visible' ? video.play() : video.pause())
*/
/*
	const alert = document.getElementById('alert')

	addEventListener('online', (e) => {
	    setAlert(1)
	})

	addEventListener('offline', (e) => {
	    setAlert(0)
	})

	const setAlert = (status) => {
	    alert.classList.remove('alert--online')
	    alert.classList.remove('alert--offline')

	    status === 0 ?
	        setTimeout(() => {
	            alert.textContent = "Ups, it seems you're offline"
	            alert.classList.add('alert--offline')
	        }, 100) :
	        setTimeout(() => {
	            alert.textContent = "Great! You're online again!"
	            alert.classList.add('alert--online')
	        }, 100)
	}
*/
/* 
https://developer.mozilla.org/es/docs/Web/API/notification 
icono:
https://www.flaticon.es/icono-gratis/en-todo-el-mundo_814513?term=world&page=1&position=18
*/
/*
const permissions = document.getElementById('permissions')

permissions.addEventListener('click', () => {
    if (Notification.permission !== 'granted') {
        getPermissions()
    } else {
        notify()
    }
})

const getPermissions = () => {
    Notification.requestPermission()
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

const notify = () => {
    const options = {
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        icon: 'world.png',
        data: 'Extra data',
        tag: 'notification demo'
    }
    const notification = new Notification('Hello World', options)

    notification.addEventListener('close', () => console.log('CLOSE'))
    notification.addEventListener('show', () => console.log('SHOW'))

    console.log(notification)
}
*/

/*

const boxes = document.querySelectorAll('.box')

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target.id, 'is intersecting')
        }
    })
}

const options = {
    // root:
    // rootMargin: '-200px'
    threshold: 0.25
}

const observer = new IntersectionObserver(callback, options)
boxes.forEach(element => observer.observe(element))
*/
/*
const images = document.getElementById('images')
const getImages = () => {
    axios('https://picsum.photos/v2/list?page=3&limit=5')
        .then(res => {
            const fragment = document.createDocumentFragment()
            res.data.forEach(element => {
                const newImage = document.createElement('IMG')
                newImage.src = element.download_url
                fragment.appendChild(newImage)
            })
            images.appendChild(fragment)
            setObserver()
        })
}

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            getImages()
        } else {
            //quitar animación
        }
    })
}

const setObserver = () => {
    const options = {
        threshold: 0.5
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(images.lastElementChild)
}

getImages()
*/