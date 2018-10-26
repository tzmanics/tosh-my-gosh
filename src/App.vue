<template>
  <div id="app">
    <header>
      <span>toshojis!</span>
    </header>
    <main>
      <Chat />
    </main>
  </div>
</template>

<script>
import Chat from './components/Chat'

export default {
  name: 'app',
  components: {
    Chat
  }
}
</script>

<style>
body {
  background-image: url("https://bit.ly/2D5CyNO");
  font-size: 26px;
  margin: 0;
}

#app {
  font-family: 'Abril Fatface', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  margin-top: 40px;
  text-align: center;
}

header {
  background-color: lightgrey;
  height: 56px;
  margin: 0;
  padding: 0 16px 0 24px;
}

header span {
  display: block;
  position: relative;
  font-size: 26px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
