const categoriesListEls = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesListEls.length}`);

categoriesListEls.forEach(category => {
  const categoryTitleEl = category.querySelector('h2');
  const categoryItemsEl = category.querySelectorAll('li');

  console.log(`Category: ${categoryTitleEl.textContent}`);
  console.log(`Elements: ${categoryItemsEl.length}`);
});
