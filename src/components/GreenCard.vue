<template>
  <div class="green-card">
    <h2>Green Card</h2>
    <p>This is a green themed card component.</p>
    <p>Dynamic component demonstration for Task 2.</p>
  </div>
</template>

<script>
export default {
  name: 'GreenCard'
}
</script>

<style scoped>
.green-card {
  background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3);
}

.green-card h2 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.green-card p {
  margin: 0.5rem 0;
}
</style>
