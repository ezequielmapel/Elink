
export class Message {
    author: string;
    imageUrl: string;
    message: string;
    hour: string;
    me: boolean = false;

    constructor(userName: string, imageUrl: string, message: string, me: boolean = false) {
        this.author = userName;
        this.imageUrl = imageUrl;
        this.message = message;
        this.hour = this.calculateHour();
        this.me = me;
    }

    calculateHour() {
        const date = new Date();
        // Se seconds <= 9, então acrescente um 0 a frente (01,02...)
        return `${date.getHours()}:${date.getMinutes()}:${ date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()}`;
    }

}
