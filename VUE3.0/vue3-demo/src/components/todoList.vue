<template>
<!-- 语义化更好 与div差不多 -->
<section>
    <section class="todoapp">
        <header class="header">
            <h1>Vue3 todos</h1>
            <input type="text" class="new-todo" placeholder="燕杰" @keyup.enter="addTodo" v-model="newTodo">
        </header>
    </section>
    <section class="main">
        <ul class="todo-list">
            <!-- for in遍历对象 可以遍历数组（不建议） for of 遍历数组 不能遍历对象 -->
            <li v-for="todo,index in todos" :key=todo.id class="todo">
                <div class="view">
                    <label>{{todo.title}}</label>
                    <button class="destroy" @click="deleteTodo(index)"></button>
                </div>
            </li>
        </ul>
    </section>
</section>
</template>

<script>
import { toRefs,reactive } from 'vue'
export default {
  setup(){
       const state = reactive({
        newTodo:'',
        todos: [
            { id: '1', title: '吃饭', complated: false },
            { id: '2', title: '睡觉', complated: false }
        ]
       })
       function deleteTodo(index){
           state.todos.splice(index,1)
       }

       function addTodo(){
           console.log(state.newTodo)
           //&& 在判断条件下是且 在非判断条件下 标识执行
           let value = state.newTodo && state.newTodo.trim()
           if(!value) return
           state.todos.push({
               id:state.todos.length+1,
               title: value,
               complated:false
           })
           state.newTodo=''
       }

       return {
           ...toRefs(state),
           addTodo,
           deleteTodo
       }
  }
}
</script>

<style>

</style>