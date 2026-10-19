<script setup>
import { computed } from  'vue'

//从父组件接收assessment数据
const props = defineProps({
    assessment:{
        type:Object,
        required:true
    }
})

//根据四项能力计算综合分数
const score = computed(() => {
    const data =props.assessment
    const scores=[
        data.专业解释评分+
        data.证据使用评分+
        data.异议承接评分+
        data.成交推进评分
    ]

    //如果存在未评估的分数，就不计算平均分
    if(scores.some(item => item === null)){
        return null 
    }

    //正常计算四项评分的平均值
    return scores.reduce((sum,item)=> sum+item,0)/4
})
</script>

<template>
    <div>
        <h2>整体评价</h2>

        <p>综合等级：{{assessment.综合等级}}</p>
        <p>综合得分：{{ score === null ? '未评估' : score }}</p>

     <!-- class=...给容器起名便于CSS定位 -->

        <div class="assessment-cards">
            <div class="advantages">
                <h3>服务优势</h3>
                <ul>
                    <li v-if="assessment.优势1 !== '无'">
                        {{ assessment.优势1 }}
                    </li>
                    <li v-if="assessment.优势2 !== '无'">
                        {{ assessment.优势2 }}
                    </li>
                    <li v-if="assessment.优势3 !== '无'">
                        {{ assessment.优势3 }}
                    </li>
                </ul>
            </div>

            <div class="weaknesses">
                <h3>服务短板</h3>
                <ul>
                    <li v-if="assessment.短板1 !== '无'">
                        {{ assessment.短板1 }}
                    </li>
                    <li v-if="assessment.短板2 !== '无'">
                        {{ assessment.短板2 }}
                    </li>
                    <li v-if="assessment.短板3 !== '无'">
                        {{ assessment.短板3 }}
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>
