jQuery(function() {

  var vegetarian = false;
  jQuery('button#vegOn').on('click', function() {
    if (vegetarian == false) {
      vegetarian = true;
      console.log(vegetarian);
      $f = $('li.fish').parent().parent().detach();
      $('.hamburger').replaceWith('<li class="portabello"><em>Portabello Mushroom</em></li>');
      $('.meat').after('<li class="tofu">Tofu</li>');
      $m = $('li.meat').detach();
    }
  }); // end button
  jQuery('button#restoreMe').on('click', function() {
    if (vegetarian == true) {
      vegetarian = false;
      console.log(vegetarian);
      $('.menu-entrees').children().first().before($f);
    }
  });
});
