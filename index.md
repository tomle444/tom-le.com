---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
body-class: index
---

<div id="main-hero" class="other-work-links">
    <a href="{{ '/images/work/project-neoverve.jpg' | relative_url }}" title="" data-lightbox-gallery="gallery" data-lightbox-title="" class="lightbox">
        <img src="{{ '/images/work/project-neoverve-slide.jpg' | relative_url }}" alt="Neoverve">
    </a>
    <a href="{{ '/images/work/project-tunnelroad.jpg' | relative_url }}" title="" data-lightbox-gallery="gallery" data-lightbox-title="" class="lightbox">
        <img src="{{ '/images/work/project-tunnelroad-slide.jpg' | relative_url }}" alt="Tunnel Road">
    </a>
    <a href="{{ '/images/work/project-scottkay.jpg' | relative_url }}" title="" data-lightbox-gallery="gallery" data-lightbox-title="" class="lightbox">
        <img src="{{ '/images/work/project-scottkay-thumb.jpg' | relative_url }}" alt="Scott Kay">
    </a>
    <a href="{{ '/images/work/untitled-4-copy.jpg' | relative_url }}" title="" data-lightbox-gallery="gallery" data-lightbox-title="" class="lightbox">
        <img src="{{ '/images/work/untitled-4-slide.jpg' | relative_url }}" alt="Untitled 4">
    </a>  
    <a href="{{ '/images/work/project-untitled-2.jpg' | relative_url }}" title="" data-lightbox-gallery="gallery" data-lightbox-title="" class="lightbox">
        <img src="{{ '/images/work/untitled-2-slide.jpg' | relative_url }}" alt="Untitled 2">
    </a>
    <a href="{{ '/images/work/project-untitled-3.jpg' | relative_url }}" title="" data-lightbox-gallery="gallery" data-lightbox-title="" class="lightbox">
        <img src="{{ '/images/work/untitled-3-slide.jpg' | relative_url }}" alt="untitled 3">
    </a> 
    <a href="{{ '/images/work/project-kingbaby.jpg' | relative_url }}" title="" data-lightbox-gallery="gallery" data-lightbox-title="" class="lightbox">
        <img src="{{ '/images/work/project-kingbaby-slide.jpg' | relative_url }}" alt="King Baby">
    </a>  
    <a href="{{ '/images/work/project-guilcon.jpg' | relative_url }}" title="" data-lightbox-gallery="gallery" data-lightbox-title="" class="lightbox">
        <img src="{{ '/images/work/project-guilcon-slide.jpg' | relative_url }}" alt="Guilcon">
    </a>
    <a href="{{ '/images/work/project-compustamp.jpg' | relative_url }}" title="" data-lightbox-gallery="gallery" data-lightbox-title="" class="lightbox">
        <img src="{{ '/images/work/project-compustamp-slide.jpg' | relative_url }}" alt="Compustamp">
    </a>
    <a href="{{ '/images/work/project-blazers.jpg' | relative_url }}" title="" data-lightbox-gallery="gallery" data-lightbox-title="" class="lightbox">
        <img src="{{ '/images/work/project-blazers-slide.jpg' | relative_url }}" alt="Blazers">
    </a>
</div>

<div class="slider-nav">
    <img src="{{ '/images/work/thumbnails/project-thumbnail-neoverve.jpg' | relative_url }}" alt="Neoverve" width="200">
    <img src="{{ '/images/work/thumbnails/project-thumbnail-tunnelroad.jpg' | relative_url }}" alt="Tunnel Road" width="200">

    <img src="{{ '/images/work/thumbnails/project-thumbnail-scottkay.jpg' | relative_url }}" alt="Scott Kay Thumb" width="200">
    <img src="{{ '/images/work/thumbnails/untitled-4-thumb.jpg' | relative_url }}" alt="" width="200">

 
    <img src="{{ '/images/work/thumbnails/untitled-2-thumb.jpg' | relative_url }}" alt="" width="200">
    <img src="{{ '/images/work/thumbnails/untitled-3-thumb.jpg' | relative_url }}" alt="" width="200">

  
    
    <img src="{{ '/images/work/thumbnails/project-thumbnail-kingbaby.jpg' | relative_url }}" alt="King Baby" width="200">
    <img src="{{ '/images/work/thumbnails/project-thumbnail-guilcon.jpg' | relative_url }}" alt="Guilcon" width="200">
    <img src="{{ '/images/work/thumbnails/project-thumbnail-compustamp.jpg' | relative_url }}" alt="Compustamp" width="200">
    <img src="{{ '/images/work/thumbnails/project-thumbnail-blazers.jpg' | relative_url }}" alt="Blazers" width="200">
    
  
  
   
  
</div>

<script>
$(document).ready(function() {
	$('#main-hero').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    adaptiveHeight: true,
     asNavFor: '.slider-nav',
    prevArrow: '<button class="slick-prev fa fa-angle-left" aria-hidden="true" />',
    nextArrow: '<button class="slick-next fa fa-angle-right" aria-hidden="true" />'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.other-work-links',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<button class="slick-prev fa fa-angle-left" aria-hidden="true" />',
    nextArrow: '<button class="slick-next fa fa-angle-right" aria-hidden="true" />',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
    // iLightbox
    $('a.lightbox').iLightbox({
        type: 'image', //'image', 'ajax', 'iframe', 'swf' and 'html'
        loop: false, //loop media
        arrows: false, //show arrows
        closeBtn: true, //show close button
        title: null, //title
        href: null, //link to media
        content: null, //html content
        beforeShow: function(a, b) {},
        onShow: function(a, b) {},
        beforeClose: function() {},
        afterClose: function() {},
        onUpdate: function(a) {},
        template: {
            container: '<div class="iLightbox-container"></div>',
            image: '<div class="iLightbox-media"></div>',
            iframe: '<div class="iLightbox-media iLightbox-iframe"></div>',
            title: '<div class="iLightbox-details"></div>',
            error: '<div class="iLightbox-error">The requested content cannot be loaded.<br/>Please try again later.</div>',
            closeBtn: '<a href="#" class="iLightbox-close"></a>',
            prevBtn: '<div class="iLightbox-btnPrev"><a href="javascript:;"></a></div>',
            nextBtn: '<div class="iLightbox-btnNext"><a href="javascript:;"></a></div>'
        }
    });
    
});



</script>