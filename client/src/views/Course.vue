<template>
<div class="box">
    <Course-Nav></Course-Nav>
    <!-- <router-view></router-view> -->
</div>
</template>


<script>
import CourseNav from '@/components/CourseNav.vue'
export default{
	name:"Course",
    data() {
        return {
            
        }
    },
    methods: {
        
    },
   mounted() {
       console.log(this.$store.state.Course.items)
   },
    components:{CourseNav}
}
</script>

<style>
.box{
    width: 1200px;
    margin: 20px auto;

}
</style>
