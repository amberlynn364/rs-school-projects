import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: 'de80aa53ea4a4fa0a7fc129ded506c8a',
        });
    }
}

export default AppLoader;
