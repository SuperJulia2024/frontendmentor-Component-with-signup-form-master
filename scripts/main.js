/* Form values validation */

function buttonCheck() {
  if (!$("#first-name")[0].checkValidity()) {
    $("#label-first-name").css("display", "block");
    $("#first-name").css("border-color", "hsl(0, 100%, 74%)");
    $("#first-name").css("border-width", "2px");
    $("#first-name").attr("placeholder", "");
  } else {
    $("#label-first-name").css("display", "none");
    $("#first-name").css("border-color", "hsl(246, 25%, 77%)");
    $("#first-name").attr("placeholder", "First Name");
  }

  if (!$("#last-name")[0].checkValidity()) {
    $("#label-last-name").css("display", "block");
    $("#last-name").css("border-color", "hsl(0, 100%, 74%)");
    $("#last-name").css("border-width", "2px");
    $("#last-name").attr("placeholder", "");
  } else {
    $("#label-last-name").css("display", "none");
    $("#last-name").css("border-color", "hsl(246, 25%, 77%)");
    $("#last-name").attr("placeholder", "Last Name");
  }

  if (!$("#email")[0].checkValidity()) {
    $("#label-email").css("display", "block");
    $("#email").css("border-color", "hsl(0, 100%, 74%)");
    $("#email").css("border-width", "2px");
    $("#email").css("color", "hsl(0, 100%, 74%)");
    $("#email").attr("placeholder", "");
  } else {
    $("#label-email").css("display", "none");
    $("#email").css("border-color", "hsl(246, 25%, 77%)");
    $("#email").attr("placeholder", "Email Address");
  }

  if (!$("#password")[0].checkValidity()) {
    $("#label-password").css("display", "block");
    $("#password").css("border-color", "hsl(0, 100%, 74%)");
    $("#password").css("border-width", "2px");
    $("#password").attr("placeholder", "");
  } else {
    $("#label-password").css("display", "none");
    $("#password").css("border-color", "hsl(246, 25%, 77%)");
    $("#password").attr("placeholder", "Password Name");
  }
}
