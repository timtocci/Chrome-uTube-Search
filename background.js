chrome.omnibox.onInputEntered.addListener(function (text) {
	var createProperties = {
		url : "http://www.youtube.com/results?search_query="
		 + encodeURIComponent(text)
	};
	chrome.tabs.create(createProperties);
});
chrome.omnibox.onInputStarted
.addListener(function () {
	var suggestion = {
		description : "Search YouTube for the query: %s "
	}
	chrome.omnibox.setDefaultSuggestion(suggestion);
});
