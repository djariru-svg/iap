<template>
  <div class="dynamic-bind">
    <h2>Task 1.5 - Dynamic Binding (v-bind)</h2>
    <div class="control-section">
      <label>
        CSS Class:
        <select v-model="selectedClass">
          <option value="normal">Normal</option>
          <option value="highlight">Highlight</option>
          <option value="danger">Danger</option>
          <option value="success">Success</option>
        </select>
      </label>
    </div>
    <div :class="['dynamic-box', selectedClass]" :id="boxId" :style="boxStyle">
      <p>Dynamic Box</p>
      <small>ID: {{ boxId }}</small>
    </div>
    <div class="link-section">
      <a :href="dynamicLink" target="_blank" :title="linkTitle">Visit Link</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DynamicBind',
  data() {
    return {
      selectedClass: 'normal',
      boxId: 'dynamic-box-1',
      dynamicLink: 'https://vuejs.org',
      linkTitle: 'Visit Vue.js Documentation'
    }
  },
  computed: {
    boxStyle() {
      return {
        borderWidth: this.selectedClass === 'danger' ? '3px' : '2px',
        padding: '1.5rem'
      }
    }
  }
}
</script>

<style scoped>
.dynamic-bind {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.dynamic-bind h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.control-section {
  margin-bottom: 1.5rem;
}

.control-section label {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
}

.control-section select {
  padding: 0.5rem 1rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.dynamic-box {
  text-align: center;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.dynamic-box p {
  margin: 0;
  font-weight: bold;
  font-size: 1.2rem;
}

.dynamic-box small {
  display: block;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.dynamic-box.normal {
  background: #e7f3ff;
  color: #004085;
  border: 2px solid #b3d9ff;
}

.dynamic-box.highlight {
  background: #fff3cd;
  color: #856404;
  border: 2px solid #ffeaa7;
}

.dynamic-box.danger {
  background: #f8d7da;
  color: #721c24;
  border: 3px solid #f5c6cb;
}

.dynamic-box.success {
  background: #d4edda;
  color: #155724;
  border: 2px solid #c3e6cb;
}

.link-section {
  margin-top: 1.5rem;
}

.link-section a {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.link-section a:hover {
  background: #764ba2;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
