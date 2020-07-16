<template>
  <div class="box">
   <router-link to="CourseNav0">{{this.$store.state.Course.items[0]}}</router-link>
    <router-link to="CourseNav1">{{this.$store.state.Course.items[1]}}</router-link>
    <router-link to="CourseNav2">{{this.$store.state.Course.items[2]}}</router-link>
    <router-link to="CourseNav3">{{this.$store.state.Course.items[3]}}</router-link>
    <router-link to="CourseNav4">{{this.$store.state.Course.items[4]}}</router-link>
    <router-link to="CourseNav5">{{this.$store.state.Course.items[5]}}</router-link>
    <router-link to="CourseNav6">{{this.$store.state.Course.items[6]}}</router-link>
    <router-link to="CourseNav7">{{this.$store.state.Course.items[7]}}</router-link>
    <router-link to="CourseNav8">{{this.$store.state.Course.items[8]}}</router-link>
    <router-link to="CourseNav9">{{this.$store.state.Course.items[9]}}</router-link>
    <router-link to="CourseNav10">{{this.$store.state.Course.items[10]}}</router-link>
    <router-link to="CourseNav11">{{this.$store.state.Course.items[11]}}</router-link>
    <router-link to="CourseNav12">{{this.$store.state.Course.items[12]}}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.box{
    width: 100%;
    height: 76px;
    display: flex;
    align-self: start;
    justify-content: space-around;
    
}
</style>