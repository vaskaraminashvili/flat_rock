<template>
  <!-- Basic Bootstrap Table -->
  <div class="card">
    <h5 class="card-header">Table Basic</h5>
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
                <a class="dropdown-item" href="javascript:void(0);"
                ><i class="bx bx-edit-alt me-1"></i> Edit</a
                >
                <a class="dropdown-item" href="javascript:void(0);"
                ><i class="bx bx-trash me-1"></i> Delete</a
                >
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
