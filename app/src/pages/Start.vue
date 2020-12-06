<template>
    <div v-if="personName==''" class="container">
        <h2 class = "header-text" >
          What do you want your shark name to be? 
        </h2>
        <input type="text" placeholder="Eg: Baby shark" id="name-input" autocomplete="off"/>
        <button class="action-button" v-on:click="handleButtonClickNext">
           Next
        </button>
    </div>
    <div v-else class="container">
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
        <button class="action-button" v-on:click="handleButtonClick">
           Upload
        </button>
      </div>
</template>
<script>
export default {
    name:'Start',
    props:['image','setImage','isImage','setIsImage','personName','setName'],
    methods:{
        handleButtonClickNext(){
            console.log("HERE",document.getElementById("name-input").value)
            this.setName(document.getElementById("name-input").value);
        },
        handleButtonClick(){
            document.getElementById("file-input").click();
        },
        startChecking(){
            this.$router.push('/shark');
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
#name-input {
    padding:1.5%;
    width: 646px;
    border-radius: 10px;
    outline: none;
    border: 2px solid #0097CD;
    font-size:36px;
    text-align: center;
    font-family: 'Poppins';
    margin-bottom:4%;
}
#name-input:focus {
    box-shadow: 0px 0px 8px 0px #0097CD;
}
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