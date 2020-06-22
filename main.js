$( function() {
    $( "input[name=depositDate]" ).datepicker({
        dateFormat: "dd.mm.yy"
    });
  } );

let depositSum = document.querySelector("input[name=depositSum]"),
    replenishmentSum = document.querySelector("input[name=replenishmentSum]"),
    
    depositSumRange = document.querySelector("#depositSumRange"),
    replenishmentSumRange = document.querySelector("#replenishmentSumRange");

depositSumRange.oninput = () => depositSum.value = depositSumRange.value;
depositSum.oninput = () => depositSumRange.value = depositSum.value;

replenishmentSumRange.oninput = () => replenishmentSum.value = replenishmentSumRange.value;
replenishmentSum.oninput = () => replenishmentRange.value = replenishmentSum.value;

$('form').submit(function(event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: 'calc.php',
        data: $(this).serialize(),
        success: function(response) {
            let jsonData = JSON.parse(response);
            document.querySelector(".res").innerText = jsonData + " руб";
        }  
    });
});