<template>
  <div>
    <h1>Appointments</h1>

    <form @submit.prevent="submitAppointment">
      <label>Full Name:</label>
      <input type="text" v-model="name" required>

      <br><br>

      <label>Email:</label>
      <input type="email" v-model="email" required>

      <br><br>

      <label>Contact Number:</label>
      <input type="text" v-model="phone" required>

      <br><br>

      <label>Date:</label>
      <input type="date" v-model="date" required>

      <br><br>

      <label>Time:</label>
      <input type="time" v-model="time" required>

      <br><br>

      <label>Message:</label>
      <textarea v-model="message"></textarea>

      <br><br>

      <button type="submit">Submit</button>
    </form>

    <div v-if="submitted">
      <h2>Appointment Submitted!</h2>
      <p>Name: {{ name }}</p>
      <p>Email: {{ email }}</p>
      <p>Phone: {{ phone }}</p>
      <p>Date: {{ date }}</p>
      <p>Time: {{ time }}</p>
      <p>Message: {{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const date = ref('')
const time = ref('')
const message = ref('')
const submitted = ref(false)

const submitAppointment = () => {
  submitted.value = true
}
</script>
