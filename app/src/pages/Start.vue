<template>
    <div class="container">
        <h2 class = "header-text" >
          Let's take a picture of your adorable face 
        </h2>
        <div class="image-container">
            <img :src="image" alt="" class="image" />
        </div>
        <button class="action-button" v-on:click="handleButtonClick ">
           Upload
        </button>
      </div>
</template>
<script>
export default {
    name:'Start',
    data: ()=>{
        return {
        image: "https://media2.giphy.com/media/dyX9ixfxMpOUGawfdK/giphy.gif",
        }
    }
}
</script>
<style>
    .container {
  display:flex;
  align-items:center;
  justify-content: center;
  padding:2%;
  flex-direction: column;
}
.image{
  width: 213px;
    height: 196px;
}
.image-container{
    background-color:  rgba(0, 151, 205, 0.54);
    width: 312px;
    height: 251px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.header-text{
  font-size: 48px;
  width: 646px;
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
  margin-top: 2%;
}
.action-button:hover{
  cursor:pointer;
  opacity: 0.6;
}
</style>