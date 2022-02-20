<template>
  <div class="board-app">
    <div class="board-app__main">
      <div class="board-app__inner">
        <board-component-add-task @task="addTask"/>
        <board-component-task-board v-model:tasksForTaskBoard="states"/>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import boardComponentAddTask from './Components/BoardComponentAddTask.vue'
import boardComponentTaskBoard from './Components/BoardComponentTaskBoard.vue'
export default defineComponent({
  data () {
    return {
      states: {
        backlog: {
          stateName: 'Бэклог',
          class: '--backlog',
          tasks: ['1 задача', '2 задача', '3 задача']
        },
        inProcess: {
          stateName: 'В процессе',
          class: '--processing',
          tasks: ['1 задача', '2 задача', '3 задача']
        },
        finished: {
          stateName: 'Готово',
          class: '--done',
          tasks: ['1 задача', '2 задача', '3 задача']
        },
        bin: {
          stateName: 'Корзина',
          class: '--basket',
          tasks: ['1 задача', '2 задача', '3 задача']
        }
      }
    }
  },
  components: {
    boardComponentAddTask,
    boardComponentTaskBoard
  },

  methods: {
    addTask (newTask) {
      console.log(newTask)
      this.states.backlog.tasks.add(newTask)
    }
  }
})
</script>

<style scoped>

.board-app__inner {
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;
}

.board-app__inner h1 {
  font-size: 32px;
}

.board-app {
  height: auto;
}

.board-app__main {
  padding: 48px 0;
  background-color: var(--main-bg);
  min-height: calc(100vh - 80px);
}

</style>
