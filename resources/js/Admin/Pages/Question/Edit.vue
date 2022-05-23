<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-4">
          <h5 class="card-header">Create Question</h5>
          <div class="card-body">
            <form @submit.prevent="update">

              <div class="mb-3">
                <label for="quiz_id" class="form-label">Choose Quiz</label>
                <select class="form-select" id="quiz_id" v-model="form.quiz_id">
                  <option disabled value="">Open this select menu</option>

                  <option v-for="quiz in quizzes" :key="quiz.id" v-text="quiz.title" :value="quiz.id"></option>
                </select>
                <div v-if="form.errors.quiz_id">{{ form.errors.quiz_id }}</div>
              </div>
              <div class="mb-3">
                <label for="question" class="form-label">Question</label>
                <input
                  v-model.trim="form.question"
                  type="text"
                  class="form-control"
                  id="question"
                  placeholder="Title"
                />
                <div v-if="form.errors.question">{{ form.errors.question }}</div>
              </div>
              <div class="mb-3">
                <label for="number" class="form-label">Score</label>
                <input
                  v-model.number="form.score"
                  type="number"
                  class="form-control"
                  id="number"
                  placeholder="Time for Quizz In Munutes"
                />
                <div v-if="form.errors.score">{{ form.errors.score }}</div>
              </div>
              <div class="mb-3">
                <div class="col-md">
                  <small class="text-light fw-semibold d-block">Question Type</small>
                  <div class="form-check form-check-inline mt-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="Binary"
                      v-model="form.type"
                    />
                    <label class="form-check-label" for="inlineRadio1">Binary</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="Multiple choice"
                      v-model="form.type"
                    />
                    <label class="form-check-label" for="inlineRadio2">Multiple choice</label>
                  </div>

                </div>

                <div v-if="form.errors.type">{{ form.errors.type }}</div>
              </div>


              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="active" v-model="form.active"
                       true-value="1"
                       false-value="0"/>
                <label class="form-check-label" for="active"> Active </label>
              </div>
              <div class="d-flex justify-content-end">
                <button class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import route from "ziggy-js";

export default {
  props: {
    question: Object,
    quizzes: Object,
  },
  data() {
    return {
      form: this.$inertia.form({
        quiz_id: this.question.quiz_id,
        question: this.question.question,
        type: this.question.type,
        score: this.question.score,
        active: this.question.active,
      }),
    }
  },
  methods: {

    update() {
      this.form.patch(route('admin.questions.update', this.question.id), {
        preserveScroll: true,
      });
    }
  },
}
</script>

<style scoped>

</style>
