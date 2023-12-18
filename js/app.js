
var game = new Game();

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded')
    game.initialize();

});

document.addEventListener('click', () => {
    console.log("click");
    game.mouseClick();
});

document.addEventListener('keydown', (keyPressEvent) => {
    console.log('keypress', keyPressEvent);
    if (keyPressEvent.key === "Enter") {
        game.keyboardEnterPressed();
        return;
    }

    if (keyPressEvent.key === "Escape") {
        game.keyboardEscapePressed();
        return;
    }


    game.keyboardPress();
});