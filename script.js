// Функция для отображения страницы меню
function showMenu(category) {
  window.location.href = `menu_items.html?category=${category}`;
}

// Функция для получения случайной категории и перехода на её страницу
function getRandomCategory() {
  const categoriesUrl = "categories.json";

  // Выполняем AJAX-запрос для получения списка категорий
  fetch(categoriesUrl)
    .then(response => response.json())
    .then(categories => {
      if (categories.length === 0) {
        console.error("Список категорий пуст.");
        return;
      }

      // Выбираем случайную категорию
      const randomIndex = Math.floor(Math.random() * categories.length);
      const randomCategory = categories[randomIndex];

      // Перенаправляем на страницу случайной категории
      window.location.href = `menu_items.html?category=${randomCategory.short_name}`;
    })
    .catch(error => console.error("Ошибка при получении категорий:", error));
}

// Функция для отображения карты
function showMap() {
  // Перенаправляем пользователя на страницу карты
  window.location.href = "map.html";
}
