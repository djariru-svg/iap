<template>
  <div class="purple-card">
    <h2>Purple Card</h2>
    <p>This is a purple themed card component.</p>
    <p>Dynamic component demonstration for Task 2.</p>
  </div>
</template>

<script>
export default {
  name: 'PurpleCard'
}
</script>

<style scoped>
.purple-card {
  background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(155, 89, 182, 0.3);
}

.purple-card h2 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.purple-card p {
  margin: 0.5rem 0;
}
</style>
