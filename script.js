const newLine = "\r\n"
const diesel = 1, petrol = 1.10, lpg = 0.65; 

const fuel = confirm("Welcome! Have you selected your fuel type?")
if(fuel){
    const fuelType = ["Diesel", "Petrol" , "LPG"]
    const type = prompt("Select fuel type:" +  newLine + fuelType[0] + newLine + fuelType[1] + newLine + fuelType[2])
    if(type == fuelType[0] || type == fuelType[1] || type == fuelType[2]){
        const liter = +prompt("Enter fuel liter");
        const balance = +prompt("Please enter the balance");
        if(type == fuelType[0]){
           const amountdue = liter * diesel
           if(amountdue <= balance){
              alert("Fueling process succesful" + newLine + "Remaining balance:" + (balance - amountdue))
           }
           else{
            alert("The balance is not enough" + newLine + "Balance:" + balance +
                 newLine + "Amount due:" + amountdue + 
                newLine + "Insufficient amount :" + (amountdue - balance))
           }
        }
        else if(type == fuelType[1]){
          const amountdue = liter * petrol
          if(amountdue <= balance){
            alert("Fueling process succesful" + newLine + "Remaining balance:" + (balance - amountdue))
          }
          else{
            alert("The balance is not enough" + newLine + "Balance:" + balance +
                 newLine + "Amount due:" + amountdue + 
                newLine + "Insufficient amount :" + (amountdue - balance))
           }
        }
        else if(type == fuelType[2]){
            const amountdue = liter * lpg
            if(amountdue <= balance){
              alert("Fueling process succesful" + newLine + "Remaining balance:" + (balance - amountdue))
            }
            else{
              alert("The balance is not enough" + newLine + "Balance:" + balance +
                   newLine + "Amount due:" + amountdue + 
                  newLine + "Insufficient amount :" + (amountdue - balance))
             }
        }
    }
    else{
        alert("You have not mentioned the fuel type correctly.")
    }   
}
else{
     alert("We are waiting for you again.") 
}

