<template>
  <!-- Basic Bootstrap Table -->
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <h5>Table Basic</h5>
      <Link :href="route('admin.answers.create')" class="btn btn-primary">Create New Question </Link>
    </div>

    <div class="table-responsive text-nowrap">
      <table class="table">
        <thead>
        <tr>
          <th>Id</th>
          <th>Question</th>
          <th>Answer</th>
          <th>Correct</th>
          <th>Active</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody class="table-border-bottom-0">
        <tr v-for="answer in answers.data" :key="answer.id">
          <td>{{ answer.id }}</td>
          <td>{{ answer.question }}</td>
          <td>{{ answer.answer }}</td>
          <td><span class="badge me-1" :class="answer.correct == 1 ? 'bg-label-success' : 'bg-label-primary'">
            {{ answer.correct == '1' ? 'Correct' : 'Not Correct' }}
            </span></td>
          <td>
            <span class="badge me-1" :class="answer.active == 1 ? 'bg-label-success' : 'bg-label-primary'">
            {{ answer.active == '1' ? 'Active' : 'Not active' }}
            </span>
          </td>
          <td>
            <div class="dropdown">
              <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                <i class="bx bx-dots-vertical-rounded"></i>
              </button>
              <div class="dropdown-menu">
                <Link :href="route('admin.answers.edit', answer.id)" class="dropdown-item">
                  <i class="bx bx-edit-alt me-1"></i> Edit
                </Link>
                <Link :href="route('admin.answers.destroy', answer.id)" method="delete" class="dropdown-item">
                  <i class="bx bx-trash me-1"></i> Delete
                </Link>
              </div>
            </div>
          </td>
        </tr>


        </tbody>
      </table>
      
      <Pagination class="mt-6" :links="answers.links" />
    </div>
  </div>
  <!--/ Basic Bootstrap Table -->
</template>

<script>
import Pagination from "@/Admin/Shared/Pagination";
export default {
  components: {
    Pagination,
  },
  props: {
    answers: Object,
  },

}
</script>

<style scoped>

</style>
