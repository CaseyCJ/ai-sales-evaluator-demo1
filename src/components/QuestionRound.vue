<script setup>
const props=defineProps({
    rounds:{
        type :Array,
        required:true
    }
})
</script>

<template>
    <div class="question-rounds">
        <h2>客户问题回合</h2>

        <!--没有有效回合时-->
        <p v-if="rounds.length === 0">
            本次通话未识别到可评估的高价值客户问题回合。
        </p>

        <!--有效回合：根据数组自动生成-->
        <div v-else>
            <div    
                v-for="(round,index) in rounds"
                :key="index"
                class="round-item"
            >
                <h3>{{ round.二级_项目场景 }}</h3>
                <p>问题类型：{{ round.一级_博弈维度 }}</p>
                <p>客户疑虑：{{ round.三级_疑虑标签 }}</p>
                <p>回合评级：{{ round.评级 }}</p>

                <!-- 客户与销售的原始对话 -->
                <div class="conversation">
                    <h4>对话原文</h4>
                    <p>客户：{{ round.客户原话 }}</p>
                    <p>销售：{{ round.销售回答原话 }}</p>
                </div>

                <!-- 销售的应对方式与结果 -->
                <div class="response-analysis">
                    <h4>应对分析</h4>
                    <p>应对方式：{{ round.应对方式 }}</p>
                    <p>客户反馈：{{ round.客户反馈结果 }}</p>
                    <p>风险评估：{{ round.风险评估 }}</p>
                </div>

                <!-- 回合评估依据 -->
                <div class="evidence-analysis">
                    <h4>评估依据</h4>
                    <p>回答客户关键点：{{ round.回答客户关键点 }}</p>
                    <p>可以借助的资源：{{ round.可以借助的资源 }}</p>
                    <p>证据核查：{{ round.证据核查_看得见 }}</p>
                    <p>类比核查：{{ round.类比核查_听得懂 }}</p>
                </div>
            </div>
        </div>
    </div>
</template>