<template>
  <!-- Basic Bootstrap Table -->
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <h5>Table Basic</h5>
      <Link :href="route('admin.quizzes.create')" class="btn btn-primary">Create New Quizz </Link>
    </div>

    <div class="table-responsive text-nowrap">
      <table class="table">
        <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Time</th>
          <th>Active</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody class="table-border-bottom-0">
        <tr v-for="quizz in quizzes.data" :key="quizz.id">
          <td>{{ quizz.id }}</td>
          <td>{{ quizz.title }}</td>
          <td>{{ quizz.time }} minutes</td>
          <td>
            <span class="badge me-1" :class="quizz.active == 1 ? 'bg-label-success' : 'bg-label-primary'">
            {{ quizz.active == '1' ? 'Active' : 'Not active' }}
            </span>
          </td>
          <td>
            <div class="dropdown">
              <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                <i class="bx bx-dots-vertical-rounded"></i>
              </button>
              <div class="dropdown-menu">
                <Link :href="route('admin.quizzes.edit', quizz.id)" class="dropdown-item">
                  <i class="bx bx-edit-alt me-1"></i> Edit
                </Link>
                <Link :href="route('admin.quizzes.destroy', quizz.id)" method="delete" class="dropdown-item">
                  <i class="bx bx-trash me-1"></i> Delete
                </Link>
              </div>
            </div>
          </td>
        </tr>


        </tbody>
      </table>
    </div>
  </div>
  <!--/ Basic Bootstrap Table -->
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
