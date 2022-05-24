<template>
  <form @submit.prevent="submitForm">
    <div v-if="errors">
        <p class="text-danger">Please Fill all Fields</p>
    </div>
    <div class="form-group">
      <label for="name" class="form-label mt-4">Name</label>
      <input type="text" class="form-control" id="name" v-model="user.name" placeholder="Name">
    </div>
    <div class="form-group">
      <label for="surname" class="form-label mt-4">Surname</label>
      <input type="text" class="form-control" id="surname" v-model="user.surname" placeholder="Surname">
    </div>
    <div class="form-group">
      <label for="email" class="form-label mt-4">Email</label>
      <input type="email" class="form-control" id="email" v-model="user.email" placeholder="Email">
    </div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-outline-success mt-2">Finish</button>

    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        surname: '',
        email: '',
      },
      errors: false,
    }
  },
  methods: {
    submitForm() {
      if (this.user.name !== '' && this.user.surname !== '' && this.user.email !== '') {
        this.errors = false;
        this.$emit('submit-form', this.user)
      } else {
        this.errors = true;
      }
    }
  },
}
</script>

<style scoped>

</style>
