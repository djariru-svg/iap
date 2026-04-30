<template>
  <div class="conditional-render">
    <h2>Task 1.3 - Conditional Rendering (v-if)</h2>
    <div class="control">
      <label>
        <input type="checkbox" v-model="showMessage" />
        Show Message
      </label>
    </div>
    <div v-if="showMessage" class="message">
      <p>This message is conditionally rendered! Toggle the checkbox to show/hide.</p>
    </div>
    <div v-else class="no-message">
      <p>Message is hidden. Check the box to show it.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConditionalRender',
  data() {
    return {
      showMessage: true
    }
  }
}
</script>

<style scoped>
.conditional-render {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.conditional-render h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.control {
  margin-bottom: 1rem;
}

.control label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
}

.control input[type='checkbox'] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.message {
  background: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #28a745;
}

.no-message {
  background: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #f5c6cb;
}
</style>
