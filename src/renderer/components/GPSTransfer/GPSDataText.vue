<template>
    <textarea name="" id="" cols="30" rows="10" v-model="data" placeholder="请输入要转换的gps information">
    </textarea>
</template>

<script>
export default {
    name: 'gps-data-text',
    props: {
        'text': String
    },
    data: function () {
        return {
            data: this.text
        }
    },
    watch: {
        text: function (value) {
            this.data = value
        },
        data: function (value) {
            this.$emit('update:text', value)
        }
    }
}
</script>

<style>
* {
    font-size: 20px;
}

textarea {
    height: 100%;
    width: 100%;
}
</style>






