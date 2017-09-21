<template>
    <div class="container">
        <div class="contant">
            <div class="left">
                <!-- <textarea name="" id="" cols="30" rows="10" v-model="from.data" placeholder="请输入要转换的gps information"> -->
                <!-- </textarea> -->
                <gps-data-text :text="from.data" :text.sync="from.data"></gps-data-text>
                <gps-type v-on:selected="fromSelected"></gps-type>
            </div>
            <div class="right">
                <!-- <textarea name="" id="" cols="30" rows="10" v-model="to.data" placeholder=""> -->
                <!-- </textarea> -->
                <gps-data-text :text="to.data"></gps-data-text>
                <gps-type v-on:selected="toSelected"></gps-type>
            </div>
        </div>

        <div class="control">
            <button class="button" v-on:click="transfer">Transfer</button>
        </div>

    </div>
</template>

<script>

import GpsDataText from './GPSTransfer/GPSDataText'
import GpsType from './GPSTransfer/GPSType'

import ft from '../../util/formatter'

export default {
    name: 'GTClinet',
    components: { GpsDataText, GpsType },
    data: function () {
        return {
            from: {
                data: '',
                type: ''
            },
            to: {
                data: '',
                type: ''
            }
        }
    },
    methods: {
        transfer: function () {
            let data = ft.formatter(this.from.data)
            this.to.data = data
        },
        fromSelected: function (value) {
            this.from.type = value
        },
        toSelected: function (value) {
            this.to.type = value
        }
    }
}
</script>

<style>
* {
    font-size: 20px;
}

.container {
    width: 100%;
    height: 100%;
}

.contant {
    width: 100%;
    height: 300px;
}

.left {
    width: 40%;
    height: 100%;
    float: left;
    background: yellow;
    padding: 10px;
}

.control {
    position: fixed;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    bottom: 40px;
}

textarea {
    height: 100%;
    width: 100%;
}


/* .control gps-type {
    display:inline-block;
} */

.button {
    background-color: #4caf50;
    border: none;
    color: white;
    font-size: 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    /* padding: 15 32px; */
    border-radius: 5px;
}

.right {
    width: 40%;
    height: 100%;
    float: right;
    background: blue;
    padding: 10px;
}
</style>
