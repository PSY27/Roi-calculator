$("#calc").click(function () {
    var wattageA = $("#wattA").val();
    console.log(wattageA)
    var quantityA = $("#quanA").val();
    console.log(quantityA)
    var wattage2 = $("#wattO").val();
    console.log(wattage2);
    var quantity2 = $("#quanO").val();
    console.log(quantity2);
    var elecCost = $("#cost").val();
    console.log(elecCost);
    var hoursPerDay = $("#hours").val();
    console.log(hoursPerDay);
    var costA= $("#costA").val();
    console.log(costA)
    var cost2= $("#cost2").val();
    console.log(cost2)
   var totalcostA = quantityA*costA;
   console.log(totalcostA)
    var totalcost2 = quantity2*cost2;
    var costdiff = totalcostA-totalcost2;
    var dailyA = ((wattageA/1000)*quantityA*hoursPerDay)*elecCost;
    var  daily2 = ((wattage2/1000)*quantity2*hoursPerDay)*elecCost;
     var dailydiff = daily2 - dailyA;
     var  ROI = costdiff/dailydiff;
    
     ROI = costdiff/dailydiff;
    ROI.toFixed(2);
 
    if (costdiff<0) {
        setTimeout(() => {
        
            $('.header').empty()
            $('.header').css({ background: "white"})
            $('.header').css({ border: "1px solid black"})
            console.log(costdiff)
            $('.header').html(`<h3>ROI ANALYSIS</h3>`)
            $('.header').html(`<h2>ROI ANALYSIS</h2> <h3> Initially, Agate light will be cheaper by ₹${costdiff}</h3>
            <h3> Agate light will have a daily cost of ₹${dailyA} and the other light will have daily cost of ₹${daily2}</h3>`)
            $("h1").css({ "margin-top": "30px" })
        }, 100);
       
    }
    else {
        setTimeout(() => {
        
            $('.header').empty()
            $('.header').css({ background: "white" })
            console.log(costdiff)
            $('.header').html(`<h3>ROI ANALYSIS</h3>`)
    $('.header').html(`<h2>ROI ANALYSIS</h2><h3> Initially, the cost of Agate light will be  ₹${costdiff} more than the other light </h3>
            <h3> Agate light will have a daily cost of ₹${dailyA} and the other light will have daily cost of ₹${daily2}  </h3>
            <h3>After ${ROI.toFixed(2)} number of days, Agate light will have completed ROI period and will give daily savings of ₹${dailydiff} after that.</h3>`)
            $("h1").css({ "margin-top": "30px" })
        }, 100);
    
    }

  


    
    
})