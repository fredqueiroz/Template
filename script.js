var i = 1;
var text = document.querySelector('#buttons').innerHTML;
var buttons = text.split('<');
var value = '';
var value2 = document.querySelector('#menu').innerHTML;
for (i = 1; i <= buttons.length - 1; i++) {
    value2 = value2.replace('<li>', '<li class=\"spotli\"><a class=\"spota\" data-id=\"div' + i + '\" href=\"#\"><span class=\"filter-names\">');
    $("#buttons > input:nth-child(" + i + ")").wrap("<div id=\"div" + i + "\">");
}

value2 = value2.replace(/<\/li>/g, '</span></a></li>');
$('#menu').html(value2);

function triggerClick(id) {
    var children = $("#" + id).children();
    children.click();
}

$(".spota").click(function() {
    var navMenu = $(this).attr('data-id');
    triggerClick(navMenu);
});

$(".icons").click(function() {
    var navMenu = $(this).attr('data-id');
    triggerClick(navMenu);
});

document.getElementById("shadow").onclick = function() {
    document.getElementById("menu").style.width = "0px";
    document.getElementById("shadow").style.width = "0%";
    document.getElementById("menubutton").innerHTML = "<i class=\"fas fa-bars icons\" alt=\"Open menu\"></i>";
    $("#myaccordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content',
        activate: function(event, ui) {
            if (ui.newHeader.text() != "") {
                $(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
            } else {
                $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
            }
            $(".sf-input-with-placeholder").width("173px");
            $(".ListContainer").width("200px");
            $(".ListContainerScroll").width("194px");
            $(".Image").css("left", "197px");
            $(".sfc-scrollable").width("192px");
            $(".ListContainerScroll .HorizontalScrollbarContainer").width("178px");
            $(".ListContainerScroll .VerticalScrollbarContainer").css("left", "180px");
            $(".ListContainerScroll .VerticalScrollbarContainer").css("top", "0px");
            $(".sf-element-list-box .ScrollArea").width("178px");
            $(".sf-element-check-box .ScrollArea").width("178px");
            $(".ListItems .sf-element-list-box-item").width("166px");
            $(".ui-widget-content").css({
                "background": "inherit",
                "color": "inherit",
            });
        },
    });
};

document.getElementById("menubutton").onclick = function() {
    if (document.getElementById("menubutton").innerHTML.trim() == "<i class=\"fas fa-times icons\" alt=\"Open menu\"></i>") {
        document.getElementById("menu").style.width = "0px";
        document.getElementById("shadow").style.width = "0%";
        document.getElementById("menubutton").innerHTML = "<i class=\"fas fa-bars icons\" alt=\"Open menu\"></i>";
        $("#myaccordion").accordion({
            collapsible: true,
            active: false,
            heightStyle: 'content',
            activate: function(event, ui) {
                if (ui.newHeader.text() != "") {
                    $(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
                } else {
                    $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
                }
                $(".sf-input-with-placeholder").width("173px");
                $(".ListContainer").width("200px");
                $(".ListContainerScroll").width("194px");
                $(".Image").css("left", "197px");
                $(".sfc-scrollable").width("192px");
                $(".ListContainerScroll .HorizontalScrollbarContainer").width("178px");
                $(".ListContainerScroll .VerticalScrollbarContainer").css("left", "180px");
                $(".ListContainerScroll .VerticalScrollbarContainer").css("top", "0px");
                $(".sf-element-list-box .ScrollArea").width("178px");
                $(".sf-element-check-box .ScrollArea").width("178px");
                $(".ListItems .sf-element-list-box-item").width("166px");
                $(".ui-widget-content").css({
                    "background": "inherit",
                    "color": "inherit",
                });
            },
        });
    } else {
        if (document.getElementById("menubutton").innerHTML.trim() == "<i class=\"fas fa-bars icons\" alt=\"Open menu\"></i>") {
            document.getElementById("menu").style.width = "400px";
            document.getElementById("shadow").style.width = "100%";
            document.getElementById("menubutton").innerHTML = "<i class=\"fas fa-times icons\" alt=\"Open menu\"></i>";
        }
    }
};

//Accordian variables
var headBkgColor = "#FFFFFF";

$("#myaccordion").accordion({
    collapsible: true,
    active: false,
    heightStyle: 'content',
    activate: function(event, ui) {
        if (ui.newHeader.text() != "") {
            $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
            $(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
        } else {
            $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
        }
        $(".sf-input-with-placeholder").width("173px");
        $(".ListContainer").width("200px");
        $(".ListContainerScroll").width("194px");
        $(".Image").css("left", "197px");
        $(".sfc-scrollable").width("192px");
        $(".ListContainerScroll .HorizontalScrollbarContainer").width("178px");
        $(".ListContainerScroll .VerticalScrollbarContainer").css("left", "180px");
        $(".ListContainerScroll .VerticalScrollbarContainer").css("top", "0px");
        $(".sf-element-list-box .ScrollArea").width("178px");
        $(".sf-element-check-box .ScrollArea").width("178px");
        $(".ListItems .sf-element-list-box-item").width("166px");
        $(".ui-widget-content").css({
            "background": "inherit",
            "color": "inherit",
        });
    },
});

//Header background color
$(".ui-accordion .ui-accordion-header").css({
    "background": headBkgColor
});

//Header background color
$(".ui-accordion .ui-accordion-header").css({
    "borderColor": headBkgColor
});
