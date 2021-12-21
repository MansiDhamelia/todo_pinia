<template>
  <div class="m-10 rounded-lg">
    <h1 class="text-3xl font-bold text-center my-8">Update value</h1>

    <input
      class="h-12 p-2 w-9/12 bg-gray-300 shadow-lg from-gray-50 mb-3"
      type="text"
      id="txtId"
      v-model="store.todo.title"
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
      @click="edit(todo_id)"
    >
      Edit
    </button>
  </div>
</template>

<script setup>
import { useStore } from "../store/index";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const store = useStore();
const todo_id = route.params.id;

store.fetchTitle(todo_id);
function edit(todo_id) {
  router.push("/").catch(() => {});
  const updatedTodo = {
    id: todo_id,
    title: store.todo.title,
  };
  store.updateData(updatedTodo);
}
// onMounted(() => {

// });
</script>