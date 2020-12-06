<template>
    <Loading v-if="loading" />
    <div v-else class="container">
        <h2 class="header-text">
            You are a <span style="color:#0097CD">{{data.label}}</span> shark.
        </h2>
        <div class="image-container">
            <img :src="data.image" alt="" class="image">
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
export default {
    name:'Shark',
    components:{
        Loading
    },
    data(){
        return {
            loading: true,
            data:{
                label:"Basking",
                image:"https://www.mcsuk.org/media/f3fc5b139170f774d0561f429953a20607ca9f7d.jpeg",
                description:"The Basking Shark is the second largest species of extant shark, only smaller than the Whale Shark in overall size. Compared to Great White Sharks, they are much larger. Like whale sharks, basking sharks are filter feeders that grow to enormous size while eating the ocean’s smallest organisms! \n\nBasking sharks can reach enormous sizes – some have been over 40 feet long and weigh as much as 16 tons! Due to their slow movement, docile nature, and lack of sharp teeth, basking sharks have long been a target of the fishing industry. However, its populations have dwindled considerably due to all the harvesting, and the shark is now considered Endangered."

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
        async fetchData () {
                this.loading = false
                // replace `getPost` with your data fetching util / API wrapper
                /*getPost(fetchedId, (err, post) => {
                    // make sure this request is the last one we did, discard otherwise
                    if (this.$route.params.id !== fetchedId) return
                    this.loading = false
                    if (err) {
                    this.error = err.toString()
                    } else {
                    this.post = post
                    }
                })*/
                await new Promise (resolve => setTimeout(resolve,5000));
                this.loading = false;
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
.image{
    width: 529px;
    height: 278px;
}
.image-container{
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