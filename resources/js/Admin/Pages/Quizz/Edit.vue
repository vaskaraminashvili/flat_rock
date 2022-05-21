<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-4">
          <h5 class="card-header">Edit Quizz</h5>
          <div class="card-body">
            <form @submit.prevent="update">


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
              <div class="d-flex justify-content-between">
                <button type="button" @click="destroy" class="btn btn-danger">Delete</button>
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
    quizz: Object,
  },
  data() {
    return {
      form: this.$inertia.form({
        title: this.quizz.title,
        description: this.quizz.description,
        time: this.quizz.time,
        active: this.quizz.active,
      }),
    }
  },
  methods: {
    destroy(){
      console.log('asds')
      if (confirm('Delete this quizz?')) {
        this.$inertia.delete(route('admin.quizz.destroy', this.quizz.id))
      }
    },
    update() {
      this.form.patch(route('admin.quizz.update', this.quizz.id), {
        preserveScroll: true,
      });
    }
  },
}
</script>

<style scoped>

</style>
