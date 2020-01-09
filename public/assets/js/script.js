$(function () {

  $(".new-burger").on("submit", function (event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#user-input").val(),
      devoured: false
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {
      location.reload();
    });
  });

  $(".devour-button").on("click", function (event) {
    event.preventDefault();

    const id = $(this).data("id");

    const devouredState = {
      devoured: true
    };

    //Put request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function () {
  
      // Reload the page 
      location.reload();
    });

  });
});