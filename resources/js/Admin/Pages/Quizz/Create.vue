<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-4">
          <h5 class="card-header">Create Quizz</h5>
          <div class="card-body">
            <form @submit.prevent="store">


              <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input
                  v-model.trim="form.title"
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="Title"
                />
                <div v-if="form.errors.title">{{ form.errors.title }}</div>
              </div>
              <div class="mb-3">
                <label for="number" class="form-label">Time for Quizz</label>
                <input
                  v-model.number="form.time"
                  type="number"
                  class="form-control"
                  id="number"
                  placeholder="Time for Quizz In Munutes"
                />
                <div v-if="form.errors.time">{{ form.errors.time }}</div>
              </div>
              <div class="mb-3">
                <label for="score" class="form-label">Score</label>
                <input
                  v-model.number="form.score"
                  type="number"
                  class="form-control"
                  id="score"
                  placeholder="Total Score"
                />
                <div v-if="form.errors.score">{{ form.errors.score }}</div>
              </div>


              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" id="description" rows="5" v-model="form.description"></textarea>
                <div v-if="form.errors.description">{{ form.errors.description }}</div>
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
  data() {
    return {
      form: this.$inertia.form({
        title: '',
        description: '',
        time: '',
        score: '',
        active: 1,
      }),
    }
  },
  methods: {
    store() {
      this.form.post(route('admin.quizzes.store'), {
        preserveScroll: true,

      });
    }
  },
}
</script>

<style scoped>

</style>
