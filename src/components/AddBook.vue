<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-6 bg-white shadow-md rounded-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Добавить новую книгу</h2>
      <form @submit.prevent="submitBook" class="space-y-4">
        <div>
          <label class="block text-gray-700">Название:</label>
          <input v-model="title" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text" />
        </div>
        <div>
          <label class="block text-gray-700">Автор:</label>
          <input v-model="author" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text" />
        </div>
        <div>
          <label class="block text-gray-700">Год издания:</label>
          <input v-model="year" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="number" />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Добавить книгу</button>
        <router-link to="/" class="block mt-4">
          <button class="w-full bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Вернуться на главную страницу</button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      title: '',
      author: '',
      year: ''
    };
  },
  methods: {
    ...mapActions(['addBook']),
    submitBook() {
      const book = {
        title: this.title,
        author: this.author,
        year: this.year
      };
      this.addBook(book);
      this.title = '';
      this.author = '';
      this.year = '';
    }
  }
};
</script>

<style scoped>
</style>
