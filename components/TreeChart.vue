<template>
  <div class="graph">
    <canvas id="tree-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
import treeChartData from "@/data/tree-data"
export default {
    name: 'TreeChart',
    data() {
        return {
            treeChartData: treeChartData
        }
    },
    mounted() {
        const ctx = document.getElementById('tree-chart');
        new Chart(ctx, this.treeChartData);
    }
}
</script>

<style lang="scss" scoped>
.graph{
    display: flex;
    align-items: center;
}
</style>