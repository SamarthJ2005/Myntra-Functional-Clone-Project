let bagItems;
onLoad();

function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
displayItemsOnHomePage();
displayBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
    
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0 ) {
        bagItemCountElement.style.visibility = 'visible';
       bagItemCountElement.innerText = bagItems.length;}
       else {
        bagItemCountElement.style.visibility = 'hidden';
       }
    
}

function displayItemsOnHomePage() {
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
    <button class="bag-button" onclick= "addToBag(${item.id})">Add to bag</button>
</div> `
});
itemContainerElement.innerHTML = innerHTML;
}
