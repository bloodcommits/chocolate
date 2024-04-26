document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".card");
let amt = 0;


  products.forEach(function (product) {
    const decrementButton = product.querySelector(".decrement");
    const incrementButton = product.querySelector(".increment");
    const countSpan = product.querySelector(".count");
    const price = parseFloat(
      product.querySelector(".price").textContent.replace("Price: ₹", "")
    );

    const totalPriceSpan = product.querySelector(".total-price");

    // console.log(price)

    let count = 0;
    let maxelements = 0;



    decrementButton.addEventListener("click", function () {
      if (count > 0) {
        count--;
        if(amt>0){
          amt--;
        }
        checkifvalid()
      }
    });

    incrementButton.addEventListener("click", function () {
      if (maxelements >= 8) {
        alert("Cannot add more items get premium");
      } else {
        amt++;
        count++;
        maxelements++;

        checkifvalid()
      }
    });

    function checkifvalid(){
      if(amt<=8){
        console.log("good")
        updateTotalPrice();

      }
      else(alert("Cannot add more items get premium"))
    }

    function updateTotalPrice() {
      countSpan.textContent = count;
      const productTotalPrice = count * price;
      totalPriceSpan.textContent = `Total: ₹${productTotalPrice}`;
      totalPrice = calculateTotal();
      document.getElementById('total').textContent = `Total: ₹${totalPrice.toFixed(2)}`;
    }

    function calculateTotal() {
      let sum = 0;
      products.forEach(function(product) {
        sum += parseFloat(product.querySelector('.total-price').textContent.replace('Total: ₹', ''));
      });
      return sum;
    }
  });
});
