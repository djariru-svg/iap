<template>
  <div class="event-handler">
    <h2>Task 1.6 - Event Handling (v-on / @)</h2>
    <div class="counter-section">
      <div class="counter-display">{{ count }}</div>
      <div class="button-group">
        <button @click="increment" class="btn-primary">Increment</button>
        <button @click="decrement" class="btn-secondary">Decrement</button>
        <button @click="reset" class="btn-danger">Reset</button>
      </div>
    </div>
    <div class="input-section">
      <h3>Input Event Demo</h3>
      <input @input="updateText" type="text" placeholder="Type something..." />
      <p v-if="inputText">You typed: <strong>{{ inputText }}</strong></p>
    </div>
    <div class="hover-section">
      <div
        @mouseenter="isHovering = true"
        @mouseleave="isHovering = false"
        :class="{ hovered: isHovering }"
        class="hover-box"
      >
        {{ isHovering ? 'You are hovering!' : 'Hover over me' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventHandler',
  data() {
    return {
      count: 0,
      inputText: '',
      isHovering: false
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    },
    updateText(event) {
      this.inputText = event.target.value
    }
  }
}
</script>

<style scoped>
.event-handler {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.event-handler h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.event-handler h3 {
  color: #555;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.counter-section {
  text-align: center;
  margin-bottom: 2rem;
}

.counter-display {
  font-size: 3rem;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f0f4ff;
  border-radius: 8px;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary,
.btn-danger {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5568d3;
}

.btn-secondary {
  background: #95a5a6;
  color: white;
}

.btn-secondary:hover {
  background: #7f8c8d;
}

.btn-danger {
  background: #e74c3c;
  color: white;
}

.btn-danger:hover {
  background: #c0392b;
}

.input-section {
  margin-bottom: 2rem;
}

.input-section input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.input-section input:focus {
  outline: none;
  border-color: #667eea;
}

.input-section p {
  margin-top: 1rem;
  color: #333;
}

.hover-section {
  margin-top: 2rem;
}

.hover-box {
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #ddd;
}

.hover-box.hovered {
  background: #667eea;
  color: white;
  border-color: #667eea;
  transform: scale(1.05);
}
</style>
