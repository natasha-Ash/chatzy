<template>
    <div class="time-bar">
        {{ getTime }}
    </div>
</template>

<script>
export default {
    name: "TimeViewer",
    props: {
        time: Date
    },    
    computed: {
        getTime() {
            return `${this.time.getHours()}:${this.time.getMinutes()}`;
        }
    }
}
</script>

<style>
.time-bar {
    text-align: end; 
    padding-right: 5px;
    color: rgb(70, 70, 70);
    opacity: 0.5;
    font-size: 12px;
}
</style>
