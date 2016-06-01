$(".todo-entry").submit(function(){
    $('.ul_current').append($('<li>', {
         text: $(".todo-entry").val()
    }));
});
