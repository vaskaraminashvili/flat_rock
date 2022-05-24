<template>
  <div class="container" v-if="submitForm== false">
    <div class="row">
      <div class="col-xl-6 mx-auto my-4">
        <QuizTime :minutes="quiz.time" @timeFinished="finish"/>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-6 mx-auto my-4">
        <div class="card border-light mb-3">
          <div class="card-body" v-for="(question,index) in quiz.questions" :key="question.index">
            <div v-show="currentQueston == index">
              <h4 class="card-title text-center">{{ question.question }}</h4>
              <div class="card-text grid mb-3 ">
                <template v-for="(answer,answer_index) in question.answers"
                          :key="answer.answer_index">
                  <button type="button" class="btn btn-info" :disabled="loading"
                          @click="checkAnswer(question.id,answer.id,$event)"
                  >
                    <span v-if="loading" class="spinner-border spinner-border-sm" role="status"
                          aria-hidden="true"></span>
                    {{ answer.answer }}
                  </button>
                </template>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <button type="button" :disabled="loading" class="btn btn-outline-primary" @click="prevQuestion">Prev</button>
                <button type="button" :disabled="loading" class="btn btn-outline-primary" v-if="showNext" @click="nextQuestion">Next
                </button>
                <button type="button" :disabled="loading" class="btn btn-outline-success" v-else @click="finish">Finish</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" v-else>
    <div class="row">
      <div class="col-xl-6 mx-auto my-4">
        <SubmitQuiz @submit-form="submit"/>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import SubmitQuiz from "@/Web/Shared/SubmitQuiz";
import QuizTime from "@/Web/Shared/QuizTime";

export default {
  components: {SubmitQuiz , QuizTime},
  mounted() {
    this.quiz.questions.forEach((question ,index) => {
      this.userQuiz.questions[index] = {
        question_id : question.id,
        answer_id: 0,
        correct: 0
      };
      this.userQuiz.started_at =new Date().toISOString().slice(0, 19).replace('T', ' ');
    });
  },
  props: {
    quiz: Object,
  },
  data() {
    return {
      submitForm: false,
      currentQueston: 0,
      totalQuestions: this.quiz.questions.length - 1,
      userQuiz: {
        started_at: '',
        finished_at: '',
        questions : []
      },
      loading: false,
      quiz_id: this.quiz.id,
    }
  },
  computed: {
    showNext() {
      return this.currentQueston < 4;
    }
  },
  methods: {
    checkAnswer(question_id, answer_id, event) {
      this.loading = true
      axios.post(route('checkAnswer'),
        {
          question_id: question_id,
          answer_id: answer_id,
        })
        .then((response) => {
          this.userQuiz.questions[this.currentQueston] = {question_id: question_id , answer_id: answer_id, correct: response.data.answer};
          if (response.data.answer) {
            event.target.classList.remove('btn-info');
            event.target.classList.add('btn-success');
          } else {
            event.target.classList.remove('btn-info');
            event.target.classList.add('btn-warning');
            setTimeout(() => {
              event.target.classList.remove('btn-warning');
              event.target.classList.add('btn-info');
            }, 1000);
          }
          this.loading = false
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    nextQuestion() {
      if (this.currentQueston < this.totalQuestions) {
        this.currentQueston++;
      }
    },
    prevQuestion() {
      if (this.currentQueston > 0) {
        this.currentQueston--;
      }
    },
    finish() {
      this.submitForm =true;
      this.userQuiz.finished_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
    },
    submit(user) {
      this.$inertia.post(
        route('submitQuiz'),
        {
          results:this.userQuiz,
          user:user,
        },

      );

    }

  },
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
</style>
