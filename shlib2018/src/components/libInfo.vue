<!-- 图书馆信息组件 -->
<template>
    <div class="lib-info">
        <div class="lib-transportation">
            <div class="lib-circle"></div>
            <div class="lib-transportation-box">
                <div class="title">交通信息</div>
                <table>
                    <tr>
                        <td class="left-title">地址：</td>
                        <td class="item-details">上海市淮海中路1555号</td>
                    </tr>
                    <tr>
                        <td class="left-title">公交：</td>
                        <td class="item-details">26、911、926、945、920、830、96、93、15、548等高安路；地铁十号线上海图书馆站、地铁一号线衡山路站</td>
                    </tr>
                </table>
                <div class="in"></div>
                <div class="out"></div>
            </div>
        </div>
        <div class="lib-opentime">
            <div class="lib-circle"></div>
            <div class="lib-time-box">
                <div class="title">开馆时间</div>
                <table>
                    <tr>
                        <td class="left-title">周一至周日</td>
                        <td class="item-details">8:30--20:30</td>
                    </tr>
                    <tr>
                        <td class="left-title">国家法定假日</td>
                        <td class="item-details">9:00--16:00</td>
                    </tr>
                </table>
                <div class="in"></div>
                <div class="out"></div>
            </div>
        </div>
        <div class="go-top" title="回到顶部">
            <div class="lib-circle" @click="goToTop()"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "libInfo",
    // data () {},
    methods: {
        goToTop() {
            window.scrollTo(0,0);
        }
    }
}
</script>
<style lang="less" scoped>
.lib-info {
    position: fixed;
    right: 100px;
    top: 60%;
    z-index: 200;
    .lib-transportation {
        overflow: hidden;
        position: relative;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        cursor: pointer;

        .lib-circle {
            background: url(/static/images/info/info-location-off.png) no-repeat center;
            background-size: 100%;
        }
        .lib-transportation-box {
            // z-index: 190;
            // display: none;
            position: absolute;
            width: 230px;
            height: 174px;
            left: 48px;
            top: -68px;
            padding: 10px;
            background: #FFFFFF;
            box-shadow: 0 10px 21px 0 rgba(138,138,138,0.29);
            border-radius: 2px;
            transition: left .3s;
            // overflow: hidden;
            .title {
                font-size: 16px;
            }
            .left-title {
                height: 26px;
                line-height: 26px;
                width: 45px;
                vertical-align: top;
            }
            .item-details {
                padding: 3px 0;
            }
            .out,.in{
                position:absolute;
                width:0;
                height:0px;
            }
            .out{
                border:10px solid transparent;
                border-left-color:#fff;
                top: 80px;
                right: -20px;
            }
        }
        &:hover {
            overflow: unset;
            .lib-transportation-box {
                left: -250px;
            }
            .lib-circle {
                background: url(/static/images/info/info-location-on.png) no-repeat center;
            }
        }
    }
    
    .lib-opentime {
        overflow: hidden;
        position: relative;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: #D3D3D3;
        cursor: pointer;
        .lib-circle {
            background: url(/static/images/info/info-time-off.png) no-repeat center;
            background-size: 100%;
        }
        .lib-time-box {
            // display: none;
            position: absolute;
            width: 200px;
            left: -200px;
            height: 84px;
            left: 48px;
            // left: -220px;
            top: -22px;
            padding: 10px;
            background: #FFFFFF;
            box-shadow: 0 10px 21px 0 rgba(138,138,138,0.29);
            border-radius: 2px;
            transition: left .3s;
            .title {
                font-size: 16px;
            }
            .td {
                height: 26px;
                line-height: 26px;
            }
            .item-details {
                padding-left: 5px;
            }
            .out,.in{
                position:absolute;
                width:0;
                height:0px;
            }
            .out{
                border:10px solid transparent;
                border-left-color:#fff;
                top: 34px;
                right: -20px;
            }
        }
        &:hover {
            overflow: unset;
            .lib-time-box {
                left: -220px;
            }
            .lib-circle {
                background: url(/static/images/info/info-time-on.png) no-repeat center;
            }
        } 
    }

    .go-top {
        cursor: pointer;
        .lib-circle {
            background: url(/static/images/info/info-gotop-off.png) no-repeat center;
            background-size: 100%;
        }
        &:hover {
            .lib-circle {
                background: url(/static/images/info/info-gotop-on.png) no-repeat center;
            }
        }
    }
    
    >div {
        margin-bottom: 24px;
    }
    @media (min-width: 1200px) and (max-width: 1366px) {
        right: 20px;
    }
    @media (min-width: 768px) and (max-width: 1200px) {
        right: 10px;
    }
    @media only screen and (max-width: 767px) {
        display: none;
    }
}
.lib-circle {
    width: 46px;
    height: 46px;
    line-height: 46px;
    border-radius: 50%;
    background: #E4E4E4;
    position: relative;
    z-index: 210;
    text-align: center;
    .iconfont {
        color: #fff;
        font-size: 20px;
    }
}

</style>
