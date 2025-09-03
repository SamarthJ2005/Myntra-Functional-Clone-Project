let itemContainerElement = document.querySelector('.items-container');

let innerHTML = '';
items.forEach(item => {
    innerHTML += `
 <div class="item-container">
    <img class="item-image" src="${item.item_image}" alt="item image">
    <div class="rating">
     ${item.rating.stars}⭐ │ ${item.rating.reviews}
    </div>
    <div class="company-name">${item.company_name}</div>
    <div class="product-name">${item.product_name}</div>
    <div class="pricing">
    <span class="discounted-price"> Rs ${item.discounted_price}</span>
    <span class="original-price"> Rs ${item.original_price}</span>
    <span class="discount">${item.discount}% OFF</span>
    </div>
    <button class="bag-button">Add to bag</button>
</div> `
});
itemContainerElement.innerHTML = innerHTML;
