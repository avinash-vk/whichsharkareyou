<template>
    <div class="container">
        <h2 class = "header-text" >
          Let's take a picture of your adorable face 
        </h2>
        <div class="image-container">
            <img :src="image" alt="" class="image" />
        </div>
        <input type="file" accept="image/*" id="file-input" hidden @change="handleUpload" >
        <button class="action-button" v-on:click="startChecking" v-if="isImage" style = "background-color:red">
           Test
        </button>
        <button class="action-button" v-on:click="handleButtonClick ">
           Upload
        </button>
      </div>
</template>
<script>
export default {
    name:'Start',
    props:['image','setImage','isImage','setIsImage'],
    methods:{
        handleButtonClick(){
            document.getElementById("file-input").click();
        },
        startChecking(){
            this.$router.push('/loading');
        },
        handleUpload(e){
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e =>{
                this.setImage(e.target.result);
                this.setIsImage(true);  
                
            };
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
    margin-bottom: 2%;
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
  outline: none;
  border: none;
  margin:0.5%;  
}

.action-button:hover{
  cursor:pointer;
  opacity: 0.6;
}
</style>