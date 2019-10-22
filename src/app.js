//import './assets/css/app.css'
import 'css/app.css'
//import './assets/sass/app.scss'
//import './assets/less/app.less'

//import * as api from './app/api/'
import * as api from '@/app/api/'

console.log('it works!')

let name = "Clément";
console.log(name);

let options = {
	something: true,
	another: false
}

options = {
	...options,
	more: true
}

console.log(options);

if (process.env.NODE_ENV === 'production') {
	console.log('PRODUCTION MODE')
}

console.log(process.env.API_URL)

api.getPosts().then((response) => {
	console.log(response)
})