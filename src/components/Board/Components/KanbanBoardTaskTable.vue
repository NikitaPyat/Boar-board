<template>
  <section class="kanban-board-task-table">
      <article
        v-for="category in categories"
        :key="category"
      >
        <h3 :class="'kanban-board-task-table__group-heading kanban-board-task-table__group-heading' + category.class">
          {{ category.title }}
        </h3>
        <kanban-board-task-table-column :category="category"/>
      </article>
  </section>
</template>

<script>

import kanbanBoardTaskTableColumn from './KanbanBoardTaskTableColumn.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    kanbanBoardTaskTableColumn
  },
  setup () {
    const categories = ref([
      {
        id: 0,
        title: 'Бэклог'
      },
      {
        id: 1,
        title: 'В процессе'
      },
      {
        id: 2,
        title: 'Готово'
      },
      {
        id: 3,
        title: 'Корзина'
      }
    ])
    return {
      categories
    }
  }
})
</script>

<style scoped>
.kanban-board-task-table {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.kanban-board-task-table__group-heading {
  align-self: flex-start;
  margin-bottom: 16px;
  padding: 10px 18px;
  padding-top: 12px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  border-radius: 8px;
  cursor: default;
  user-select: none;
}

.kanban-board-task-table__group-heading--backlog {
  color: #6a6a6a;
  background-color: var(--light-gray);
}

.kanban-board-task-table__group-heading--processing {
  color: var(--main-blue);
  background-color: var(--light-blue);
}

.kanban-board-task-table__group-heading--done {
  color: #65b670;
  background-color: var(--light-green);
}

.kanban-board-task-table__group-heading--basket {
  color: var(--red);
  background-color: var(--light-red);
}
</style>
