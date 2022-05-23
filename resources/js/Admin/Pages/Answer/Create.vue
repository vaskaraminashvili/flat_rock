<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-4">
          <h5 class="card-header">Create Answer</h5>
          <div class="card-body">
            <form @submit.prevent="store">

              <div class="mb-3">
                <label for="quiz_id" class="form-label">Choose Question</label>
                <select class="form-select" id="quiz_id" v-model="form.question_id">
                  <option disabled value="">Open this select menu</option>

                  <option v-for="question in questions" :key="question.id" :value="question.id">
                    {{question.id +' : '+ question.question}}
                  </option>
                </select>
                <div v-if="form.errors.question_id">{{ form.errors.question_id }}</div>
              </div>
              <div class="mb-3">
                <label for="question" class="form-label">Answer</label>
                <input
                  v-model.trim="form.answer"
                  type="text"
                  class="form-control"
                  id="question"
                  placeholder="Title"
                />
                <div v-if="form.errors.answer">{{ form.errors.answer }}</div>
              </div>

              <div class="form-check form-switch mb-3">
                <input class="form-check-input" type="checkbox" id="correct" v-model="form.correct" />
                <label class="form-check-label" for="correct"
                >Is correct</label
                >
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
  props:{
    question_id: Number,
    questions: Object,
  },
  data() {
    return {

      form: this.$inertia.form({
        question_id: this.question_id ? this.question_id : '',
        answer: '',
        correct: 0,
        active: 1,
      }),
    }
  },
  methods: {
    store() {
      this.form.post(route('admin.answers.store'), {
        preserveScroll: true,
        onSuccess: () => this.form.reset('answer', 'correct'),
      });
    }
  },
}
</script>

<style scoped>

</style>
