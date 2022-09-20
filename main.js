let order = document.getElementById("order");

let generateOrder = () => {
    return (order.innerHTML = `
    <div class="order-item">
    <img height="155" width="150" src="images.jpg" alt="">
        <div class="order-detail">
            <h3>chicken biryani single box</h3>
        <div class="order-price">
        <h2>$12.99</h2>
        <div class="button">
        <i class="bi bi-dash"></i>
        <div class="quantity">0</div>
       <i class="bi bi-plus-lg"></i>
    </div>
  </div>         
 </div>
</div>

    `;
};

generateOrder();


