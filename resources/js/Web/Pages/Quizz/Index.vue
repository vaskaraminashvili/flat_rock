<template>
    <div class="container">
      <div class="row">
          <div class="col-xl-4 pt-4" v-for="quiz in quizzes" :key="quiz.id">
            <div class="card bg-light mb-3" style="max-width: 20rem;">
              <div class="card-header">{{ quiz.title }}</div>
              <div class="card-body">
                <h4 class="card-title">MAx Score {{quiz.score}}</h4>
                <p class="card-text">{{quiz.description}}</p>
                <Link :href="route('takeQuiz', quiz.id)" class="btn btn-success">Take quiz</Link>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
      props: {
        quizzes: Object,
      },
    }
</script>

<style scoped>

</style>
