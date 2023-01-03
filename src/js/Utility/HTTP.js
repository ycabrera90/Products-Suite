export class HttpReq {
    constructor(PROTOCOL, SERVER_URL, PORT) {
        this.protocol = PROTOCOL;
        this.serverUrl = SERVER_URL;
        this.port = PORT;
    }
    sendHttpRequest(method, path = "/", data = {}) {
        var rqUrl = '';
        var rsObj = {};
        if (this.port) {
            rqUrl = `${this.protocol}://${this.serverUrl}:${this.port}${path}`;
        }
        else {
            rqUrl = `${this.protocol}://${this.serverUrl}${path}`;
        }
        if (method === 'GET') {
            rsObj = {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        } else {
            rsObj = {
                method: method,
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        }
        return fetch(rqUrl, rsObj)
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    return response.json().then((errData) => {
                        throw new Error('Something went wrong - server-side.');
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                throw new Error('Something went wrong! - client-side');
            });
    }
}

