<template>
  <div class="min-h-full justify-center flex">
    <div class="box-border w-9/12">
      <div class="m-auto rounded-lg">
        <h1 class="text-3xl font-bold text-center my-8">Add new</h1>

        <input
          class="h-12 p-2 w-9/12 bg-gray-300 shadow-lg from-gray-50 mb-3"
          type="text"
          id="txtId"
          v-model="newTodo"
          placeholder="Add text..."
        />
        <button
          class="
            p-2
            h-10
            w-3/12
            font-semibold
            hover:shadow-lg hover:border-transparent
            shadow-md
            rounded-lg
            bg-gradient-to-r
            hover:from-gray-200
          "
          @click="add"
        >
          Add New
        </button>
      </div>
      <div class="m-2 w-full">
        <TodoList
          :todo-lists="data"
          @delete-task="deleteTask"
          @edit-task="editTask"
          @done-task="done"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "../components/TodoList.vue";
import { useStore } from "../store/index";
import { ref } from "vue";

export default {
  components: {
    TodoList,
  },
  setup() {
    let newTodo = ref("");

    const store = useStore();

    function add() {
      store.addTodo({ title: newTodo.value , completed: false });
      newTodo = "";
    }
    return {
      store,
      newTodo,
      add,
    };
  },
};
</script>
