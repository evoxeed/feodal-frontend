export default class Server {
    constructor(token) {
        this.token = token || null;
        this.hash = null;
        this.mapHash = null;
        this.unitsHash = null;
    }

    async send(params = {}) {
        if(this.token) {
            params.token = this.token;
        }
        const query = Object.keys(params).map(key =>
            `${key}=${params[key]}`
        ).join("&");
        const responce = await fetch(`http://feodal/api/?${query}`);
        const answer = await responce.json();
        return answer?.result === 'ok' ? answer?.data : null;
    }

    /*****************/
    /***** User ******/
    /*****************/     
    async login(login, password) {
        if(login && password) {
            const data = await this.send({ 
                method: 'login', 
                login, password 
            });
            if(data?.token) {
                this.token = data.token;
                window.localStorage.setItem('token', this.token);
                delete data.token;
                return data;
            } else {
                return null;
            }
        }
    }

    async logout() {
        await this.send({ 
            method: 'logout', 
            token : this.token 
        });
        if(this.token) {
            window.localStorage.removeItem('token');
            this.token = null;
            return true;
        }
    }

    async registration(name, login, password) {
        return await this.send({ 
            method: 'registration', 
            name, 
            login, 
            password 
        });
    }

    async getLoggedUsers() {
        const data = await this.send({ 
            method: 'getLoggedUsers',
            token: this.token
        });
        return data;
    }

    /*****************/
    /***** Chat ******/
    /*****************/
    async sendMessageAll(message) {
        await this.send({ 
            method: 'sendMessageAll', 
            token: this.token,
            message 
        });
    }

    async sendMessageTo(message, messageTo) {
        return await this.send({ 
            method: 'sendMessageTo', 
            token : this.token,
            message, 
            messageTo 
        });
    }

    async getMessages() {
        const data = await this.send({ 
            method: 'getMessages',
            token: this.token,
            hash: this.hash
        });
        if(data?.hash) {
            this.hash = data.hash;
        }
        if(data) {
            return data.messages;            
        }
    }

    /*****************/
    /***** Game ******/
    /*****************/
    async getScene() {
        const data = await this.send({ 
            method: 'getScene',
            mapHash: this.mapHash,
            unitsHash: this.unitsHash,
            token: this.token
        });
        if(data?.mapHash) {
            this.mapHash = data.mapHash;
            delete data.mapHash;
        }
        if(data?.unitsHash) {
            this.unitsHash = data.unitsHash;
            delete data.unitsHash;
        }
        return data;
    }

    async getMap() {
        const data = await this.send({ 
            method: 'getMap',
            token: this.token
        });
        return data.map;
    }

    async getUnitsTypes() {
        const data = await this.send({
            method: 'getUnitsTypes',
            token: this.token
        });
        return data;
    }

    /******************/
    /***** Gamer ******/
    /******************/
    async getCastle() {
        const data = await this.send({ 
            method: 'getCastle',
            token: this.token
        });
        return data
    }
}
