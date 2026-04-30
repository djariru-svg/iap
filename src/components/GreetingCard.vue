<template>
  <div class="greeting-card">
    <h1>{{ message }}</h1>
    <p>Current Time: {{ timestamp }}</p>
  </div>
</template>

<script>
export default {
  name: 'GreetingCard',
  data() {
    return {
      message: 'Hello from Vue',
      timestamp: new Date().toLocaleTimeString()
    }
  },
  mounted() {
    setInterval(() => {
      this.timestamp = new Date().toLocaleTimeString()
    }, 1000)
  }
}
</script>

<style scoped>
.greeting-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.5s ease-out;
  margin-bottom: 2rem;
}

.greeting-card h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.greeting-card p {
  font-size: 1rem;
  opacity: 0.9;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
