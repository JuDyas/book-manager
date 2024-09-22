import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AddBook from '../components/AddBook.vue';
import ViewBooks from '../components/ViewBooks.vue';
import DeleteBooksFrom from '../components/DeleteBooksFrom.vue';
import UploadBooks from '../components/UploadBooks.vue';
import SaveBooks from '../components/SaveBooks.vue';
import SortSearchBooks from '../components/SortSearchBooks.vue';
import InsertBookBefore from '../components/InsertBookBefore.vue';
import InsertBookAfter from '../components/InsertBookAfter.vue';
import ReplaceBook from '../components/ReplaceBook.vue';
// Импорт других компонентов

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/add-book', name: 'AddBook', component: AddBook },
    { path: '/view-books', name: 'ViewBooks', component: ViewBooks },
    { path: '/delete-books', name: 'DeleteBooksFrom', component: DeleteBooksFrom },
    { path: '/upload-books', name: 'UploadBooks', component: UploadBooks },
    { path: '/save-books', name: 'SaveBooks', component: SaveBooks },
    { path: '/sort-search-books', name: 'SortSearchBooks', component: SortSearchBooks },
    { path: '/insert-book-before', name: 'InsertBookBefore', component: InsertBookBefore },
    { path: '/insert-book-after', name: 'InsertBookAfter', component: InsertBookAfter },
    { path: '/replace-book', name: 'ReplaceBook', component: ReplaceBook },
    // Другие маршруты
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
