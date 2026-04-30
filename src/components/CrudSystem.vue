<template>
  <div class="crud-system">
    <h2>Task 3.1 - CRUD System</h2>
    <div class="form-section">
      <input v-model="newItem" type="text" placeholder="Enter item name" />
      <button @click="addItem" class="btn-add">Add Item</button>
    </div>
    <div v-if="items.length === 0" class="empty-message">No items yet. Add one to get started!</div>
    <div v-else class="items-list">
      <div v-for="(item, index) in items" :key="index" class="item-card">
        <div class="item-header">
          <input v-model="item.name" class="item-name" />
          <div class="item-actions">
            <button @click="editItem(index)" class="btn-edit">{{ item.editing ? 'Save' : 'Edit' }}</button>
            <button @click="deleteItem(index)" class="btn-delete">Delete</button>
          </div>
        </div>
        <small>Created: {{ formatDate(item.createdAt) }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CrudSystem',
  data() {
    return {
      newItem: '',
      items: []
    }
  },
  methods: {
    addItem() {
      if (this.newItem.trim()) {
        this.items.push({
          name: this.newItem,
          createdAt: new Date(),
          editing: false
        })
        this.newItem = ''
      }
    },
    editItem(index) {
      this.items[index].editing = !this.items[index].editing
    },
    deleteItem(index) {
      this.items.splice(index, 1)
    },
    formatDate(date) {
      return date.toLocaleString()
    }
  }
}
</script>

<style scoped>
.crud-system {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.crud-system h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.form-section {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.form-section input {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.form-section input:focus {
  outline: none;
  border-color: #667eea;
}

.btn-add {
  padding: 0.75rem 1.5rem;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-add:hover {
  background: #229954;
  transform: translateY(-2px);
}

.empty-message {
  text-align: center;
  padding: 2rem;
  color: #999;
  background: #f8f9fa;
  border-radius: 6px;
}

.items-list {
  display: grid;
  gap: 1rem;
}

.item-card {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #667eea;
  transition: all 0.3s ease;
}

.item-card:hover {
  transform: translateX(5px);
}

.item-header {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}

.item-name {
  flex: 1;
  padding: 0.5rem;
  border: none;
  background: white;
  border-radius: 4px;
  font-size: 1rem;
}

.item-name:focus {
  outline: 2px solid #667eea;
}

.item-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-edit,
.btn-delete {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-edit {
  background: #3498db;
  color: white;
}

.btn-edit:hover {
  background: #2980b9;
}

.btn-delete {
  background: #e74c3c;
  color: white;
}

.btn-delete:hover {
  background: #c0392b;
}

small {
  display: block;
  margin-top: 0.5rem;
  color: #999;
  font-size: 0.85rem;
}
</style>
