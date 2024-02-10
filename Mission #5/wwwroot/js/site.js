// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).keypress(function (event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.which === 13) {
        event.preventDefault(); // Prevent the default form submission
        $("#BtnSubmit").click(); // Trigger the button click event
    }
});


$("#BtnSubmit").click(function () {
    number = $("#Hours").val();
    if (isNaN(number) || number <= 0) {
        alert("Invalid Number Try Again")
        $("#Hours").val("")
    }
    else {
        Total = $("#Hours").val() * 20
        $("#total").val("$" + Total)

    }
})