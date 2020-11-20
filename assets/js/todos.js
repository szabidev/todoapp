// Check off Specific todos by clicking
// have to use on() method on the parent element, because of 
// future elements that might be added
// inside the ul if an li appears add the functionality
$("ul").on("click", "li",function(){
    $(this).toggleClass("completed");
});    

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
    // this keyword refers to the span, adding .parent() will refer to the li that encloses it, and fadeOut() method will slowly fade it out
    $(this).parent().fadeOut(500,function(){
        // here, this refers to the li not the spane because I used .parent() above
        $(this).remove();
    })
    //will stop the event from bubbling up to other elements / jQuery method
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    //if the key pressed is enter
    if(event.which === 13) {
        //grabbing new todo text from input
       let todoText = $(this).val();
       $(this).val("");
       //create new li and add to ul
       $("ul").append(`<li><span><i class='fas fa-trash-alt'></i></span> ${todoText}</li>`);
    }
});


// make the plus icon fade in and out
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})