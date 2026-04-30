<template>
  <div class="dynamic-component">
    <h2>Task 2.2 - Dynamic Components</h2>
    <div class="button-group">
      <button
        @click="currentComponent = 'PurpleCard'"
        :class="{ active: currentComponent === 'PurpleCard' }"
      >
        Show Purple Card
      </button>
      <button
        @click="currentComponent = 'GreenCard'"
        :class="{ active: currentComponent === 'GreenCard' }"
      >
        Show Green Card
      </button>
    </div>
    <component :is="currentComponent" />
  </div>
</template>

<script>
import PurpleCard from './PurpleCard.vue'
import GreenCard from './GreenCard.vue'

export default {
  name: 'DynamicComponent',
  components: {
    PurpleCard,
    GreenCard
  },
  data() {
    return {
      currentComponent: 'PurpleCard'
    }
  }
}
</script>

<style scoped>
.dynamic-component {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.dynamic-component h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.button-group button {
  flex: 1;
  padding: 0.75rem 1.5rem;
  background: #e0e0e0;
  color: #333;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-group button:hover {
  background: #d0d0d0;
}

.button-group button.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}
</style>
