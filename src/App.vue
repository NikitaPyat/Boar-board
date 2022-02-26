<template>
  <header class="app">
    <div class="app__inner">
      <h1>Канбан-доска</h1>
    </div>
  </header>
  <kanban-board />
</template>

<script>
import { defineComponent } from 'vue'
import kanbanBoard from './components/Board/KanbanBoard.vue'
export default defineComponent({
  name: 'App',
  components: {
    kanbanBoard
  }
})
</script>

<style>
@font-face {
  font-style: normal;
  font-weight: 400;
  font-family: "Muller";
  font-display: swap;
  src: local("Muller"), url("assets/fonts/MullerRegular.woff2") format("woff2"),
    url("assets/fonts/MullerRegular.woff") format("woff");
}

@font-face {
  font-style: normal;
  font-weight: 500;
  font-family: "Muller";
  font-display: swap;
  src: local("Muller"), url("assets/fonts/MullerMedium.woff2") format("woff2"),
    url("assets/fonts/MullerMedium.woff") format("woff");
}

@font-face {
  font-style: normal;
  font-weight: 700;
  font-family: "Muller";
  font-display: swap;
  src: local("Muller"), url("assets/fonts/MullerBold.woff2") format("woff2"),
    url("assets/fonts/MullerBold.woff") format("woff");
}

:root {
  --main-font: "Muller", "Helvetica", sans-serif;

  --main-blue: #2f80ed;
  --main-bg: #eef4fb;
  --text-main-color: #333333;
  --basket-red-color: #c9666c;

  --light-gray: #e3e3e3;
  --light-blue: #d6e7ff;
  --light-green: #d7f9e0;
  --light-red: #fbe3e3;
  --red: #c9666c;

  --btn-hover-color: #82b6ff;
  --btn-active-color: #0061e4;
  --btn-clear-hover-color: #d18d91;
  --btn-clear-active-color: #a04b50;

  --input-border-active-color: #82b6ff;
  --task-active-border-color: #d6d6d6;
  --inactive-color: #d0d0d0;

  --animation: 0.155s ease-in-out;
}

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

body {
  margin: 0;
  font-family: var(--main-font);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  color: #333333;
  margin: 0;
  padding: 0;
  min-width: 1280px;
}

html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

p,
h1{
  margin: 0;
  padding: 0;
}

template {
  display: none;
}

.app {
  padding: 24px 0;
  padding-bottom: 20px;

  color: #ffffff;
  background-color: var(--main-blue);
}

.app__inner {
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;
}

.app__inner h1 {
  font-size: 32px;
}
</style>
