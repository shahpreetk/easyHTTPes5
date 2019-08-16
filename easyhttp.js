function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// MAKE AN HTTP GET REQUEST
easyHTTP.prototype.get = function (url,callback) {
    this.http.open('GET', url, true);

    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(self.http.responseText);
        }
    }

    this.http.send();
}

// MAKE AN HTTP POST REQUEST

// MAKE AN HTTP PUT REQUEST

// MAKE AN HTTP DELETE REQUEST