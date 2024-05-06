const {app, BrowserWindow} = require('electron')
const path = require('path')

function createBrowserWindow(){
	const win = new BrowserWindow({
		height:800,
		width:1200,
		webPreferences: {
      sandbox:false,
      preload: path.join(__dirname, './preloud.js'),
			devTools:true
    }
	})

	win.loadFile('index.html')
}

app.whenReady().then(createBrowserWindow)