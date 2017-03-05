'use strict;'

$(function(){

    var html = $('#test').html();
    var questionaryTitle = "Тест по программированию";
    var questionary = JSON.parse(localStorage.getItem('my_questionary'));
    var wrongs = [];
    var content = tmpl(html, {
        data: questionary
    });

    $('.test-plaseholder').append(content);

    $("#check_results").bind('click', getResults);
    $("#showCorrectAnswers").bind('click', showCorrectAnswers);
    $("#close").bind('click', refreshPage);



    function getResults(e) {
        var tmp_counter = 0;
        var placeValue = 1;
        $("#check_results").unbind('click', getResults);
        $("#check_results").bind('click', refreshPage);


        for (var i = 0; i < questionary.length; i++) {
            questionary[i].actualResult = 0;
            placeValue = 1;
            for (var j = 0; j < questionary[i].answers.length; j++) {
                questionary[i].actualResult += $(".answer").eq(tmp_counter).prop("checked")*placeValue;
                tmp_counter += 1;
                placeValue += 1;
            }
        }
        checkResults();
        showAnswer();
    }

    function checkResults(e) {
        var wrongs_counter = 0;

        for (var i = 0; i < questionary.length; i++) {
            if (questionary[i].actualResult != (questionary[i].correct_answer*1)) {
                wrongs[wrongs_counter] = i;
                wrongs_counter += 1;
            }
        }

    }

    function showAnswer(e) {
        $('#myModal').modal('show');

        switch (true) {
            case (wrongs.length == 0):
                $("#result").text("Поздравляем. Вы правильно ответили на все вопросы. ");
                break;
            case (wrongs.length == 1):
                $("#result").text("Вы ошиблись всего одни раз. Это очень хороший результат. Продолжайте изучать латынь, и Вы обязательно достигнете успеха!");
                break;
            case (wrongs.length < 5):
                $("#result").text("У Вас всего " + wrongs.length + " ошибки. Это очень хороший результат. Продолжайте изучать латынь, и Вы обязательно достигнете успеха!");
                break;
            case (wrongs.length < 10):
                $("#result").text("У Вас " + wrongs.length + " ошибок. Проанализируйти свои ошибки, и попытайтесь пройти тест ещё раз. Продолжайте обучение, и Вы обязательно достигнете успеха!");
                break;

            default:
                $("#result").text("У Вас " + wrongs.length + " ошибок. Вероятно, Вы только начинаете учитить Латынь? Проанализируйти свои ошибки, и попытайтесь пройти тест ещё раз. Продолжайте обучение, и Вы обязательно достигнете успеха!");
                break;
        }
    }

    function showCorrectAnswers(e) {
        var tmp_counter = 0;

        for (var i = 0; i < questionary.length; i++) {
            for (var j = 0; j < questionary[i].answers.length; j++) {
                if (questionary[i].correct_answer == (j+1)) {
                    $(".answer").eq(tmp_counter).parent().css({
                        "color": "rgb(93, 164, 67)",
                        "font-weight": "600"
                    })
                    $(".answer").eq(tmp_counter).attr("checked","checked");
                } else {
                    if (questionary[i].actualResult == (j+1)) {
                        $(".answer").eq(tmp_counter).parent().css({
                            "color": "rgb(190, 59, 55)",
                            "text-decoration": "line-through",
                        })
                    }
                }
                tmp_counter++;
            }
        }
        $("#myModal").modal('hide');
        $("#check_results").text("Пройти тест ещё раз");
        $("body").animate({"scrollTop":0},"slow");
    }

    function refreshPage(e) {
        for (var i = 0; i < questionary.length; i++) {
                questionary[i].actualResult = 0;
        }
        $('.test-plaseholder').html("").append(content);
        $("#check_results").unbind('click', refreshPage);
        $("#check_results").text(" Готово ");
        $("#check_results").bind('click', getResults);
        $("body").animate({"scrollTop":0},"slow");
    }




});
