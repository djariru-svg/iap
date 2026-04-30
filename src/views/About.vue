<template>
  <div class="about">
    <div class="about-container">
      <h1>About This Project</h1>
      <div class="about-content">
        <section class="about-section">
          <h2>Vue.js Practical Assignment</h2>
          <p>
            This project demonstrates core Vue.js concepts and best practices through three comprehensive tasks.
          </p>
        </section>

        <section class="about-section">
          <h3>Task 1: Project Setup, Directives & Component Basics</h3>
          <ul>
            <li>Create a Vue project using Vite</li>
            <li>Build reusable components (GreetingCard.vue)</li>
            <li>Use v-if for conditional rendering</li>
            <li>Use v-for to loop through arrays</li>
            <li>Use v-bind for dynamic attribute binding</li>
            <li>Use v-on / @ for event handling</li>
          </ul>
        </section>

        <section class="about-section">
          <h3>Task 2: Forms, Dynamic Components, Routing, Lifecycle & API</h3>
          <ul>
            <li>Implement v-model for two-way data binding in forms</li>
            <li>Create dynamic components with &lt;component :is="..."&gt;</li>
            <li>Set up Vue Router for client-side navigation</li>
            <li>Demonstrate component lifecycle hooks</li>
            <li>Fetch data from JSONPlaceholder API</li>
          </ul>
        </section>

        <section class="about-section">
          <h3>Task 3: CRUD System, Reactivity & Environment Variables</h3>
          <ul>
            <li>Implement a complete CRUD system</li>
            <li>Use Vue reactivity for automatic UI updates</li>
            <li>Configure environment variables with .env</li>
            <li>Create a reusable API helper module</li>
            <li>Never hardcode API URLs directly in components</li>
          </ul>
        </section>

        <section class="about-section">
          <h2>Project Setup</h2>
          <p>This project uses:</p>
          <ul>
            <li><strong>Vue 3</strong> - The progressive JavaScript framework</li>
            <li><strong>Vite</strong> - Next generation frontend tooling</li>
            <li><strong>Vue Router</strong> - Client-side routing</li>
            <li><strong>Axios</strong> - HTTP client for API calls</li>
          </ul>
        </section>

        <section class="about-section">
          <h2>How to Run</h2>
          <pre>npm install
npm run dev</pre>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  max-width: 900px;
  margin: 0 auto;
}

.about-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.about-container h1 {
  color: #667eea;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
}

.about-content {
  display: grid;
  gap: 2rem;
}

.about-section {
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.about-section h2 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.about-section h3 {
  color: #555;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
}

.about-section p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.about-section ul {
  list-style: none;
  padding-left: 1rem;
}

.about-section li {
  color: #555;
  padding: 0.5rem 0;
  margin-left: 1rem;
  position: relative;
  line-height: 1.6;
}

.about-section li:before {
  content: '→';
  position: absolute;
  left: -1rem;
  color: #667eea;
  font-weight: bold;
}

.about-section pre {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}
</style>
