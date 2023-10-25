$(function () {
    // HomeWork 9
  
    // Завдання 9-1
  
    $(".changeH2").on("click", function () {
  
      $("H2.head").each(function (i, el) {
        $(el).css("background-color", "lightgreen");
        $(el).find(".inner").css("font-size", "30px");
      });
  
    });
  
    // Завдання 9-2
  
    $(".changeLinks").on("click", function () {
  
    $("a[href]").each(function (i, el) {
      if (/^https:\/\/.*/gi.test($(el).attr("href"))) {
        $(el).attr("target", "_blank");
      }
    });
  
  });
  
    // Завдання 9-3
  
    $(".changePlaces").on("click", function () {
  
    $("H3+div").each(function (i, el) {
      $(el).insertBefore($(el).prev("h3"));
    });
    
  });
  
    // Завдання 9-4
  
    $(function () {
      const $checkBox = $("[type=checkbox]");
  
      $checkBox.on("change", function (i, el) {
        if ($("[type=checkbox]:checked").length >= 3) {
          $checkBox.prop("disabled", true);
        }
      });
    });
  
    //
  });  