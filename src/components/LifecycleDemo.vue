<template>
  <div class="lifecycle-demo">
    <h2>Task 2.4 - Lifecycle Hooks</h2>
    <div class="logs">
      <h3>Lifecycle Logs:</h3>
      <div class="log-container">
        <div v-for="(log, index) in logs" :key="index" class="log-item">
          <span class="timestamp">{{ log.time }}</span>
          <span class="message">{{ log.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LifecycleDemo',
  data() {
    return {
      logs: []
    }
  },
  created() {
    this.addLog('created() - Component instance created')
  },
  beforeMount() {
    this.addLog('beforeMount() - Before component mounted to DOM')
  },
  mounted() {
    this.addLog('mounted() - Component mounted to DOM')
  },
  beforeUpdate() {
    this.addLog('beforeUpdate() - Before component updates')
  },
  updated() {
    this.addLog('updated() - Component updated')
  },
  beforeUnmount() {
    this.addLog('beforeUnmount() - Before component unmounted')
  },
  unmounted() {
    this.addLog('unmounted() - Component unmounted')
  },
  methods: {
    addLog(message) {
      const time = new Date().toLocaleTimeString()
      this.logs.push({ message, time })
    }
  }
}
</script>

<style scoped>
.lifecycle-demo {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.lifecycle-demo h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.lifecycle-demo h3 {
  color: #555;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.log-container {
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1rem;
  max-height: 300px;
  overflow-y: auto;
  border: 2px solid #ddd;
}

.log-item {
  display: flex;
  gap: 1rem;
  padding: 0.75rem;
  border-bottom: 1px solid #e0e0e0;
  font-size: 0.9rem;
}

.log-item:last-child {
  border-bottom: none;
}

.timestamp {
  font-weight: 600;
  color: #667eea;
  min-width: 80px;
}

.message {
  color: #333;
  flex: 1;
}
</style>
