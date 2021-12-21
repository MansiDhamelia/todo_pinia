<template>
  <h3 class="text-center font-semibold text-4xl my-4">Todo List</h3>
  <div class="flex flex-wrap flex-col justify-center">
    <div
      v-for="(todolist, i) in store.allTodos"
      :key="i"
      class="
        bg-gray-200
        rounded-md
        text-center
        h-8
        relative
        cursor-pointer
        mb-1
        mx-8
        bg-gradient-to-r
        from-gray-50
        text-lg
      "
    >
      <span class="left-1 absolute">{{ todolist.id }}</span>
      <span>{{ todolist.title }}</span>
      <i
        v-if="todolist.completed"
        class="fa fa-check m-2 absolute right-20"
      ></i>

      <i
        @click="updateData(todolist.id)"
        class="fa fa-edit absolute right-10 m-2"
      ></i>
      <i
        @click="deleteData(todolist.id)"
        class="fa fa-trash m-2 right-3 absolute cursor-pointer"
      ></i>
    </div>
  </div>
</template>

<script>
import { useStore } from "../store/index";
import { useRouter } from "vue-router"

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    store.fetchTodo();
    const todos = store.allTodos;

    function deleteData(id) {
      store.deleteData(id);
      console.log("del_id", id);
    }
    function updateData(id) {
      router.push(`/todos/${id}/edit`).catch(() => {});
    }
    return {
      store,
      todos,
      deleteData,
      updateData,
    };
  },
};
</script>