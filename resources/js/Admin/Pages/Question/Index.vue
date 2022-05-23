<template>
  <!-- Basic Bootstrap Table -->
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <h5>Table Basic</h5>
      <Link :href="route('admin.questions.create')" class="btn btn-primary">Create New Question </Link>
    </div>

    <div class="table-responsive text-nowrap">
      <table class="table">
        <thead>
        <tr>
          <th>Id</th>
          <th>Quiz</th>
          <th>Question</th>
          <th>Score</th>
          <th>Active</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody class="table-border-bottom-0">
        <tr v-for="question in questions.data" :key="question.id">
          <td>{{ question.id }}</td>
          <td>{{ question.quiz }}</td>
          <td>{{ question.question }}</td>
          <td>{{ question.score }}</td>
          <td>
            <span class="badge me-1" :class="question.active == 1 ? 'bg-label-success' : 'bg-label-primary'">
            {{ question.active == '1' ? 'Active' : 'Not active' }}
            </span>
          </td>
          <td>
            <div class="dropdown">
              <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                <i class="bx bx-dots-vertical-rounded"></i>
              </button>
              <div class="dropdown-menu">
                <Link :href="route('admin.questions.edit', question.id)" class="dropdown-item">
                  <i class="bx bx-edit-alt me-1"></i> Edit
                </Link>
                <Link :href="route('admin.questions.destroy', question.id)" method="delete" class="dropdown-item">
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
    questions: Object,
  },

}
</script>

<style scoped>

</style>
