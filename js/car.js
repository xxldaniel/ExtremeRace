class Car {
    _strIdentifier;
    _htmlElement;
    _numberPosition;

    constructor(strHtmlIdentifier) {
        if (typeof strHtmlIdentifier != "string") {
            console.error("Unable to initialize car object because strHtmlIdentifier is not a string!");
            return;

        }
        this._strIdentifier = strHtmlIdentifier;
    }

    initialize() {
        this._htmlElement = document.getElementById(this._strIdentifier);
    }

    setStartPosition() {
        this._numberPosition = -200;
        this._exposeToHtml();
    }

    drive() {
        this._numberPosition += 25;
        this._exposeToHtml();
    }

    getDrivePosition() {
        return this._numberPosition;
    }

    _exposeToHtml() {
        this._htmlElement.style.left = this._numberPosition + "px";
    }
}