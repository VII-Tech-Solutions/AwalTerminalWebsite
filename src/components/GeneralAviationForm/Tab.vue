<template>
    <div v-show="isActive"><slot></slot></div>
</template>


<script>
export default{
    
    name: 'tab',

    props: {
        name:{required: true},
        info:{},
        selected: { default: false}
    },

    data(){
        debugger;
        return{
            isActive: false,
            
        }
    },

    created(){
         debugger;
        this.isActive = this.selected
    },
}
</script>


<style>
</style>