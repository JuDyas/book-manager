<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-6 bg-white shadow-md rounded-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Список книг</h2>
      <ul class="space-y-4">
        <li v-for="(book, index) in allBooks" :key="index" class="p-4 bg-gray-50 rounded-md shadow-sm">
          <div>
            <strong>Название:</strong> {{ book.title }}
          </div>
          <div>
            <strong>Автор:</strong> {{ book.author }}
          </div>
          <div>
            <strong>Год издания:</strong> {{ book.year }}
          </div>
        </li>
        <router-link to="/" class="block mt-4">
          <button class="w-full bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Вернуться на главную страницу</button>
        </router-link>
      </ul>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['allBooks'])
  }
};
</script>

<style scoped>
</style>
