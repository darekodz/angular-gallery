$(document).ready(function() {

	// scroll to format section when clicking on a home menu
	$("#homeSection .profile a").on('click', function() {
		$('html, body').animate({
		    scrollTop: $("#formatSection").offset().top
		 }, 'fast');
	});
	
	// scroll to specified format when hash in the url
	/*var hashArray = ["#web", "#mobile", "#video", "#rtb"];
	if($.inArray(window.location.hash, hashArray)>-1){
		$('html, body').animate({
			scrollTop: $("#formatSection").offset().top
		}, 'fast');
		
		$('#platformTab li:visible').eq(0).removeClass('active');
		switch(window.location.hash){
			case "#web":
			$('#platformTab li').eq(0).addClass("active");
			break;
			case "#mobile":
			$('#platformTab li').eq(1).addClass("active");
			break;
			case "#video":
			$('#platformTab li').eq(2).addClass("active");
			break;
			case "#rtb":
			$('#platformTab li').eq(3).addClass("active");
			break;
		}
		
		setTimeout(function() {
			var $activeContainer = $('.ulThumbsWrapper:visible').eq(0);
			// init the isotope if not already done
			if($activeContainer.data('initDone') == false || $activeContainer.data('initDone') == undefined) {
				initFilterContainer($activeContainer);
			}
		}, 150);
		
	}*/
	
	/* ==================================================
		Filter on formats
	================================================== */

	// trigger clicks on platform tabs (web, mobile, video)
	$('#platformTab a').on('click', function() {
		setTimeout(function() {
			var $activeContainer = $('.ulThumbsWrapper:visible').eq(0);
			// init the isotope if not already done
			if($activeContainer.data('initDone') == false || $activeContainer.data('initDone') == undefined) {
				initFilterContainer($activeContainer);
			}
		
		}, 150);
	});
	
	function initFilterContainer($container) {
		$container.imagesLoaded(function() {
			$container.isotope({
			  // options
			  animationEngine: 'best-available',
			  itemSelector : '.item-thumbs',
			  layoutMode : 'fitRows'
			});
			
			$container.data('initDone', true);
		});
	}

	if($('.ulThumbsWrapper').length > 0){
		var $activeContainer = $('.ulThumbsWrapper:visible').eq(0);
		initFilterContainer($activeContainer);
		
		// filter items when filter link is clicked
		var $optionSets  = $('.formatNav .option-set'),
		    $optionLinks = $optionSets.find('a');
	
		// trigger click on a format tag
	  	$optionLinks.click(function(){
			var $this = $(this);
			var $container = $this.closest('.tab-pane').find('.ulThumbsWrapper');
			// init the isotope if not already done
			if($container.data('initDone') == false || $container.data('initDone') == undefined) {
				initFilterContainer($container);
			}
			setTimeout(function() {
				var $optionSet = $this.parents('.option-set');
				// don't proceed if already selected
				if ( $this.hasClass('selected') ) {
				  return false;
				}
				
				$optionSet.find('.selected').removeClass('selected');
				$this.addClass('selected');
			 
				// make option object dynamically, i.e. { filter: '.my-filter-class' }
				var options = {},
					key = $optionSet.attr('data-option-key'),
					value = $this.attr('data-option-value');
				// parse 'false' as false boolean
				value = value === 'false' ? false : value;
				options[ key ] = value;
				if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
				  // changes in layout modes need extra logic
				  changeLayoutMode( $this, options )
				} else {
				  // otherwise, apply new options
				  $container.isotope( options );
				}
				return false;	
			}, 150);
			
		});
	}
	
	/*=====================================
	End Filter isotope
	=======================================*/

});