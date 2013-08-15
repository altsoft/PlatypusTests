/**
 * @name ChartTest
 * @author kl
 */

function createLineChart() {
    var chart = new LineChart('LineChartExample', 'xLabelExample', 'yLabelExample', dsDataset);
    chart.addSeries('SERIES1', 'SERIES2', 'First');
    chart.addSeries('SERIES1', 'SERIES3', 'Second');
    chart.addSeries('SERIES2', 'SERIES3', 'Primary');
    pnlChart.add(chart, HorizontalPosition.CENTER);
}

function createTimeSeriesChart() {
    var chart = new TimeSeriesChart('TimeSeriesChart', 'Time', 'Data', jsData);//dsDataset);
    chart.addSeries('TIMELINE', 'SERIES1', 'One');
    chart.addSeries('TIMELINE', 'SERIES2', 'Two');
    chart.addSeries('TIMELINE', 'SERIES3', 'Three');
    pnlChart.add(chart, HorizontalPosition.CENTER);
    chart.XLabelsFormat = 'dd.MM.yyyy';
}

function createPieChart() {
    var chart = new PieChart('PieChartExample', 'NAME', 'DATA', dsPieChartData);
    pnlChart.add(chart, HorizontalPosition.CENTER);
}

function createChart() {
    pnlChart.clear();
    //createLineChart();
    createTimeSeriesChart();
    //createPieChart();
}

function btnCreateChartActionPerformed(evt) {//GEN-FIRST:event_btnCreateChartActionPerformed
    createChart();
}//GEN-LAST:event_btnCreateChartActionPerformed

function btnRequeryActionPerformed(evt) {//GEN-FIRST:event_btnRequeryActionPerformed
    pnlChart.children[0].dataChanged();
    dsDataset.requery();
    dsPieChartData.requery();
}//GEN-LAST:event_btnRequeryActionPerformed

var jsData = [{TIMELINE: 12, SERIES1: 4, SERIES2: 6, SERIES3: 7}, {TIMELINE: 24, SERIES1: 2, SERIES2: 8, SERIES3: 10}, {TIMELINE: 35, SERIES1: 14, SERIES2: 16, SERIES3: 17}];

function btnTestWillChangeActionPerformed(evt) {//GEN-FIRST:event_btnTestWillChangeActionPerformed
    if (pnlChart.children[0].data == dsDataset)
        pnlChart.children[0].data = jsData;
    else
        pnlChart.children[0].data = dsDataset;
}//GEN-LAST:event_btnTestWillChangeActionPerformed

function btnTest1ActionPerformed(evt) {//GEN-FIRST:event_btnTest1ActionPerformed
    pnlChart.children[0].dataWillChange();
}//GEN-LAST:event_btnTest1ActionPerformed

function btnTestChangedActionPerformed(evt) {//GEN-FIRST:event_btnTestChangedActionPerformed
    pnlChart.children[0].data[1].SERIES2 += 2;
    pnlChart.children[0].dataChanged();
}//GEN-LAST:event_btnTestChangedActionPerformed
