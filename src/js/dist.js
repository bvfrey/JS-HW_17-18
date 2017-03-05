$( function() {

    var $flag = 0; //0 - tooltips off; 1 - tooltips on
    var button_text;


// Функция для работы с табами
    $(".tab").click(function(){

        var clicked_tab = $(this).index(); //to find correct tab and tab content
        $(".tab").each(function() {
            if ($(this).index() === clicked_tab) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
        $(".tab-pane").each(function() {
            if ($(this).index() === clicked_tab) {
                $(this).addClass("in active");
            } else {
                $(this).removeClass("in active");
            }
        });
    });

// Функции, показывающие/убирающие подсказки
    $("#help").click(function(){
        $(".my_tooltip").fadeToggle();
        button_text = ($flag == "0") ? "Убрать подсказки" : "Показать подсказки";
        $(this).text(button_text);
        $flag = !$flag;
    });

    $(".my_input").hover(function(){
        if ($flag == "0") {
            $(this).next().fadeToggle();
        }
    });
});
