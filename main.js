/* Facebook Hashtag Remover
 * Author: 	Samuel Jackson (slj11@aber.ac.uk)
 * Date: 	28/3/13
 * Description: A Google Chrome extension to remove annoying Hashtags from Facebook.
 * This script will currently remove hashtags from both news feed and timeline posts. 
 */

//cycle through posts, remove with regex
function removeHashtags(obj) {
	obj.each(function() {
		var text = $(this).html().replace(/#\w+/g, "");
		$(this).html(text);
	});	
}

//Bind change event to the DOM
$(document).ready(function() {
	//remove hashtags from the home stream on load
	var content = $('#home_stream').find('.userContent');
	removeHashtags(content);

	//remove hashtags from someone's timeline posts on load
	content = $('#timeline_tab_content').find('.userContent');
	removeHashtags(content);

	//remove hashtags from the page as it changes dynamically
	$('#content').bind('DOMNodeInserted', function(evt) {
		var content = $(evt.target).find('.userContent');
		removeHashtags(content);
	});
});