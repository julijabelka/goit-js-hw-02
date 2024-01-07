
function makeTransaction(quantity, pricePerDroid, customerCredits){
    const totalPrice = quantity * pricePerDroid;
    if (totalPrice > customerCredits) { 
        return `Insufficient funds!`;
        
    } else { 
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
        
    }
}

/*quantity— перший параметр, число, що містить кількість замовлених дроїдів
pricePerDroid — другий параметр, число, що містить вартість одного дроїда
Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", де:

<quantity> — це кількість замовлених дроїдів
<totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.*/

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"