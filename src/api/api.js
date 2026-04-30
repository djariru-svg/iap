import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_APP_API_URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000
})

export const fetchUsers = async () => {
  try {
    const response = await apiClient.get('/users')
    return response.data
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}

export const fetchUser = async (id) => {
  try {
    const response = await apiClient.get(`/users/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error)
    throw error
  }
}

export const fetchPosts = async (userId) => {
  try {
    const response = await apiClient.get(`/posts?userId=${userId}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching posts for user ${userId}:`, error)
    throw error
  }
}

export default apiClient
