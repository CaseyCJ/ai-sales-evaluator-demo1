<script  setup>
const props = defineProps({
    assessment:{
        type:Object,
        required:true
    }
})

//四个维度评分
const abilities=[
    {
        name:'专业解释能力',
        grade:props.assessment.专业解释能力,
        score:props.assessment.专业解释评分
    },
        {
        name:'证据使用能力',
        grade:props.assessment.证据使用能力,
        score:props.assessment.证据使用评分
    },
        {
        name:'异议承接能力',
        grade:props.assessment.异议承接能力,
        score:props.assessment.异议承接评分
    },
        {
        name:'成交推进能力',
        grade:props.assessment.成交推进能力,
        score:props.assessment.成交推进评分
    }
]
</script>

<template>
    <div calss="ability-scores">
        <h2>逐维分析</h2>

        <div class="ability-list">
            <div
                v-for="(ability,index) in abilities"
                :key="ability.name"
                class="ability-item"
            >
            <span>{{ index+1 }}.</span>
            <span>{{ ability.name }}</span>
            <span>{{ ability.grade}}</span>
            <span>{{ ability.score}}</span>
            </div>
        </div>
    </div>
</template>