const remote = require('electron').remote;

document.getElementsByClassName("componia-close")[0].addEventListener('click', (e) => {
    remote.getCurrentWindow().close();
});

document.getElementsByClassName("componia-maximize")[0].addEventListener('click', (e) => {
    let win = remote.getCurrentWindow()

    if(win.isMaximized())
        win.unmaximize();
    else
        win.maximize();
});

document.getElementsByClassName("componia-minimize")[0].addEventListener('click', (e) => {
    remote.getCurrentWindow().minimize();
});