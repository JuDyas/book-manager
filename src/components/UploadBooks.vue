<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-6 bg-white shadow-md rounded-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Импортировать данные о книгах</h2>
      <input type="file" @change="onFileChange" class="mb-4 w-full" />
      <button @click="uploadBooks" class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Импортировать книги</button>
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
      file: null,
      books: []
    };
  },
  methods: {
    ...mapActions(['importBooks']),
    onFileChange(event) {
      this.file = event.target.files[0];
    },
    uploadBooks() {
      if (this.file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const text = e.target.result;
          this.parseBooks(text);
        };
        reader.readAsText(this.file);
      } else {
        alert('Пожалуйста, выберите файл');
      }
    },
    parseBooks(text) {
      const lines = text.split('\n');
      const books = lines.map(line => {
        const parts = line.split(',');
        if (parts.length === 3) {
          const [title, author, year] = parts;
          return {
            title: title.trim(),
            author: author.trim(),
            year: parseInt(year.trim())
          };
        } else {
          // Если формат строки некорректен, пропустим эту строку
          console.error(`Некорректный формат строки: ${line}`);
          return null;
        }
      }).filter(book => book !== null); // Удаляем некорректные строки из массива
      this.importBooks(books);
      alert('Книги успешно импортированы');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
</style>
