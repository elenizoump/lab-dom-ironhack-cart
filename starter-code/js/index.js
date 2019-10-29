// ITERATION 1

function updateSubtotal($productNode) {
  const $priceNode = $productNode.querySelector(".price span");
  const $quantityNode = $productNode.querySelector(".quantity input");
  const priceValue = Number($priceNode.innerText);
  const quantityValue = $quantityNode.valueAsNumber;

  const subTotalValue = priceValue * quantityValue;
  const $subtotalNode = $productNode.querySelector(".subtotal span");
  $subtotalNode.innerText = subTotalValue;
  return subTotalValue;
};


function calculateAll($product) {
  const $allProducts = document.querySelectorAll(".product");
  let totalValue = 0;
  $allProducts.forEach($product => {
    totalValue += updateSubtotal($product);
  })
  document.querySelector("#total-value span").innerText = totalValue;

};


const $calculateTrigger = document.getElementById('calculate');

$calculateTrigger.addEventListener('click', calculateAll);

// ITERATION 4

function addProductRemoveListener($removeButton) {
  // ...
}

// ITERATION 5

function createProduct(event) {
  // ...
}