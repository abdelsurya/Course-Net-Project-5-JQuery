$(".btn-toggle1").click(function () {
  $(".menu-content-jq").toggle();
});

$(function () {
  $("#tabs").tabs();
});

$(".clicktobig").click(function () {
  $(".box").animate(
    {
      marginLeft: "651px",
      height: "300px",
      width: "600px",
    },
    1000
  );
});

$(".clicktosmall").click(function () {
  $(".box").animate(
    {
      marginLeft: "0px",
      height: "150px",
      width: "300px",
    },
    1000
  );
});

$(".fadeto").click(function () {
  $(".boxfade").fadeIn(3000);
});

$("#tabs li a:not(:first)").addClass("incative");
$(".tab-content-custom").hide();
$(".tab-content-custom:first").show();

$("#tabs li a").click(function () {
  var n = $(this).attr("id");
  if ($(this).hasClass("inactive")) {
    $("#tabs li a").addClass("inactive");
    $(this).removeClass("inactive");

    $(".tab-content-custom").hide();
    $("#" + n + "content").fadeIn("slow");
  }
});
