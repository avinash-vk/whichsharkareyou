<template>
    <Loading v-if="loading" />
    <div v-else class="container">
        <h2 class="header-text">
            You are a <span style="color:#0097CD">{{data.label}}</span> shark.
        </h2>
        <div class="image-container-final">
            <img :src="data.image_url" alt="" class="image-shark-final">
        </div>
        <div class="description-container">
            <p class="description">{{data.description}}</p>
        </div>
        <button class="action-button" v-on:click="handleButtonClick ">
            Try again
        </button>
    </div>
</template>
<script>
import Loading from './Loading';
import sharkData from '../../data.json';
export default {
    name:'Shark',
    components:{
        Loading
    },
    props:['setName','image'],
    data(){
        return {
            loading: true,
            data:{
           },
        }
    },
    created () {
        this.fetchData();
    },
    watch: {
        // call again the method if the route changes
        '$route': 'fetchData'
    },
    methods:{
        handleButtonClick(){
            this.setName("");
            this.$router.push('/')
        },
        async fetchData () {
                function dataURItoBlob(dataURI) {
                // convert base64 to raw binary data held in a string
                // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
                var byteString = atob(dataURI.split(',')[1]);

                // separate out the mime component
                var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

                // write the bytes of the string to an ArrayBuffer
                var ab = new ArrayBuffer(byteString.length);
                var ia = new Uint8Array(ab);
                for (var i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }
                return new Blob([ab], { type: mimeString });
                }

            const blob = dataURItoBlob(this.image);
            const file = new File([blob], "resultimg");
                const formData = new FormData();

                formData.append('image', file);

                const options = {
                    method: 'POST',
                    body: formData,
                };
                
                fetch('http://localhost:5000/api/predict', options)
                .then(resp => resp.json())
                .then(resp => {
                    this.data = sharkData[resp.class]
                    this.loading = false;
                })
                .error(err => console.log(err));
            }   
    }
}
</script>
<style>
.description{
    font-size:28px;
    white-space: pre-line;
}   
.description-container{
    padding-left:4%;
    padding-right:4%;
}
.container {
  display:flex;
  align-items:center;
  justify-content: center;
  padding:2%;
  flex-direction: column;
}
.image-shark-final{
    width: 529px;
    height: 278px;
}
.image-container-final{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2%;
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