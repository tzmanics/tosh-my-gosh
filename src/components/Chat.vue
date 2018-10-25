<template>
  <div class="chat">
    <div class="chat-area">
      <h3>Chat Time</h3> 
      <hr>
    </div>
    <div class="chat-body">
      <div class="messages">
      </div>
    </div>
    <div class="chat-footer">
      <form @submit.prevent="sendMessage">
	<div class="form-input">
	  <label for="user">User:</label>
	  <input type="text" v-model="user" class="form-control">
	  <label for="message">Message:</label>
	  <input type="text" v-model="message" class="form-control">
	</div>
	<button type="submit" class="button">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
