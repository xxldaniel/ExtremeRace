class Game {
    constructor() {
        this._isRunning = false;
        this._porsche = new Car("porsche");
        this._truck = new Car("truck");
        this._messageBox = new MessageBox("message-box");
        this._windowWidth = window.screenX;
    }

    initialize() {
        this._porsche.initialize();
        this._truck.initialize();
        this._messageBox.initialize();

        this._porsche.setStartPosition();
        this._truck.setStartPosition();
    }

    mouseClick() {
        if (this._isRunning === true) {
            this._truck.drive();
            this._checkIfSomeOneWinned();
        }

    }

    keyboardEnterPressed() {
        if (this._isRunning === false) {
            this._isRunning = true;
            this._messageBox.setGameRunningMessage();
        }
    }

    keyboardEscapePressed() {
        this._isRunning = false;
        this._porsche.setStartPosition();
        this._truck.setStartPosition();
        this._messageBox.setStartMessage();
    }

    keyboardPress() {
        if (this._isRunning === true) {
            this._porsche.drive();
            this._checkIfSomeOneWinned();
        }
    }

    _checkIfSomeOneWinned() {
        const porschePosition = this._porsche.getDrivePosition();
        if (porschePosition > this._windowWidth) {
            this._messageBox.setWinnerMessage("Porsche");
            this._isRunning = false;
            return;
        }

        const truckPosition = this._truck.getDrivePosition();
        if (truckPosition > this._windowWidth) {
            this._messageBox.setWinnerMessage("Truck");
            this._isRunning = false;
            return;
        }
    }
}