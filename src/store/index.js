import { defineStore } from "pinia";

import axios from "axios";

export const useStore = defineStore("main", {
  state: () => {
    return {
      todos: [],
      todo:{
        title: ''
      }
    };
  },
  getters: {
    allTodos: (state) => state.todos,
  
  },
  actions: {
    async fetchTodo() {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      this.todos = response.data;
    },
    async fetchTitle( id) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      this.todo = response.data;
    console.log("title", response.data.title);
    
    },
    async addTodo(title) {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        title
      );
      this.todos.unshift(response.data);
      console.log("aa", response);
    },
    async deleteData(id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    },

    async updateData(updatedTodo) {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
        updatedTodo
      );
      console.log("data:", response.data);
      const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);

      state.todos[index] = updatedTodo;
      console.log("index:", index);
    },
  },
});
