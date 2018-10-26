<template>
  <div class="chat">
    <div class="chat-area">
      <h3>Chat Time</h3> 
      <hr>
    </div>
    <div class="chat-body">
      <div class="messages" v-for="(msg, index) in messages" :key="index">
        <p>{{ msg.user }}: {{ msg.message }}</p>
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
import io from 'socket.io-client'
export default {
  data () {
    return {
      user: '',
      message: '',
      messages: [],
      socket: io('localhost:3001')
    }
  },
  methods: {
    sendMessage (e) {
      e.preventDefault()

      this.socket.emit('SEND_MESSAGE', {
        user: this.user,
        message: this.message
      })
      this.message = ''
    }
  },
  mounted () {
    this.socket.on('MESSAGE', (data) => {
      this.messages = [...this.messages, data]
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
