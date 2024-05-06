const {contextBridge} = require('electron')
const {createConnection} = require('mysql2/promise')

async function connectClient(){
 const client = await createConnection({
	host:'localhost',
	database:'electron_db',
	user:'root',
	password:'root'
 })
 await client.connect()
 return client
}

const getUsers = async () => {
	return new Promise(async(resolve)=>{
		let client = await connectClient()
		try {
			let [users] = await client.query('SELECT * FROM users');
			console.log("Что тут у нас", users);
			resolve(users) 
		} catch (error) {
			console.error('Ошибка:', error);
		} finally {
			client.end();
		}
	})
}

contextBridge.exposeInMainWorld('api',{
	getUsers
})