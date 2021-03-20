const { app, BrowserWindow, screen } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        title: "Lainan Air",
        width: screen.getPrimaryDisplay().size.width/1.2,
        minWidth: 640,
        height: screen.getPrimaryDisplay().size.height/1.2,
        minHeight: 360,
        backgroundColor: "#87CEFA",
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile("views/index.html");
    win.removeMenu();

};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    };
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    };
});