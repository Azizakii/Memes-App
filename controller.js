class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
        this.api = new API();

        this.view.setTextTopHandler(this.handleTextTop);
        this.view.setTextBottomHandler(this.handleTextBottom);
    }

    init() {
        this.api.fetchMemes()
            .then((memes) => {
                console.log('Загруженные мемы:', memes); // Проверяем массив мемов
                this.model.setMemes(memes); // Сохраняем массив в модель
                const savedMemes = this.model.getMemes(); // Получаем мемы из модели
                this.view.renderSelect(savedMemes); // О
        })
    }

    handleTextTop = (text) => {
        this.model.setUptext(text);
        console.log('Текст сверху:', this.model.getUpText()); 
        this.view.renderTopInput();
    }

    handleTextBottom = (text) => {
        this.model.setDownText(text);
        console.log('Текст снизу:', this.model.getDownText());
        this.view.renderBottomInput();
    }
}