$( function() {



    $(".menu").click(function(){
        var pages = [
            {
                page_class: ".page_1",
                menu_id: "#p1",
            },
            {
                page_class: ".page_2",
                menu_id: "#p2",
            },
            {
                page_class: ".page_3",
                menu_id: "#p3",
            },
            {
                page_class: ".page_4",
                menu_id: "#p4",
            },
            {
                page_class: ".page_5",
                menu_id: "#p5",
            },
        ];

        var clicked_tab = $(this).index()*1;
        console.log(clicked_tab);

        my_page = pages[clicked_tab].page_class;
        my_menu = pages[clicked_tab].menu_id;

        $(".menu").removeClass("active");
        $(my_menu).addClass("active");

        $(".page").css("display","none");
        $(my_page).css("display","block");
    });
});
