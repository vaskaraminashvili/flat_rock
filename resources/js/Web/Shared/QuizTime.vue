<template>
  <div>
    {{ quizTimer }}
  </div>
</template>

<script>
export default {
  props: {
    minutes: Number,
  },
  data() {
    return {
      timerCount: this.minutes * 60,
      saved_countdown: localStorage.getItem('saved_countdown'),
    }
  },
  methods: {
    countDownTimer() {
      console.log(this.saved_countdown)
      if (this.saved_countdown > 0) {
        setTimeout(() => {
          this.saved_countdown -= 1
          localStorage.setItem('saved_countdown', this.saved_countdown);
          this.countDownTimer()
        }, 1000)
      } else {
        this.$emit('timeFinished');
      }
    },
  },
  computed: {
    quizTimer() {
      let time = this.saved_countdown;
      let minutes = parseInt(time / 60, 10) % 60;
      let seconds = time % 60;
      return "" + minutes + ':' + seconds;
    }
  },
  created() {
    if(this.saved_countdown == null) {
      localStorage.setItem('saved_countdown', this.timerCount);
    }
    this.countDownTimer()
  }
}
</script>

<style scoped>

</style>
