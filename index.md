---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
body-class: index
---


<!-- The Gallery as lightbox dialog, should be a child element of the document body -->
<div id="blueimp-gallery" class="blueimp-gallery ">
    <div class="slides"></div>
    <h3 class="title"></h3>
    <a class="prev">‹</a>
    <a class="next">›</a>
    <a class="close">×</a>
    <a class="play-pause"></a>
    <ol class="indicator"></ol>
</div>

<div id="links">
    <a href="{{ site.url }}/images/work/project-scottkay.jpg" title="Scott Kay" data-gallery="#blueimp-gallery-fruits">
        <img src="{{ site.url }}/images/work/project-scottkay-thumb.jpg" alt="Scott Kay" width="200">
    </a>

    <a href="{{ site.url }}/images/work/project-kingbaby.jpg" title="King Baby" data-gallery="#blueimp-gallery-fruits">
        <img src="{{ site.url }}/images/work/project-kingbaby-thumb.jpg" alt="King Baby" width="200">
    </a>
    <a href="{{ site.url }}/images/work/project-scottkay.jpg" title="Scott Kay" data-gallery="#blueimp-gallery-fruits">
        <img src="{{ site.url }}/images/work/project-scottkay-thumb.jpg" alt="Scott Kay" width="200">
    </a>

    <a href="{{ site.url }}/images/work/project-kingbaby.jpg" title="King Baby" data-gallery="#blueimp-gallery-fruits">
        <img src="{{ site.url }}/images/work/project-kingbaby-thumb.jpg" alt="King Baby" width="200">
    </a>
</div>

<script>
document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};
</script>

<script>
var gallery = $('#blueimp-gallery').data('gallery');
</script>