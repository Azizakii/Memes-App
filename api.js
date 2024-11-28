class API {
    constructor() {
        this.baseUlr = 'https://api.imgflip.com';
    }

    fetchMemes() {
        return fetch(`${this.baseUlr}/get_memes`)
            .then((response) => response.json())
            .then((data) => {
                if(data.success) {
                    return data.data.memes;
                } else {
                    throw new Error('Ошибка загрузки мемов');
                }
            })
    }
}