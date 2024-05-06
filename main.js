const getUsers = async() =>{
	const users = await window.api.getUsers()
	console.log("Результат ответа", users);
}

getUsers()