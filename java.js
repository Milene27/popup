//Fonction utilisée pour fermer la popup et enlever la classe selected sur le lien
function deselect(e) {
    $('.pop').slideFadeToggle(function()
    {
    e.removeClass('selected');
    }); 
   }
   $(function()
   {
    //Fonction appelée lorsque l'on clique sur le lien Afficher la fenêtre
    $('#afficherPopup').on('click', function()
    {
    if($(this).hasClass('selected'))
    {
    deselect($(this)); 
    }
    else
    {
    $(this).addClass('selected');
    $('.pop').slideFadeToggle();
    }
    return false;
    });
    //Fonction appelée lorsque l'on clique sur le lien Fermer la fenêtre
    $('.close').on('click', function()
    {
    deselect($('#afficherPopup'));
    return false;
    });
   });
   //Fonction d'animation de la fenêtre. Elle permet d'afficher ou de masquer la fenêtre
   $.fn.slideFadeToggle = function(easing, callback)
   {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
   };

   $('#afficherPopup').on('click', function()
{
 $(#popup).dialog();
}