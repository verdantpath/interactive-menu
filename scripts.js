jQuery(function() {
  var vegetarian = false;
  jQuery('button#vegOn').on('click', function() {
    if (vegetarian == false) {
      vegetarian = true;
      console.log(vegetarian);
      $f = $('li.fish').parent().parent().detach();
    }
  }); // end button
  jQuery('button#restoreMe').on('click', function() {
    if (vegetarian == true) {
      vegetarian = false;
      console.log(vegetarian);
    }
  });
});
