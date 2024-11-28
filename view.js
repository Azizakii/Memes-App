class View {
    constructor() {
        this.memSelectNode = document.querySelector('#form-select-mem');
        this.showMem = document.querySelector('#mem-render');

        this.textTopInputNode = document.querySelector('#text-top-input');
        this.textBottomInputNode = document.querySelector('#text-bottom-input');
        
        this.textTopOnImg = document.querySelector('.textTop-on-img');
        this.textBottomOnImg = document.querySelector('.textBottom-on-img');

        this.memSelectNode.addEventListener('change', 
            (event) => {
                const memUrl = event.target.value;
                this._renderPreview(memUrl);
            }
        )

    }

    renderSelect(memes) {
        if (!Array.isArray(memes) || memes.length === 0) {
            console.error('Массив мемов пуст или некорректный:', memes);
            return;
        }

        this.memSelectNode.innerHTML = '<option>Выбери мем</option>'; // Добавляем placeholder

        memes.forEach(mem => {
            const option = document.createElement('option');
            option.value = mem.url;
            option.textContent = mem.name;
            this.memSelectNode.appendChild(option);
        });
    }

    _renderPreview(memUrl) {
        if(memUrl) {
            this.showMem.innerHTML = `<img src="${memUrl}" alt="Мем" id = "img" width = "450px" heigth = "400px">`;
        } else { 
            this.showMem.innerText = 'Мем не выбран.'
        }
    }

    renderTopInput() {
        this. _clearTextTopOnImg();
        const textTop = this.textTopInputNode.value;
        const p = document.createElement('p');
        p.textContent = textTop;
        p.classList.add("text-top");
        this.showMem.appendChild(p);
    }

    renderBottomInput() {
        this._clearTextBottomOnImg();
        let textBottom = this.textBottomInputNode.value;
        const p = document.createElement('p');
        p.textContent= textBottom;
        p.classList.add("text-bottom");
        this.showMem.appendChild(p);
    }

    setTextTopHandler(handler) {
        this.textTopInputNode.addEventListener('input', () => {
            const text = this.textTopInputNode.value.trim();
            handler(text); // Передаём текст в Controller
        });
    }

    setTextBottomHandler(handler) {
        this.textBottomInputNode.addEventListener('input', () => {
            const text = this.textBottomInputNode.value.trim();
            handler(text); // Передаём текст в Controller
        });
    }

    _clearTextTopOnImg() {
        const existingText = this.textTopOnImg.querySelector('.text-top');
        if (existingText) {
            existingText.remove();
        }
    }
    
    _clearTextBottomOnImg() {
        const existingText = this.textBottomOnImg.querySelector('.text-bottom');
        if (existingText) {
            existingText.remove();
        }
    }

}