<template>
  <div>
  <h1>{{count}}*2={{double}}</h1>
  <h2>{{num}}</h2>
  <button @click="add">累加</button> 
  <!-- @click="add"  相当于 v-on:click="add" -->
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, toRefs} from 'vue'
export default {
  setup(){
      //  const state = reactive({  //响应式
      //     count:1
      //  })
      const {state,double} = useCounter(1)

       const num = ref(2) //让原始类型变成响应式
      //  ref和reactive都是做响应式的 但是reactive必须是复杂类型对象 ref是原始类型 number
      function add() {
          state.count++
      }

     

      onMounted(()=>{
        console.log('onMounted')
      })

      function useCounter(count){
        const state =  reactive({
         count 
        })
         const double =computed(()=>state.count*2)
         return { state,double}
      }

      return {
          ...toRefs(state),
          add,
          double,
          num
      }
  }
}
</script>

<style>

</style>