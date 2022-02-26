import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
  state () {
    return {
      counter: 0,
      items: [
        {
          id: 0,
          title: 'Выучить React',
          categoryId: 0
        },
        {
          id: 1,
          title: 'Сделать домашку',
          categoryId: 0
        },
        {
          id: 2,
          title: 'завести кота',
          categoryId: 0
        },
        {
          id: 3,
          title: 'Выпить смузи',
          categoryId: 1
        },
        {
          id: 4,
          title: 'Перестать тупить',
          categoryId: 1
        },
        {
          id: 5,
          title: 'Выучить JS',
          categoryId: 1
        },
        {
          id: 6,
          title: 'Позвонить маме',
          categoryId: 2
        },
        {
          id: 7,
          title: 'Погладить кекса',
          categoryId: 2
        },
        {
          id: 8,
          title: 'Сходить погулять',
          categoryId: 3
        },
        {
          id: 9,
          title: 'Прочитать Войну и Мир',
          categoryId: 3
        }
      ],
      classes: [
        {
          id: 0,
          className: '--backlog'
        },
        {
          id: 1,
          className: '--processing'
        },
        {
          id: 2,
          className: '--done'
        },
        {
          id: 3,
          className: '--basket'
        }
      ]
    }
  },
  mutations: {
    addItem (state, itemName) {
      state.items.push({
        id: state.items.length > 0 ? state.items[state.items.length - 1].id + 1 : 0,
        title: itemName,
        categoryId: 0
      })
    },

    deleteItems (state) {
      state.items = state.items.filter(x => x.categoryId !== 3)
    }
  },
  getters: {
    items (state) {
      return state.items
    },
    classes (state) {
      return state.classes
    }
  }
})

createApp(App).use(store).mount('#app')
