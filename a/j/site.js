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