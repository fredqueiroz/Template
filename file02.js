var filterSize = 360;
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
document.getElementById("shadow").style.width = "0%";
document.getElementById("filter").style.width = "0px";
document.getElementById("filterbutton").innerHTML = "<i class=\"fas fa-filter icons\" title=\"Open filters\"></i>";
    document.getElementById("menu").style.width = "0px";
    document.getElementById("menubutton").innerHTML = "<i class=\"fas fa-bars icons\" title=\"Open menu\"></i>";
    $("#myaccordion,#myaccordionfilters").accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content',
        activate: function(event, ui) {
            if (ui.newHeader.text() != "") {
                $(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
            } else {
                $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
            }
            $(".sf-input-with-placeholder").width((filterSize - 27) + "px");
            $(".ListContainer").width(filterSize + "px");
            $(".ListContainerScroll").width((filterSize - 6) + "px");
            $(".Image").css("left", (filterSize - 3) + "px");
            $(".sfc-scrollable").width((filterSize - 8) + "px");
            $(".ListContainerScroll .HorizontalScrollbarContainer").width((filterSize - 22) + "338px");
            $(".ListContainerScroll .VerticalScrollbarContainer").css("left", (filterSize - 20) + "px");
            $(".ListContainerScroll .VerticalScrollbarContainer").css("top", "0px");
            $(".sf-element-list-box .ScrollArea").width((filterSize - 22) + "px");
            $(".sf-element-check-box .ScrollArea").width((filterSize - 22) + "px");
            $(".ListItems .sf-element-list-box-item").width((filterSize - 34) + "px");
            $(".ui-widget-content").css({
                "background": "inherit",
                "color": "inherit",
            });
        },
    });
};

document.getElementById("menubutton").onclick = function() {
		document.getElementById("shadow").style.width = "0%";
document.getElementById("filter").style.width = "0px";
$("#myaccordion,#myaccordionfilters").accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content',
        activate: function(event, ui) {
            if (ui.newHeader.text() != "") {
                $(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
            } else {
                $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
            }
            $(".sf-input-with-placeholder").width((filterSize - 27) + "px");
            $(".ListContainer").width(filterSize + "px");
            $(".ListContainerScroll").width((filterSize - 6) + "px");
            $(".Image").css("left", (filterSize - 3) + "px");
            $(".sfc-scrollable").width((filterSize - 8) + "px");
            $(".ListContainerScroll .HorizontalScrollbarContainer").width((filterSize - 22) + "338px");
            $(".ListContainerScroll .VerticalScrollbarContainer").css("left", (filterSize - 20) + "px");
            $(".ListContainerScroll .VerticalScrollbarContainer").css("top", "0px");
            $(".sf-element-list-box .ScrollArea").width((filterSize - 22) + "px");
            $(".sf-element-check-box .ScrollArea").width((filterSize - 22) + "px");
            $(".ListItems .sf-element-list-box-item").width((filterSize - 34) + "px");
            $(".ui-widget-content").css({
                "background": "inherit",
                "color": "inherit",
            });
        },
    });
document.getElementById("filterbutton").innerHTML = "<i class=\"fas fa-filter icons\" title=\"Open filters\"></i>";
document.getElementById("shadow").classList.remove('shadowfilter');
    if (document.getElementById("menubutton").innerHTML.trim() == "<i class=\"fas fa-times fatimesmenu icons\" title=\"Open menu\"></i>") {
        document.getElementById("menu").style.width = "0px";
        document.getElementById("shadow").style.width = "0%";
        document.getElementById("menubutton").innerHTML = "<i class=\"fas fa-bars icons\" title=\"Open menu\"></i>";
        $("#myaccordion,#myaccordionfilters").accordion({
            collapsible: true,
            active: false,
            heightStyle: 'content',
            activate: function(event, ui) {
                if (ui.newHeader.text() != "") {
                    $(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
                } else {
                    $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
                }
                $(".sf-input-with-placeholder").width((filterSize - 27) + "px");
                $(".ListContainer").width(filterSize + "px");
                $(".ListContainerScroll").width((filterSize - 6) + "px");
                $(".Image").css("left", (filterSize - 3) + "px");
                $(".sfc-scrollable").width((filterSize - 8) + "px");
                $(".ListContainerScroll .HorizontalScrollbarContainer").width((filterSize - 22) + "338px");
                $(".ListContainerScroll .VerticalScrollbarContainer").css("left", (filterSize - 20) + "px");
                $(".ListContainerScroll .VerticalScrollbarContainer").css("top", "0px");
                $(".sf-element-list-box .ScrollArea").width((filterSize - 22) + "px");
                $(".sf-element-check-box .ScrollArea").width((filterSize - 22) + "px");
                $(".ListItems .sf-element-list-box-item").width((filterSize - 34) + "px");
                $(".ui-widget-content").css({
                    "background": "inherit",
                    "color": "inherit",
                });
            },
        });
    } else {
        if (document.getElementById("menubutton").innerHTML.trim() == "<i class=\"fas fa-bars icons\" title=\"Open menu\"></i>") {
            document.getElementById("menu").style.width = "400px";
            document.getElementById("shadow").style.width = "100%";
            document.getElementById("menubutton").innerHTML = "<i class=\"fas fa-times fatimesmenu icons\" title=\"Open menu\"></i>";



        }
    }
};







document.getElementById("filterbutton").onclick = function() {

document.getElementById("menu").style.width = "0px";
        document.getElementById("shadow").style.width = "0%";
$("#myaccordion,#myaccordionfilters").accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content',
        activate: function(event, ui) {
            if (ui.newHeader.text() != "") {
                $(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
            } else {
                $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
            }
            $(".sf-input-with-placeholder").width((filterSize - 27) + "px");
            $(".ListContainer").width(filterSize + "px");
            $(".ListContainerScroll").width((filterSize - 6) + "px");
            $(".Image").css("left", (filterSize - 3) + "px");
            $(".sfc-scrollable").width((filterSize - 8) + "px");
            $(".ListContainerScroll .HorizontalScrollbarContainer").width((filterSize - 22) + "338px");
            $(".ListContainerScroll .VerticalScrollbarContainer").css("left", (filterSize - 20) + "px");
            $(".ListContainerScroll .VerticalScrollbarContainer").css("top", "0px");
            $(".sf-element-list-box .ScrollArea").width((filterSize - 22) + "px");
            $(".sf-element-check-box .ScrollArea").width((filterSize - 22) + "px");
            $(".ListItems .sf-element-list-box-item").width((filterSize - 34) + "px");
            $(".ui-widget-content").css({
                "background": "inherit",
                "color": "inherit",
            });
        },
    });
        document.getElementById("menubutton").innerHTML = "<i class=\"fas fa-bars icons\" title=\"Open menu\"></i>";
	document.getElementById("shadow").classList.remove('shadowmenu');
 if (document.getElementById("filterbutton").innerHTML.trim() == "<i class=\"fas fa-filter icons\" title=\"Open filters\"></i>") {
		document.getElementById("shadow").classList.add('shadowfilter');
		document.getElementById("shadow").style.width = "100%";
document.getElementById("filter").style.width = "400px";
document.getElementById("filterbutton").innerHTML = "<i class=\"fas fa-times fatimesfilter icons\" title=\"Open filters\"></i>";
	}
	else
	{
	if (document.getElementById("filterbutton").innerHTML.trim() == "<i class=\"fas fa-times fatimesfilter icons\" title=\"Open filters\"></i>") {
		document.getElementById("shadow").style.width = "0%";
		document.getElementById("filter").style.width = "0px";
		document.getElementById("filterbutton").innerHTML = "<i class=\"fas fa-filter icons\" title=\"Open filters\"></i>";
		$("#myaccordion,#myaccordionfilters").accordion({
			collapsible: true,
			active: false,
			heightStyle: 'content',
			activate: function(event, ui) {
			    if (ui.newHeader.text() != "") {
				$(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
			    } else {
				$(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
			    }
			    $(".sf-input-with-placeholder").width((filterSize - 27) + "px");
			    $(".ListContainer").width(filterSize + "px");
			    $(".ListContainerScroll").width((filterSize - 6) + "px");
			    $(".Image").css("left", (filterSize - 3) + "px");
			    $(".sfc-scrollable").width((filterSize - 8) + "px");
			    $(".ListContainerScroll .HorizontalScrollbarContainer").width((filterSize - 22) + "338px");
			    $(".ListContainerScroll .VerticalScrollbarContainer").css("left", (filterSize - 20) + "px");
			    $(".ListContainerScroll .VerticalScrollbarContainer").css("top", "0px");
			    $(".sf-element-list-box .ScrollArea").width((filterSize - 22) + "px");
			    $(".sf-element-check-box .ScrollArea").width((filterSize - 22) + "px");
			    $(".ListItems .sf-element-list-box-item").width((filterSize - 34) + "px");
			    $(".ui-widget-content").css({
				"background": "inherit",
				"color": "inherit",
			    });
			},
		    });
		}
		
	}
};


$("#myaccordion,#myaccordionfilters").accordion({
    collapsible: true,
    active: false,
    heightStyle: 'content',
    activate: function(event, ui) {
        if (ui.newHeader.text() != "") {
            $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
            $(".ui-accordion-header-active > .spota > .fa-angle	-right").removeClass('fa-angle-right').addClass('fa-angle-down');
        } else {
            $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
        }
        $(".sf-input-with-placeholder").width((filterSize - 27) + "px");
        $(".ListContainer").width(filterSize + "px");
        $(".ListContainerScroll").width((filterSize - 6) + "px");
        $(".Image").css("left", (filterSize - 3) + "px");
        $(".sfc-scrollable").width((filterSize - 8) + "px");
        $(".ListContainerScroll .HorizontalScrollbarContainer").width((filterSize - 22) + "338px");
        $(".ListContainerScroll .VerticalScrollbarContainer").css("left", (filterSize - 20) + "px");
        $(".ListContainerScroll .VerticalScrollbarContainer").css("top", "0px");
        $(".sf-element-list-box .ScrollArea").width((filterSize - 22) + "px");
        $(".sf-element-check-box .ScrollArea").width((filterSize - 22) + "px");
        $(".ListItems .sf-element-list-box-item").width((filterSize - 34) + "px");
        $(".ui-widget-content").css({
            "background": "inherit",
            "color": "inherit",
        });
    },
});

.VerticalScrollbarContainer.sf-element.sf-element-scroll-bar.sfpc-right{display:none}
.HorizontalScrollbarContainer.sf-element.sf-element-scroll-bar.sfpc-bottom{display:none}

#divmenu::-webkit-scrollbar-track{-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);border-radius: 10px;}#divmenu::-webkit-scrollbar{width: 10px;}#divmenu::-webkit-scrollbar-thumb{border-radius: 10px;background-image: -webkit-gradient(linear,left bottom, left top,color-stop(0.44, rgb(102,102,102)),color-stop(0.72, rgb(102,102,102)),color-stop(0.86, rgb(102,102,102)));}#divmenu{height: 100%;width: 100%;overflow-y: auto;overflow-x: hidden;}
