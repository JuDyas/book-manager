<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-6 bg-white shadow-md rounded-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Удалить книги с выбранного индекса</h2>
      <form @submit.prevent="deleteBooks" class="space-y-4">
        <div>
          <label class="block text-gray-700">Введите индекс:</label>
          <input v-model.number="index" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="number" />
        </div>
        <button type="submit" class="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Удалить книги</button>
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
      index: 0
    };
  },
  methods: {
    ...mapActions(['deleteBooksFromIndex']),
    deleteBooks() {
      if (this.index >= 0) {
        this.deleteBooksFromIndex(this.index);
        this.index = 0; // сбросить индекс после удаления
      } else {
        alert('Индекс должен быть положительным числом');
      }
    }
  }
};
</script>

<style scoped>
</style>
