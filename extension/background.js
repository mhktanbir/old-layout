var useragent = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36"; // Chrome
var enabled = true;

function rewriteUserAgentHeader(o) {
  for (var header of o.requestHeaders) {
    if (enabled && header.name.toLowerCase() === "user-agent") {
      header.value = useragent;
    }
  }
  return {
    "requestHeaders": o.requestHeaders
  };
}
chrome.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  {urls: ["*://*.facebook.com/*"]},
  ["blocking", "requestHeaders"]
);
function getStatus() {
  return enabled;
}
function enable() {
  enabled = true;
}
function disable() {
  enabled = false;
}
