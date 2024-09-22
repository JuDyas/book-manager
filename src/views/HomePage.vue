<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-6 bg-white shadow-md rounded-lg w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-gray-800 text-center">Менеджер книг</h1>
      <ul class="space-y-2">
        <li>
          <router-link to="/add-book" class="text-blue-500 hover:underline">Добавить новую книгу</router-link>
        </li>
        <li>
          <router-link to="/view-books" class="text-blue-500 hover:underline">Просмотреть все книги</router-link>
        </li>
        <li>
          <router-link to="/upload-books" class="text-blue-500 hover:underline">Ввести данные о книгах из файла</router-link>
        </li>
        <li>
          <router-link to="/save-books" class="text-blue-500 hover:underline">Записать данные о книгах в файл</router-link>
        </li>
        <li>
          <router-link to="/sort-search-books" class="text-blue-500 hover:underline">Сортировка и поиск книг</router-link>
        </li>
        <li>
          <router-link to="/insert-book-before" class="text-blue-500 hover:underline">Вставить Новую книгу перед выбранным элементом</router-link>
        </li>
        <li>
          <router-link to="/insert-book-after" class="text-blue-500 hover:underline">Вставить Новую книгу после выбранного элемента</router-link>
        </li>
        <li>
          <router-link to="/replace-book" class="text-blue-500 hover:underline">Заменить выбраную книгу</router-link>
        </li>
        <li>
          <router-link to="/delete-books" class="text-blue-500 hover:underline">Удалить книги, начиная с выбранного элемента</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
</style>
