<template>
  <div class="app-container">
    <nav class="navbar">
      <h1>Vue.js Practical Assignment</h1>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.navbar h1 {
  font-size: 1.8rem;
  margin: 0;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid transparent;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #667eea;
  border-bottom-color: #667eea;
}

.main-content {
  flex: 1;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
