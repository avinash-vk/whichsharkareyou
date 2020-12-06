<template>
  <div id="nav">
  </div>
    <router-view v-slot="{ Component }"  :image="image" :setImage="setImage" :isImage="isImage" :setName="setName" :setIsImage="setIsImage" :personName="personName" >
      <transition :name="'slide-fade'">
        <component :is="Component" />
      </transition>
    </router-view>
</template>
<script>
export default {
  data(){
    return {
        personName:"",
        image: "https://media2.giphy.com/media/dyX9ixfxMpOUGawfdK/giphy.gif",
        isImage : false,
    }
  },
  methods:{
    setImage(image){
      this.image = image;
    },
    setIsImage(value){
      this.isImage = value;
    },
    setName(name){
      this.personName = name;
      console.log(this.personName,"hee")
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

#app {
  font-family: 'Poppins';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:2%;
}
</style>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.01s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>