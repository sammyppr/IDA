const {app, BrowserWindow} = require('electron/main')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 200,
        height: 100,
        transparent: true,
        frame: false,
        resizable: false,
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