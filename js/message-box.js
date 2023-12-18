class MessageBox {

    _htmlElement;

    constructor(strHtmlIdentifier) {
        this._strHtmlIdentifier = strHtmlIdentifier;
        this._currentMessage = "Press Enter to start!";
    }

    initialize() {
        this._htmlElement = document.getElementById(this._strHtmlIdentifier);
        this.setStartMessage();
    }

    setStartMessage() {
        this._currentMessage = "Press Enter to start!";
        this._exposeToHtml();
    }

    setGameRunningMessage() {
        this._currentMessage = "Hau' in die Tasten Kriki!";
        this._exposeToHtml();
    }

    setWinnerMessage(nameOfWinner) {
        this._currentMessage = "Der Gewinner ist: " + nameOfWinner + "! Please press ESC to restart the game!";
        this._exposeToHtml();
    }

    _exposeToHtml() {
        this._htmlElement.innerHTML = this._currentMessage;
    }
}