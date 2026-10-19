<script setup>
//导入模拟数据
import mockScore from '../data/mockScore.json'
//导入整体评价组件
import OverallAssessment from '../components/OverallAssessment.vue'
import AbilityScores from '../components/AbilityScores.vue'
import QuestionRound from '../components/QuestionRound.vue'
</script>


<template>
    <div>
        <h1>服务评估</h1>

        <!-- 将整体评价数据传递给子组件 -->
        <OverallAssessment
            :assessment="mockScore.销售整体评估"
        />
        <AbilityScores
            :assessment="mockScore.销售整体评估"
        />
        <QuestionRound
            :rounds="mockScore.客户问题回合"
        />

        <RouterLink to="/upload">
            <button>返回上传页面</button>
        </RouterLink>
    </div>
</template>
