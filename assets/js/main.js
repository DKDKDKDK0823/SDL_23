"use strict";
jQuery( document ).ready( function ( $ ) {

//for Preloader

    $( window ).load( function () {
        $( "#loading" ).fadeOut( 500 );
    } );

    $(window).scroll(function () {
        // クラスを追加するwindowの位置を設定
        var scrollTop = $(this).scrollTop();
        var scrollBottom = scrollTop + $(this).height();
        var effectPos = scrollBottom - 50;
        
        // eachで順番に処理
        $(".fadeInbox").each(function (i) {
            if(effectPos > $(this).offset().top){
                var that = this;
    
                // 0.2s毎にずれて表示
                setTimeout(function () {
                $(that).addClass("fadein");
                }, 400 * i);
            }
        });
    });


    // $(window).scroll(function () {
    //     // クラスを追加するwindowの位置を設定
    //     var scrollTop = $(this).scrollTop();
    //     var scrollBottom = scrollTop + $(this).height();
    //     var effectPos = scrollBottom - 50;
    //     $(function(){
	// 		anime({
	// 			targets: '.st0',
	// 			strokeDashoffset: [anime.setDashoffset, 0],
	// 			easing: 'easeInOutSine',
	// 			duration:1500,
	// 			delay: function(el, i) { return i * 250 },
	// 			direction: 'alternate',
	// 			loop: false
    //         });
    //     });
       
    // });

    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $( '.link' ).find( 'a[href*=#]:not([href=#])' ).click( function () {
        if ( location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) && location.hostname == this.hostname ) {
            var target = $( this.hash );
            target = target.length ? target : $( '[name=' + this.hash.slice( 1 ) + ']' );
            if ( target.length ) {
                $( 'html,body' ).animate( {
                    scrollTop: ( target.offset().top - 80 )
                }, 1000 );
                if ( $( '.navbar-toggle' ).css( 'display' ) != 'none' ) {
                    $( this ).parents( '.container' ).find( ".navbar-toggle" ).trigger( "click" );
                }
                return false;
            }
        }
    } );

    var wow = new WOW( {
        mobile: true 
    } );
    wow.init();

    // iTyped.js
    ityped.init(document.querySelector("#ityped"), {
        strings: ['Oh Lord, Daiki made another one'],
        typeSpeed:  100,
        backSpeed:  100,
    })

// magnificPopup

    $( '.popup-img' ).magnificPopup( {
        type: 'image',
        gallery: {
            enabled: true
        }
    } );

    $( '.video-link' ).magnificPopup( {
        type: 'iframe'
    } );


    $( '.mouse-scroll' ).bind( 'click', function () {
        $( 'html , body' ).stop().animate( {
            scrollTop: $( $( this ).attr( 'href' ) ).offset().top - 60
        }, 1500, 'easeInOutExpo' );
        event.preventDefault();
    } );


} );













