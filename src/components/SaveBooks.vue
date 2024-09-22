<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-6 bg-white shadow-md rounded-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Экспортировать данные о книгах</h2>
      <button @click="saveBooks" class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Экспортировать книги</button>
      <router-link to="/" class="block mt-4">
        <button class="w-full bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Вернуться на главную страницу</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['allBooks'])
  },
  methods: {
    saveBooks() {
      const books = this.allBooks;
      const text = books.map(book => `${book.title}, ${book.author}, ${book.year}`).join('\n');
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'books.txt';
      a.click();
      URL.revokeObjectURL(url);
    }
  }
};
</script>

<style scoped>
</style>
