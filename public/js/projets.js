$(function(){
    $('body').data('projetsData',$.parseJSON($('#projetsData').val()));
    let projetsData = $('body').data('projetsData');
})