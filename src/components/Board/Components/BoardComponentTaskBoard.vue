<template>
  <section class="taskboard">
    <article v-for="state in tasksForTaskBoard" :key="state">
      <h3 :class="'taskboard__group-heading taskboard__group-heading' + state.class">
        {{ state.stateName }}
      </h3>
      <div class="taskboard__list" v-for="task in state.tasks" :key="task">
        <div :class="'taskboard__item task task' + state.class">
          <div class="task__body">
            <p class="task__view">{{ task }}</p>
            <input
              class="task__input"
              type="text"
              value="Название первой задачи"
            />
          </div>
          <button
            class="task__edit"
            type="button"
            aria-label="Изменить"
          ></button>
        </div>
      </div>
      <button v-if="state.stateName === 'Корзина'" class="taskboard__button button button--clear" type="button">
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
    </article>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
//  import boardComponentAddTask from './Components/BoardComponentAddTask.vue'
export default defineComponent({
  props: {
    tasksForTaskBoard: {
      type: Object,
      required: true
    }
  }
/*  components: {
    boardComponentAddTask
  } */
})
</script>

<style scoped>
.visually-hidden:not(:focus):not(:active),
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

.task:hover {
  cursor: pointer;
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

.task:hover::after,
.task--active::after {
  border-width: 1px;
}

.task--empty::after {
  display: none;
}

.task:hover .task__edit {
  opacity: 0.7;
}

.task:hover .task__edit:hover {
  opacity: 1;
}

.task--active .task__edit,
.task--active:hover .task__edit {
  opacity: 1;
  background-image: url("../assets/edit-active.svg");
}

.task--dragged {
  /*filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));*/
  padding: 16px 14px;
  color: var(--inactive-color);
  border: 1px dashed var(--inactive-color);
  background-color: transparent;
}

.task--dragged::after {
  display: none;
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

.task__body {
  flex: 1;
}

.task__edit {
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

.task__edit:active,
.task__edit:focus {
  outline: none;
}

.task--empty-trash {
  margin-bottom: 8px;
}

.hidden-block {
  display: none;
}

.task__input {
  display: none;
  height: 24px;
  width: 100%;
  padding: 0 4px;
  border-radius: 4px;
  border: 1px solid #d6d6d6;
  color: var(--text-main-color);
  transition: var(--animation);
}

.task__input:focus,
.task__input:active {
  outline: none;
  border-color: var(--input-border-active-color);
}

.task__view {
  padding: 2px 0;
}

.task--active .task__view {
  display: none;
}

.task--active .task__input {
  display: block;
}

.taskboard {
  width: 100%;
  /* height: calc(100vh - 345px); */
  display: flex;
  justify-content: space-between;
}

.taskboard__list {
  margin: 0;
  padding: 0;
  /* max-height: calc(100% - 56px); */
  list-style: none;
}

.taskboard__group-heading {
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

.taskboard__group-heading--backlog {
  color: #6a6a6a;
  background-color: var(--light-gray);
}

.taskboard__group-heading--processing {
  color: var(--main-blue);
  background-color: var(--light-blue);
}

.taskboard__group-heading--done {
  color: #65b670;
  background-color: var(--light-green);
}

.taskboard__group-heading--basket {
  color: var(--red);
  background-color: var(--light-red);
}

.taskboard__item {
  margin-bottom: 8px;
}

.taskboard__group {
  width: calc((100% - (40px * 3)) / 4);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.taskboard__button {
  margin-top: 8px;
  width: 100%;
  padding: 0;
  justify-content: center;
}

.taskboard__group--trash .taskboard__list {
  max-height: calc(100% - 55px - 54px);
}

.taskboard__list--trash li:last-of-type {
  margin-bottom: 0;
}
</style>
