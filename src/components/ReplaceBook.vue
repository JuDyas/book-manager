<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-6 bg-white shadow-md rounded-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Заменить выбранную книгу</h2>
      <form @submit.prevent="replaceBook" class="space-y-4">
        <div>
          <label class="block text-gray-700">Индекс:</label>
          <input v-model.number="index" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="number" required />
        </div>
        <div>
          <label class="block text-gray-700">Название:</label>
          <input v-model="title" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text" required />
        </div>
        <div>
          <label class="block text-gray-700">Автор:</label>
          <input v-model="author" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text" required />
        </div>
        <div>
          <label class="block text-gray-700">Год издания:</label>
          <input v-model.number="year" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="number" required />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Заменить книгу</button>
      </form>
      <router-link to="/" class="block mt-4">
        <button class="w-full bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Вернуться на главную страницу</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      index: 0,
      title: '',
      author: '',
      year: ''
    };
  },
  methods: {
    ...mapActions(['replaceBook']),
    replaceBook() {
      const book = {
        title: this.title,
        author: this.author,
        year: this.year
      };
      this.replaceBook({ index: this.index, book });
      alert('Книга успешно заменена');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
</style>
