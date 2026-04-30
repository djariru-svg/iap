<template>
  <div class="user-list">
    <h2>Task 1.4 - List Rendering (v-for)</h2>
    <div class="user-names">
      <div v-for="(user, index) in users" :key="index" class="user-item">
        <span class="number">{{ index + 1 }}.</span>
        <span class="name">{{ user }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      users: ['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince', 'Eve Wilson']
    }
  }
}
</script>

<style scoped>
.user-list {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.user-list h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.user-names {
  display: grid;
  gap: 0.8rem;
}

.user-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.user-item:hover {
  background: #667eea;
  color: white;
  transform: translateX(5px);
}

.number {
  font-weight: bold;
  color: #667eea;
  min-width: 30px;
}

.user-item:hover .number {
  color: white;
}

.name {
  font-size: 1rem;
}
</style>
