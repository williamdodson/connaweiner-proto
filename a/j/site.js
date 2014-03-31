// Nice responsive iframe script from Aaron Gustafson: https://gist.github.com/aarongustafson/1313517
function adjustIframes() {
  $('iframe').each(function() {
    var
    $this       = $(this),
    proportion  = $this.data( 'proportion' ),
    w           = $this.attr('width'),
    actual_w    = $this.width();
    
    if (!proportion) {
	    proportion = $this.attr('height') / w;
	    $this.data('proportion', proportion);
    }
  
    if (actual_w != w) {
			$this.css('height', Math.round( actual_w * proportion ) + 'px');
    }
  });
}

// Web Font Loader
WebFont.load({
  google: {
    families: ['Open+Sans:400,400italic,700,700italic:latin']
  }
});

// responsive nav
var nav = responsiveNav('.nav-collapse', {
  insert: 'after',
  label: '<i class="icon-menu"></i> Menu'
});

// onload/resize
$(window).on('resize load',adjustIframes);