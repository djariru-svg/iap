<template>
  <div class="form-demo">
    <h2>Task 2.1 - Form Handling (v-model)</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="form.name" type="text" id="name" placeholder="Enter your name" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="form.email" type="email" id="email" placeholder="Enter your email" />
      </div>
      <button type="submit" class="btn-submit">Submit</button>
    </form>
    <div v-if="form.name || form.email" class="form-values">
      <h3>Live Form Values:</h3>
      <p><strong>Name:</strong> {{ form.name || '(empty)' }}</p>
      <p><strong>Email:</strong> {{ form.email || '(empty)' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormDemo',
  data() {
    return {
      form: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    submitForm() {
      alert(`Name: ${this.form.name}\nEmail: ${this.form.email}`)
    }
  }
}
</script>

<style scoped>
.form-demo {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.form-demo h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

form {
  display: grid;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #333;
}

.form-group input {
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.form-group input:focus {
  outline: none;
  border-color: #667eea;
}

.btn-submit {
  padding: 0.75rem 1.5rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-submit:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

.form-values {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f0f4ff;
  border-radius: 6px;
  border-left: 4px solid #667eea;
}

.form-values h3 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.form-values p {
  color: #333;
  margin: 0.5rem 0;
}
</style>
