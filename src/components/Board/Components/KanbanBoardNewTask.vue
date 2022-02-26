<template>
  <section class="kanban-board-new-task">
    <h2 class="kanban-board-new-task-visually-hidden">Добавить задачу</h2>
    <form class="kanban-board-new-task__form" aria-label="Форма добавления задачи">
      <div class="kanban-board-new-task__form__input-wrapper">
        <label for="kanban-board-new-task">Новая задача</label>
        <input
          type="text"
          name="task-name"
          v-model="newTask"
          id="kanban-board-new-task"
          placeholder="Название задачи..."
          required
        />
      </div>
      <button @click="addTask" class="kanban-board-new-task__form__button button" type="button" :disabled="newTask.length < 1">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10.0833"
            y="3.66663"
            width="1.83333"
            height="14.6667"
            fill="white"
          />
          <rect
            x="18.3333"
            y="10.0833"
            width="1.83333"
            height="14.6667"
            transform="rotate(90 18.3333 10.0833)"
            fill="white"
          />
        </svg>
        <span>Добавить</span>
      </button>
    </form>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask () {
      this.$store.commit('addItem', this.newTask)
      this.newTask = ''
    }
  }
})
</script>

<style scoped>

button {
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

.kanban-board-new-task {
  align-self: start;
  margin-bottom: 32px;
  padding: 25px 21px;

  background-color: #ffffff;
  border-radius: 16px;
}

.kanban-board-new-task label {
  margin-bottom: 15px;

  font-weight: 700;
  font-size: 24px;
  line-height: 1;

  user-select: none;
}

.kanban-board-new-task__form {
  display: flex;
  align-items: center;
}

.kanban-board-new-task__form__input-wrapper {
  display: flex;
  flex-direction: column;
}

.kanban-board-new-task__form input {
  width: 211px;
  margin-right: 17px;
  padding: 15px 11px;
  border: 1px solid #d6d6d6;
  border-radius: 8px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: var(--text-main-color);

  transition: var(--animation);
}

.kanban-board-new-task__form input:focus,
.kanban-board-new-task__form input:active {
  outline: none;
  border-color: var(--input-border-active-color);
}

.kanban-board-new-task__form input::placeholder {
  font-weight: 400;
  color: var(--inactive-color);
}

.kanban-board-new-task__form input:focus::placeholder {
  opacity: 0;
}

.kanban-board-new-task__form__button {
  align-self: flex-end;

  margin-bottom: 1px;

  background-color: var(--main-blue);
}

.kanban-board-new-task__form__button:disabled {
  background-color: var(--light-gray);
  cursor: initial;
}

.kanban-board-new-task-visually-hidden:not(:focus):not(:active),
input[type="checkbox"].visually-hidden,
input[type="radio"].visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;

  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
</style>
