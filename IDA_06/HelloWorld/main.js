const {app, BrowserWindow} = require('electron/main')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    })


    win.loadFile('index.html')

    win.on('closed', ()=>{
        app.quit();
    })
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', ()=> {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', ()=> {
    if(ProcessingInstruction.platform !== 'darwin') {
        app.quit()
    }
})