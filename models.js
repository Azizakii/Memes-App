class Model {
    constructor() {
        this.memes = [];
        this.upText = [];
        this.down = [];
    }

    setUptext(upText) {
        this.upText = upText;
    }

    getUpText() {
        return this.upText
    }

    setDownText(downText) {
        this.downText = downText
    }

    getDownText() {
        return this.downText;
    }

    setMemes(memes) {
        this.memes = memes;
    }

    getMemes() {
        return this.memes;
    }


}