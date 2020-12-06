<template>
  <div class="home">
      <div class="container">
          <img src="../assets/shark.jpg" alt="" class="image-shark">
        
        <h2 class = "header-text" >
          Which shark are you? 
        </h2>
        <button class="action-button" v-on:click="handleButtonClick ">
            Let's go
        </button>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Landing',
  components: {
    
  },
  methods:{
    handleButtonClick(){
      this.$router.push({name:'Start'}  );
    }
  }
}
</script>

<style>
.container {
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
}
.image-shark{
  height:241px;
  width:408px;
}
.header-text{
  font-size: 64px;
}
.action-button{
  background-color: #0097CD;
  font-size: 32px;
  color: white;
  font-family: 'Poppins';
  width: 312px;
  height: 63px;
  border:none;
  border-radius: 20px;
}
.action-button:hover{
  cursor:pointer;
  opacity: 0.6;
}
</style>