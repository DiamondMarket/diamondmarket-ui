export class User {
    userName: string;
    password: string;
    message: string;
    provider: string;
    image: Blob;
    email: string;


    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}