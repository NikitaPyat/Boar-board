<template>
  <div class="kanban-board">
    <div class="kanban-board__main">
      <div class="kanban-board__inner">
        <kanban-board-new-task/>
        <kanban-board-task-table />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import kanbanBoardNewTask from './Components/KanbanBoardNewTask.vue'
import kanbanBoardTaskTable from './Components/KanbanBoardTaskTable.vue'
export default defineComponent({
  components: {
    kanbanBoardNewTask,
    kanbanBoardTaskTable
  }
})
</script>

<style scoped>
.kanban-board__inner {
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;
}

.kanban-board__inner h1 {
  font-size: 32px;
}

.kanban-board {
  height: auto;
}

.kanban-board__main {
  padding: 48px 0;
  background-color: var(--main-bg);
  min-height: calc(100vh - 80px);
}
</style>
