<template>
    <div class="container">
        <label for="">坐标系:</label>
        <select v-model="selected">
            <option disabled value="">请选择</option>
            <option>84</option>
            <option>大地</option>
        </select>
    </div>
</template>

<script>
export default {
    data () {
        return {
            selected: ''
        }
    },
    watch: {
        selected: function (value) {
            this.$emit('selected', value)
        }
    }
}
</script>

<style>
.container{
    /* display:inline-block; */
    height: 30px;
    border-radius: 8px;
    color: #4caf50;
}
/* .container select option{ */
    /* color: #4caf50; */
/* } */
</style>

