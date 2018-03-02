/* TOOLTIP 01 */
$(document).ready(function() {

	//Select all anchor tag with rel set to tooltip
	$('a[rel=tooltip]').mouseover(function(e) {
		
		//Grab the title attribute's value and assign it to a variable
		var tip = $(this).attr('title');	
		
		//Remove the title attribute's to avoid the native tooltip from the browser
		$(this).attr('title','');
		
		//Append the tooltip template and its value
		$(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">' + tip + '</div><div class="tipFooter"></div></div>');		
		
		//Set the X and Y axis of the tooltip
		$('#tooltip').css('top', e.pageY - 50 );
		$('#tooltip').css('left', e.pageX - 35 );
	
	}).mousemove(function(e) {
	
		//Keep changing the X and Y axis for the tooltip, thus, the tooltip move along with the mouse
		$('#tooltip').css('top', e.pageY - 50 );
		$('#tooltip').css('left', e.pageX - 35 );
		
	}).mouseout(function() {
	
		//Put back the title attribute's value
		$(this).attr('title',$('.tipBody').html());
	
		//Remove the appended tooltip template
		$(this).children('div#tooltip').remove();
		
	});

});

/* TOOLTIP 02 */

$(document).ready(function() {

	//Select all anchor tag with rel set to tooltip
	$('a[rel=tooltip02]').mouseover(function(e) {
		
		//Grab the title attribute's value and assign it to a variable
		var tip = $(this).attr('title');	
		
		//Remove the title attribute's to avoid the native tooltip from the browser
		$(this).attr('title','');
		
		//Append the tooltip template and its value
		$(this).append('<div id="tooltip02"><div class="tipHeader"></div><div class="tipBody">' + tip + '</div><div class="tipFooter"></div></div>');		
		
		//Set the X and Y axis of the tooltip
		$('#tooltip02').css('top', e.pageY - 50 );
		$('#tooltip02').css('left', e.pageX - 75 );
		
	}).mousemove(function(e) {
	
		//Keep changing the X and Y axis for the tooltip, thus, the tooltip move along with the mouse
		$('#tooltip02').css('top', e.pageY - 50 );
		$('#tooltip02').css('left', e.pageX - 75 );
		
	}).mouseout(function() {
	
		//Put back the title attribute's value
		$(this).attr('title',$('.tipBody').html());
	
		//Remove the appended tooltip template
		$(this).children('div#tooltip02').remove();
		
	});

});

/* TOOLTIP 03 */

$(document).ready(function() {

	//Select all anchor tag with rel set to tooltip
	$('a[rel=tooltip03]').mouseover(function(e) {
		
		//Grab the title attribute's value and assign it to a variable
		var tip = $(this).attr('title');	
		
		//Remove the title attribute's to avoid the native tooltip from the browser
		$(this).attr('title','');
		
		//Append the tooltip template and its value
		$(this).append('<div id="tooltip03"><div class="tipHeader"></div><div class="tipBody">' + tip + '</div><div class="tipFooter"></div></div>');		
		
		//Set the X and Y axis of the tooltip
		$('#tooltip03').css('top', e.pageY - 50 );
		$('#tooltip03').css('left', e.pageX - 110 );
		
	}).mousemove(function(e) {
	
		//Keep changing the X and Y axis for the tooltip, thus, the tooltip move along with the mouse
		$('#tooltip03').css('top', e.pageY - 50 );
		$('#tooltip03').css('left', e.pageX - 110 );
		
	}).mouseout(function() {
	
		//Put back the title attribute's value
		$(this).attr('title',$('.tipBody').html());
	
		//Remove the appended tooltip template
		$(this).children('div#tooltip03').remove();
		
	});

});