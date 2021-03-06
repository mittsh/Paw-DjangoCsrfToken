// Grabs the Django CSRF token from the cookie csrftoken, returns as dynamic value
var CsrfToken = function() {
    this.evaluate = function(context) {
        var request = context.getCurrentRequest(),
            headers = request.getHeaders(),
            cookies = headers['Cookie'].split(';'),
            token = null;

        for (var index in cookies) {
            if (cookies[index].indexOf('csrftoken') == 0) {
                token = cookies[index].split('=')[1]
            }
        }

        return token;
    }
}

CsrfToken.identifier = "com.thenounproject.DjangoCsrfToken";
CsrfToken.title = "Django CSRF Token";

registerDynamicValueClass(CsrfToken)