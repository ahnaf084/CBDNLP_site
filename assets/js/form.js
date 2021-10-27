var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbw7GyRmW6z2zBCooU-2hiKEB5qYX67S3KcbyqNBPNuELz48IqItw6IpBCMi1c1dPx00Ug/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})