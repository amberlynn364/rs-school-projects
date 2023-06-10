import { LoaderOptions, GetResp } from '../../types/index';
class Loader {
    constructor(private baseLink: string, private options: LoaderOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: GetResp,
        callback = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: LoaderOptions | object, endpoint: string): string {
        const urlOptions: LoaderOptions = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string): void => {
            url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });

        return url.slice(0, -1);
    }

    protected load<T>(method: string, endpoint: string, callback: (data: T) => void, options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response): Promise<T> => res.json())
            .then((data: T): void => callback(data))
            .catch((err: string): void => console.error(err));
    }
}

export default Loader;
