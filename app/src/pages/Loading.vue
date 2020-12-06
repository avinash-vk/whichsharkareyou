<template>
    <div class="container">
        <h2 class = "header-text" >
          Working our magic...
        </h2>
        <div class="row-container">
             <div class="image-container">
                <img :src="image" alt="" class="image" />
            </div>
            <div class="image-container" style = "background-color:transparent">
                <img src="https://images.vexels.com/media/users/3/217946/isolated/preview/493329917e728c8e55c2f75e65991d03-curvy-arrow-illustration-by-vexels.png" alt="" class="image arrow" />
            </div>
            <div class="image-container" style = "background-color:transparent">
                <img src="https://66.media.tumblr.com/af13f2bc9960568b96e8098200c1cc4c/tumblr_o10kh5KpFl1qdyauqo1_500.gif" alt="" class="image-large" />
            </div>
        </div>
       
      </div>
</template>
<script>
export default {
    name:'Loading',
    data: ()=>{
        return {
            isImage:false,
        }
    },
    props:['image','setImage'],
    methods:{
        handleButtonClick(){
            document.getElementById("file-input").click();
        },
        handleUpload(e){
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e =>{
                this.setImage(e.target.result);
                this.isImage = true;
            };

        }
    }
}
</script>
<style>
.row-container{
    display:flex;
    justify-content: space-around;
}
.arrow {
    transform: rotate(60deg);
}
.row-container > div {
    flex: 1 1 auto;
    text-align:center;
    margin:2%;
}
    .container {
  display:flex;
  align-items:center;
  justify-content: center;
  padding:2%;
  flex-direction: column;
}
.image-large{
    width: 400px;
height: 350px;
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