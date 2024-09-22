<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-6 bg-white shadow-md rounded-lg w-full max-w-4xl">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Сортировка и поиск книг</h2>
      <div class="mb-4">
        <button @click="sortBooks" class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Сортировать книги по году</button>
      </div>
      <div class="mb-4">
        <input v-model="searchQuery" placeholder="Введите название книги" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text" />
        <button @click="searchBook" class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-2">Найти книгу</button>
      </div>
      <div v-if="searchResult" class="mt-4 p-4 bg-gray-50 rounded-md shadow-md">
        <h3 class="text-xl font-bold">Результаты поиска:</h3>
        <p><strong>Название:</strong> {{ searchResult.title }}</p>
        <p><strong>Автор:</strong> {{ searchResult.author }}</p>
        <p><strong>Год издания:</strong> {{ searchResult.year }}</p>
      </div>
      <router-link to="/" class="block mt-4">
        <button class="w-full bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Вернуться на главную страницу</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      searchQuery: '',
      searchResult: null
    };
  },
  computed: {
    ...mapGetters(['allBooks'])
  },
  methods: {
    ...mapActions(['setBooks']),
    sortBooks() {
      const sortedBooks = [...this.allBooks].sort((a, b) => a.year - b.year);
      this.setBooks(sortedBooks);
      alert('Книги отсортированы по году издания');
    },
    searchBook() {
      const book = this.allBooks.find(book => book.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
      if (book) {
        this.searchResult = book;
      } else {
        this.searchResult = null;
        alert('Книга не найдена');
      }
    }
  }
};
</script>

<style scoped>
</style>
