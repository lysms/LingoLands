
var iframe = document.getElementById("article");
var idoc= iframe.contentWindow;

$(iframe).on('load',function(){
    $(this).contents().find("body").on('click', function(event){
        var sel = idoc.getSelection().toString();
        const color = getRandomColor();
        console.log($(this).contents());
        $(this).contents().highlight(sel, color, id);
        createTranslation(sel).then(function(translation){
          createCard(sel, translation.translations[0].translation, "lorem ipsum dolor", color);
        });
    })
});

$(document).on("click", ".make-flashcard", function(){
  const term = this.parentNode.querySelector(".term").innerHTML
  const translation = this.parentNode.querySelector(".translation").innerHTML
  createFlashcard(term, translation);
})


$(document).on("click", ".fas.fa-trash-alt", function(){
  let cardID = this.id;
  for(var i = 0; i < cards.length; i++){
    if (cards[i].id = cardID){
      $(iframe).contents().removeHighlight(cardID);
      $("#card-" + cardID).remove();
    }
  }
})

