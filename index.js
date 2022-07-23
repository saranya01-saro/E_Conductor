$(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                $('.sub').click(function() {
                  window.open("ml.html","_self");
           });
            }
            else if($(this).prop("checked") == false){
                console.log("Checkbox is unchecked.");
            }
        });
    });
