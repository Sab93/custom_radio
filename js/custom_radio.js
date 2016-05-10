$(function () {
    //on ajoute un span après chaque input on cache l input
$('.custom_radio input[type=radio]').hide().after('<span class="off"></span>');

    //evt de click sur les spans
    $('.off').click(function () {

        //on deselectionne le precedent
        $(this).parent().find('.on').prev().prop('checked',false);
        $(this).parent().find('.on').removeClass('on').addClass('off');

        //on  selectionne l'elt en cours
        $(this).removeClass('off').addClass('on');
        $(this).prev().prop('checked',true);


    });

});