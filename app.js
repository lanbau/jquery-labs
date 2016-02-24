$(function() {
    $('#addHome').removeClass('btn-danger').addClass('btn-success');
})

var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
].forEach(function(object) {
  $address = $('<td>').html(object.address).attr('class','address')
  $sf = $('<td>').html(object.sf)
  $bedrooms = $('<td>').html(object.bedrooms)
  $baths = $('<td>').html(object.baths)
  $price = $('<td>').html(object.price)
  $button = $('<td>').append($('<button>').attr('class', 'btn btn-xs btn-danger').html('Remove'))

  // Add Table Columns into Row & Append To TBody
  $('<tr>')
    .append($address)
    .append($sf)
    .append($bedrooms)
    .append($baths)
    .append($price)
    .append($button)
    .appendTo($('tbody'))
})

function removeRow() {
  // this refers to tr dom element
  $(this).fadeOut('slow', function(){
    $(this).remove()
  })
}
$('#homes tbody').on('click', 'tr', removeRow)

// Get Form Values on Submit Button Click
$('#submit').click(function(){
  //$($('#newForm input')[1]).val()
  // var formInputsArray = []
  $newFormInputs = $('#newForm input')
  fields = {}
  for(var i=0; i < $newFormInputs.length; i++) {
    $name = ($newFormInputs.eq(i).attr('id'))
    $key = ($newFormInputs.eq(i).val())
    console.log($name, $key)
  }
  fields = [{
    address: $newFormInputs.eq(0).val(),
    sf: $newFormInputs.eq(1).val(),
    bedrooms: $newFormInputs.eq(2).val(),
    baths: $newFormInputs.eq(3).val(),
    price: $newFormInputs.eq(4).val()
  }].forEach(function(object) {
    $address = $('<td>').html(object.address).attr('class','address')
    $sf = $('<td>').html(object.sf)
    $bedrooms = $('<td>').html(object.bedrooms)
    $baths = $('<td>').html(object.baths)
    $price = $('<td>').html(object.price)
    $button = $('<td>').append($('<button>').attr('class', 'btn btn-xs btn-danger').html('Remove'))

    // Add Table Columns into Row & Append To TBody
    $('<tr>')
      .append($address)
      .append($sf)
      .append($bedrooms)
      .append($baths)
      .append($price)
      .append($button)
      .appendTo($('tbody'))
  })
  console.log(fields)

  // formInputsArray.forEach(function(object) {
  //   console.log(object)
  // }
})
