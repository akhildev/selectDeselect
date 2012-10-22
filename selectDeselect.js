/*!
 * jQuery selectDeselect 0.1.0
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function( $ ){
  var methods = {
    init : function( options ) { 
		
	   var selectHeaders=options.headerclasses.split(',');	
	    for (var i=0; i<selectHeaders.length; i++) {
			$('.'+selectHeaders[i]).bind('click', methods.process);
		}
	   
	   $('.entry').each(function(){
			$(this).bind('click', methods.entryprocess);
	   });
       
	   return;
	   
    },
    entryprocess: function( content ){
	  var headerClassname=content.target.className.split(' entry');
	  var isChecked=content.target.checked;
	  if(!isChecked){
		$('[class='+headerClassname[0]+']').attr('checked', false);
	  }	  
	},
	process : function( content ) { 
	 var targetClass=content.target.className;
	 var isChecked=content.target.checked;
     $('.'+targetClass +'.entry').each(function(){
			if(isChecked){
				$(this).attr('checked', true);				
			}else{
				$(this).attr('checked', false);
			}
	   });
    }
  };
  $.fn.selectDeselect = function( method ) {
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }      
  };
})( jQuery );