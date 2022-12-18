document.addEventListener('DOMContentLoaded', function () {
    function calculate(){
        var cost = 1;
        var count = document.getElementById("count").value;
        var calc = 1;

        let select = document.getElementById("oil");
        let radios = document.getElementById("radios");
        let check = document.getElementById("checks");
        console.log(select.value);
        // Можно использовать getElementsByClassName()
        if (select.value == "item-1") {
          radios.style.display = "none";
          check.style.display = "none";
          cost=35;
          
          calc = count * cost;
        }
        if (select.value == "item-2") {
            radios.style.display = "block";
            check.style.display = "none";
            var rad=document.getElementsByName('oil-type');
            for (var i=0;i<rad.length; i++) {
              if (rad[i].checked) {
                cost=rad[i].value;
                }
            }
            calc = count * cost;
        }
      
        if (select.value == "item-3") {
            radios.style.display = "none";
            check.style.display = "block";
            cost = 52;
            if (document.getElementById('check-1').checked){
                cost = 53;
            }
            calc = count * cost;
            if (document.getElementById('check-2').checked){
                calc -= 1;
            }
        }
      
        
        var here = document.getElementById("calculate");
        var here2 = document.getElementById("cost");
        console.log(calc);
        here.innerText = calc;
        here2.innerText = cost;

      
    }
   

    timerId = setInterval(calculate, 200);
});