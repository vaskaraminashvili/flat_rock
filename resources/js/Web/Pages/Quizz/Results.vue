<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-12">
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col">Quiz Name</th>
            <th scope="col">Max Score</th>
            <th scope="col">Answered Questions</th>
            <th scope="col">Correct Answers</th>
          </tr>
          </thead>
          <tbody>

          <tr v-for="(result,index) in user.results" :key="index">
            <th>{{ result.quiz.title }}</th>
            <td>{{ result.quiz.score }}</td>
            <td>{{ result.answered_questions }}</td>
            <td>{{ result.score }}</td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <Link :href="route('takeQuiz' , quiz.id)">Restart Quiz</Link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  data() {
    return {
      quiz : this.user.results[0].quiz
    }
  },
}
</script>

<style scoped>

</style>
