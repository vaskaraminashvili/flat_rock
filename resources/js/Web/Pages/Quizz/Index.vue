<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-4 pt-4" v-for="quiz in quizzes" :key="quiz.id">
        <div class="card bg-light mb-3" style="max-width: 20rem;">
          <div class="card-header">{{ quiz.title }}</div>
          <div class="card-body">
            <h4 class="card-title">MAx Score {{ quiz.score }}</h4>
            <p class="card-text">{{ quiz.description }}</p>
            <Link :href="route('takeQuiz', quiz.id)" class="btn btn-success">Take quiz</Link>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <h2>Top Scores</h2>
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col">Quiz</th>
            <th scope="col">User</th>
            <th scope="col">Score</th>
            <th scope="col">Time Used</th>
            <th scope="col">Take quiz</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="result in results" :key="result.id">
            <td>{{ result.quiz.title }}</td>
            <td>{{ result.site_user.name }}</td>
            <td>{{ result.score }}</td>
            <td>{{ result.dateDiff / 60 }} Minutes</td>
            <td>
              <Link :href="route('takeQuiz', result.quiz.id) "> Take Quiz</Link>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quizzes: Object,
    results: Object,
  },


}
</script>

<style scoped>

</style>
