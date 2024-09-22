import { createStore } from 'vuex';

export default createStore({
    state: {
        books: JSON.parse(localStorage.getItem('books')) || []
    },
    mutations: {
        setBooks(state, books) {
            state.books = books;
            localStorage.setItem('books', JSON.stringify(state.books));
        },
        addBook(state, book) {
            state.books.push(book);
            localStorage.setItem('books', JSON.stringify(state.books));
        },
        updateBook(state, { index, book }) {
            state.books.splice(index, 1, book);
            localStorage.setItem('books', JSON.stringify(state.books));
        },
        deleteBooksFromIndex(state, index) {
            state.books.splice(index, state.books.length - index);
            localStorage.setItem('books', JSON.stringify(state.books));
        },
        insertBookBefore(state, { index, book }) {
            if (index >= 0 && index < state.books.length) {
                state.books.splice(index, 0, book);
                localStorage.setItem('books', JSON.stringify(state.books));
            } else {
                alert('Некорректный индекс');
            }
        },
        insertBookAfter(state, { index, book }) {
            if (index >= 0 && index < state.books.length) {
                state.books.splice(index + 1, 0, book);
                localStorage.setItem('books', JSON.stringify(state.books));
            } else {
                alert('Некорректный индекс');
            }
        },
        replaceBook(state, { index, book }) {
            if (index >= 0 && index < state.books.length) {
                state.books.splice(index, 1, book);
                localStorage.setItem('books', JSON.stringify(state.books));
            } else {
                alert('Некорректный индекс');
            }
        }
    },
    actions: {
        importBooks({ commit }, books) {
            commit('setBooks', books);
        },
        exportBooks({ state }) {
            return state.books;
        },
        addBook({ commit }, book) {
            commit('addBook', book);
        },
        updateBook({ commit }, payload) {
            commit('updateBook', payload);
        },
        deleteBooksFromIndex({ commit }, index) {
            commit('deleteBooksFromIndex', index);
        },
        insertBookBefore({ commit }, payload) {
            commit('insertBookBefore', payload);
        },
        insertBookAfter({ commit }, payload) {
            commit('insertBookAfter', payload);
        },
        replaceBook({ commit }, payload) {
            commit('replaceBook', payload);
        }
    },
    getters: {
        allBooks: state => state.books,
        bookByIndex: state => index => state.books[index],
        maxYear: state => Math.max(...state.books.map(book => book.year)),
        minYear: state => Math.min(...state.books.map(book => book.year)),
        averageYear: state => {
            const total = state.books.reduce((acc, book) => acc + book.year, 0);
            return total / state.books.length;
        }
    }
});
