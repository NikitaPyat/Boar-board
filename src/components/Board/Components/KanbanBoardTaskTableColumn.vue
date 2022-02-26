<template>
  <div
    class="kanban-board-task-table-column task task--empty"
    v-if="items.filter((x) => x.categoryId === category.id).length === 0"
    @dragstart="onDragStart($event, item)"
    @drop="onDrop($event, category.id, item)"
    @dragover.prevent
    @dragenter.prevent
    draggable="true"
  >
    <p>
      {{ category.title === "Корзина" ? "Корзина пуста" : "Перетащите карточку" }}
    </p>
  </div>
  <div
    class="kanban-board-task-table-column__list"
    v-for="item in items.filter((x) => x.categoryId === category.id)"
    :key="item"
    @dragstart="onDragStart($event, item)"
    @drop="onDrop($event, category.id, item)"
    @dragover.prevent
    @dragenter.prevent
    draggable="true"
  >
    <div
      v-if="changeId !== item.id"
      :class="'kanban-board-task-table-column task task' + classes.filter(x => x.id === category.id)[0].className"
    >
      <div class="kanban-board-task-table-column__list__body">
        <p class="kanban-board-task-table-column__list__body__view">{{ item.title }}</p>
        <input class="kanban-board-task-table-column__list__body__view__input" type="text" value="Название первой задачи" />
      </div>
      <button
        class="kanban-board-task-table-column__list__body__view__input__edit"
        type="button"
        aria-label="Изменить"
        @click="changeId = item.id"/>
    </div>
    <div
      v-else
      :class="'kanban-board-task-table-column task task--active task' + classes.filter(x => x.id === category.id)[0].className"
    >
      <div class="kanban-board-task-table-column__list__body">
        <p class="kanban-board-task-table-column__list__body__view">{{ item.title }}</p>
        <input
          @keyup.enter="changeId = -1"
          v-model="item.title"
          class="kanban-board-task-table-column__list__body__view__input"
          type="text"
        />
      </div>
      <button class="kanban-board-task-table-column__list__body__view__input__edit" type="button" aria-label="Изменить"></button>
    </div>
  </div>

  <button
    class="taskboard__button button button--clear"
    @click="deleteItem"
    v-if="category.title === 'Корзина'"
    :disabled="items.filter((x) => x.categoryId === 3).length === 0"
    type="button"
  >
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="15.5374"
        y="5.16638"
        width="1.83333"
        height="14.6667"
        transform="rotate(45 15.5374 5.16638)"
        fill="white"
      />
      <rect
        x="16.8337"
        y="15.5372"
        width="1.83333"
        height="14.6667"
        transform="rotate(135 16.8337 15.5372)"
        fill="white"
      />
    </svg>
    <span>Очистить</span>
  </button>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    category: Object
  },
  setup () {
    const store = useStore()
    const changeId = ref(-1)

    const items = computed(function () {
      return store.getters.items
    })

    const classes = store.getters.classes

    function onDragStart (e, item) {
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('itemId', item.id.toString())
      e.dataTransfer.setData('itemCategoryId', item.categoryId.toString())
    }
    function onDrop (e, categoryId, item) {
      const itemId = parseInt(e.dataTransfer.getData('itemId'))
      const itemCategoryId = parseInt(e.dataTransfer.getData('itemCategoryId'))
      if (itemCategoryId !== categoryId) {
        items.value = items.value.map((x) => {
          if (x.id === itemId) {
            x.categoryId = categoryId
          }
          return x
        })
      } else {
        var swapItems = false
        items.value = items.value.map((x) => {
          if (x.id === itemId && swapItems === false) {
            var buf = x.title
            x.title = item.title
            item.title = buf
            swapItems = true
          }
          return x
        })
      }
    }
    function deleteItem () {
      this.$store.commit('deleteItems')
    }

    return {
      items,
      changeId,
      classes,
      onDragStart,
      onDrop,
      deleteItem
    }
  }
})
</script>

<style scoped>
.task {
  position: relative;
  width: 100%;
  padding: 16px 14px;
  display: flex;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;

  border-left: 6px solid var(--light-gray);
  border-radius: 8px;
  background-color: #ffffff;

  transition: var(--animation);
}

.task--processing {
  border-color: var(--light-blue);
}

.task--done {
  border-color: var(--light-green);
}

.task--basket {
  border-color: var(--light-red);
}

.task p {
  flex-grow: 1;
  position: relative;
  z-index: 2;
  word-break: break-word;
}

.task::after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -6px;
  right: 0;
  content: "";
  border: 0 solid var(--task-active-border-color);
  border-radius: 8px;
  transition: var(--animation);
  pointer-events: none;
}

.task--active::after {
  border-width: 1px;
}

.task--empty::after {
  display: none;
}

.kanban-board-task-table-column__list__body__view__input__edit {
  opacity: 0.7;
}

.kanban-board-task-table-column__list__body__view__input__edit:hover {
  opacity: 1;
}

.task--active .kanban-board-task-table-column__list__body__view__input__edit,
.task--active:hover .kanban-board-task-table-column__list__body__view__input__edit {
  opacity: 1;
  background-image: url("../assets/edit-active.svg");
}

.task--empty {
  padding: 15px 19px;
  color: var(--inactive-color);
  border: 1px dashed var(--inactive-color);
  background-color: transparent;
}

.task--empty:hover {
  cursor: default;
}

.kanban-board-task-table-column__list__body {
  flex: 1;
}

.kanban-board-task-table-column__list__body__view__input__edit {
  position: relative;
  z-index: 2;
  margin-left: 8px;
  flex-shrink: 0;
  padding: 0;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: var(--animation);
  background-image: url("../assets/edit.svg");
  opacity: 0;
}

.kanban-board-task-table-column__list__body__view__input__edit:active,
.kanban-board-task-table-column__list__body__view__input__edit:focus {
  outline: none;
}

.task--empty-trash {
  margin-bottom: 8px;
}

.kanban-board-task-table-column__list__body__view__input {
  display: none;
  height: 24px;
  width: 100%;
  padding: 0 4px;
  border-radius: 4px;
  border: 1px solid #d6d6d6;
  color: var(--text-main-color);
  transition: var(--animation);
}

.kanban-board-task-table-column__list__body__view__input:focus,
.kanban-board-task-table-column__list__body__view__input:active {
  outline: none;
  border-color: var(--input-border-active-color);
}

.kanban-board-task-table-column__list__body__view {
  padding: 2px 0;
}

.task--active .kanban-board-task-table-column__list__body__view {
  display: none;
}

.task--active .kanban-board-task-table-column__list__body__view__input {
  display: block;
}
.kanban-board-task-table-column__list {
  margin: 0;
  padding: 0;
  /* max-height: calc(100% - 56px); */
  list-style: none;
}

.taskboard__button {
  margin-top: 8px;
  width: 100%;
  padding: 0;
  justify-content: center;
}

.kanban-board-task-table-column {
  margin-bottom: 8px;
}

.kanban-board-task-table-column__list--trash li:last-of-type {
  margin-bottom: 0;
}

.button {
  display: flex;
  align-items: center;
  border: none;
  min-width: 165px;
  min-height: 46px;
  padding-left: 31px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  border-radius: 8px;
  transition: var(--animation);

  cursor: pointer;
}

.button--clear {
  background-color: var(--red);
}

.button--clear:hover {
  background-color: var(--btn-clear-hover-color);
}

.button--clear:active,
.button--clear:focus {
  background-color: var(--btn-clear-active-color);
}

.button--clear:disabled {
  background-color: var(--light-gray);
  cursor: initial;
}

</style>
