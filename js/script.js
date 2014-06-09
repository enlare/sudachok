function recalculateBasket(object, oldCount, newCount)
{
    object = object || false;
    if(object)
    {
        $(object).closest('li').find('.costPerItem').text(
            parseInt($(object).closest('li').find('.costPerItem').text(),10)/oldCount*newCount
            );
        $(object).closest('li').find('.costPerItemWithSale').text(
            parseInt($(object).closest('li').find('.costPerItemWithSale').text(),10)/oldCount*newCount
            );            
    }
    var newTotalPrice = 0;
    $('.costPerItemWithSale').each(function(){
        newTotalPrice += parseInt($(this).text(),10);
    });
    $('#allOrderPrice').text(newTotalPrice);

}

$(document).ready(function(){
    $.backstretch(["images/bg.png"]);

    jQuery('input[placeholder], textarea[placeholder]').placeholder();


    /*	CarouFredSel: a circular, responsive jQuery carousel.
	Configuration created by the "Configuration Robot"
	at caroufredsel.dev7studios.com
     */
    //    $("#mainSlider").carouFredSel({
    //        width: 715,
    //        height: 295,
    //        direction: "right",
    //        items: {
    //            visible: 1,
    //            minimum: 1,
    //            width: 715,
    //            height: 295
    //        },
    //        scroll: {
    //            items: 1,
    //            fx: "fade",
    //            duration: 50000,
    //            pauseOnHover: true
    //        },
    //        auto: 0
    //    });
    
    
    $("#foo1").carouFredSel({
	items		: 1,
	scroll		: {
		fx			: "crossfade"
	},
	auto		: false,
	pagination	: {
		container		: "#foo1_pag",
		anchorBuilder	: function( nr ) {
			var src = $("img", this).attr( "src" );
				src = src.replace( "/large/", "/small/");
			return '<img src="' + src + '" />';
		}
	}
});


    $('.current_town,.town_triangle').on('click',function(){
        $('.choice_town').toggleClass('hidden');
    });
    $('.choice_town li'). on('click', function(){
        $('.current_town').text($(this).text());
        $('.choice_town').addClass('hidden');
    });
    
    
    
    $('.fancybox').fancybox({
        closeBtn: false,
        padding: 0
    });
    
    
    jQuery(document).on('click','#hideAlert', function(){
        $('#hideAlert').closest('.alertRow').addClass('hidden');   
    } )
        
        
    $('#topCatalog').click(function(){
        $('.category-wrapper').removeClass('hidden'); 
    });
    $('#catalogHref').click(function(){
        $('.category-wrapper').addClass('hidden'); 
    });
    
  
    
    $(document).on('click', '#openBasketPopup', function(){
        $('.basketPopup').toggleClass('hidden');
    })
    $('#addCupon').click(function(){
        $('.cuponInput').append('<p><input type="text" value=""></p>');
    });
    $('.basketGrid').on('click', '.delBasketRow', function(){
        $(this).closest('li').remove(); 
    });
    
    $('.basketGrid').on('click', '.delBasketRow', function(){
        $(this).closest('li').remove(); 
        recalculateBasket();
    });
    
    $('.basketGrid').on('click','.triangleUp5px', function(){
        var inputVal = parseInt($(this).closest('.leftFloat').find('.basketInputCount').val(),10);
        inputVal = inputVal||0;
        var newInputVal = inputVal+1;
        
        $(this).closest('.leftFloat').find('.basketInputCount').val(newInputVal);
        recalculateBasket(this, inputVal, newInputVal);
    });
    
    $('.basketPopup'). on('click','.triangleUp5px', function(){
        var inputVal = parseInt($(this).closest('li').find('.basketInputCount').val(),10);
        inputVal = inputVal||0;
        $(this).closest('li').find('.basketInputCount').val(++inputVal);
    });
    
    $('.basketGrid').on('click','.triangleDown5px', function(){
        var inputVal = parseInt($(this).closest('.leftFloat').find('.basketInputCount').val(),10);
        inputVal = inputVal||0;
        var newInputVal = inputVal-1;
        if ( inputVal > 1 )
        {
            $(this).closest('.leftFloat').find('.basketInputCount').val(newInputVal);
            recalculateBasket(this, inputVal, newInputVal);
            
        }        
    });
    
    $('.basketPopup'). on('click','.triangleDown5px', function(){
        var inputVal = parseInt($(this).closest('li').find('.basketInputCount').val(),10);
        inputVal = inputVal||0;
        if ( inputVal > 1 )
        {
            $(this).closest('li').find('.basketInputCount').val(--inputVal);
        } 
    });
    
    
    $('.showTovarPopup').click(function(){
       $('#popup_tovar').removeClass('hidden');
    });
    
    
    jQuery('.showTovarPopup').fancybox({
        showCloseButton:false,
        overlayOpacity:0,
        padding: 0,
        closeBtn: false,
        onStart: function(){
            
        },
        onClosed: function(){
        },
        onComplete: function() {
        }
    });
   // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 70,
    startAt: 0,  
    move: 0,      
//    itemMargin: 20,
     directionNav:false,
    asNavFor: '#slider'
  });
   
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
//    itemWidth: 500,
    sync: "#carousel",
    directionNav: true
  });
  
  
  
  ///left slider
    $('#carousel_left').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 50,
    itemMargin: 5,
    directionNav:false,
    asNavFor: '#slider_left'
  });
   
  $('#slider_left').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 220,
    sync: "#carousel_left",
    directionNav: true
  });
    
});