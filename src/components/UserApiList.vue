<template>
  <div class="user-api-list">
    <h2>Task 2.5 - API Integration</h2>
    <div v-if="loading" class="loading">Loading users...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="users-container">
      <div v-for="user in users" :key="user.id" class="user-card">
        <h3>{{ user.name }}</h3>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <p><strong>Website:</strong> {{ user.website }}</p>
        <p><strong>Company:</strong> {{ user.company.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchUsers } from '../api/api.js'

export default {
  name: 'UserApiList',
  data() {
    return {
      users: [],
      loading: true,
      error: null
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    async loadUsers() {
      try {
        this.loading = true
        this.error = null
        const data = await fetchUsers()
        this.users = data
      } catch (err) {
        this.error = 'Failed to load users. Please try again later.'
        console.error('Error loading users:', err)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.user-api-list {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.user-api-list h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.loading {
  text-align: center;
  padding: 2rem;
  color: #667eea;
  font-size: 1.1rem;
  font-weight: 600;
}

.error {
  background: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #f5c6cb;
}

.users-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.user-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  transition: all 0.3s ease;
}

.user-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.user-card h3 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.user-card p {
  color: #555;
  margin: 0.5rem 0;
  font-size: 0.95rem;
}
</style>
