'use strict';
chrome.browserAction.onClicked.addListener(function(tab) { 
    chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function(tabs) {
        // Get url and append #top
        var url = tabs[0].url + "#top";
        // Shoot url into browser
        chrome.tabs.update(tab.id, {url: url});
        // Done
      });
});


