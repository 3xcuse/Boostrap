function calcAmount() {
    let price = 1500;
    let amount = document.querySelector("input[name='amount']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amount.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
   /*  if(isNaN(amountNumber)) {amountNumber=0;} */
    if (amountNumber > 10) { alert("Túl sok!!!"); return; }
    else if (amountNumber < 1) { alert("Vegyé már valamit!"); return;}
    else {
        let ar = parseInt(amount.value) * price;

        showAmount.innerHTML = ar;
    }





    /* alert("Fizetendő: " + ar + "Ft"); */


}