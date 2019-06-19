<template>
    <div class="main">  
        <v-header crumbs_title="代办通知"></v-header>
        <div class="lists">
            <div class="list clear" v-for="(item, index) in lists" :key="index">
                <span class="list_num fl">{{ index + 1 }}</span>
                <p class="fl" v-if="item.status == 4">企业名称:&nbsp;{{ item.company_name }}&nbsp;&nbsp;&nbsp;<span style="color: rgb(40, 125, 212);">{{ item.name }}&nbsp;&nbsp;&nbsp;已完成</span></p>
                <p class="fl" v-else-if="item.status == 1">{{ item.name }}已完成填报，请点击<router-link :to="{path: '/staff', query: {'search': item.id}}">进入分配</router-link></p>
                <p class="fl" v-else-if="item.status == 3">{{ item.name }}已完成填报，请点击<router-link :to="{path: '/company', query: {'search': item.id}}">进入审核</router-link></p>
                <p class="fl" v-else>{{ item.name }}已开通填报，请点击<router-link :to="{path: '/company', query: {'search': item.id}}">进入填表</router-link></p>
                <!-- <p class="fl">{{ item.message }}请点击<a href="####"> 进入填表</a></p> -->
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vHeader from "components/vHeader/vHeader"
import vFooter from "components/vFooter/vFooter"
import { agentEvent } from "service/getData"

export default {
    components: {
        vHeader,
        vFooter
    },
    data () {
        return {
            lists: []
        }
    },
    mounted () {
        // 代办事项
        agentEvent().then(res => {
            this.lists = [...res]
        })
    }
}
</script>


<style scoped lang="less">
    @import "../style/mixin.less";

    .main {
        position: relative;
        min-height: 100%;
    }
    .lists {
        padding: 15px 15px 121px 15px;
        .list {
            &:hover {
                background: #F7F7F7;
            }
            border-bottom: 1px solid #F1F1F1;
            line-height: 40px;
            .sc(12px, #333);
            .list_num {
                padding-left: 10px;
                .wh(30px, auto)
            }
            a {
                color: @theme;
            }
        }
    }
</style>