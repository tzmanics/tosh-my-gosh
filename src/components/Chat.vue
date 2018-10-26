<template>
  <div class="chat">
    <div class="chat-body">
      <div class="messages" v-for="(msg, index) in messages" :key="index">
        <p>from: {{msg.user}}</p>
        <img :src="msg.message" alt="toshoji">
      </div>
    </div>
    <div class="chat-footer">
      <form @submit.prevent="sendMessage">
      	<div class="form-input">
      		<label for="user">your name:</label>
      		<input type="text" v-model="user" class="form-control">
        	<button type="submit" class="button">send random toshoji</button>
        </div>
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
      socket: io('https://tosh-my-gosh-lpdetzwyjk.now.sh'),
      toshiGallery: [
        'https://bit.ly/2CFJPD0',
        'https://bit.ly/2ENbN2u',
        'https://bit.ly/2Rh2toD',
        'https://bit.ly/2OR9PT4',
        'https://bit.ly/2CFsQkdi',
        'https://bit.ly/2qbmgun',
        'https://bit.ly/2O8aLgC',
        'https://bit.ly/2z1YwNp',
        'https://bit.ly/2CHUH35',
        'https://bit.ly/2JigmAn',
        'https://bit.ly/2OQxUcH',
        'https://bit.ly/2PSSSUV',
        'https://tinyurl.com/yam6wx7e',
        'https://tinyurl.com/yb8jmdms',
        'https://tinyurl.com/ya5ag5zr',
        'https://tinyurl.com/ybu5fhdw'
      ]
    }
  },
  methods: {
    sendMessage (e) {
      e.preventDefault()
      this.socket.emit('SEND_MESSAGE', {
        user: this.user,
        message: this.toshiGallery[Math.floor(Math.random() * 16) + 1]
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
  .chat{
    font-family: 'Amatic SC', cursive;
  }
  button {
    background-color: white;
    border: none;
    font-family: 'Amatic SC', cursive;
    font-size: 25px;
    padding: 5px;
    position: relative;
    top: 2px;
  }
  input {
    height: 35px;
    position: relative;
    top: -4px;
  }
  img {
    max-width: 200px;
  }
</style>
