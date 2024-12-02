const itemList = document.querySelector('#item-list');
const addItemBtn = document.querySelector('#add-item-btn');

addItemBtn.addEventListener('click', () => {
  const currentItems = itemList.children.length;

  const newItem = document.createElement('li');
  newItem.textContent = `New Item ${currentItems + 1}`;

  if ((currentItems + 1) % 2 === 0) {
    newItem.classList.add('even');
  } else {
    newItem.classList.add('odd');
  }

  itemList.appendChild(newItem);
});
