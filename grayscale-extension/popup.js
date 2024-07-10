document.addEventListener('DOMContentLoaded', function() {
    const convertButton = document.getElementById('convertButton');
    const resetButton = document.getElementById('resetButton');

    convertButton.addEventListener('click', function() {
        console.log('convert button clicked')
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'convert' });
        });
    });

    resetButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'reset' });
        });
    });
});