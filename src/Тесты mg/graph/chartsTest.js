/**
 * @name ChartTest
 * @author kl
 */

function ChartTest() {


var self = this;


function createLineChart() {
    var chart = new LineChart('LineChartExample', 'xLabelExample', 'yLabelExample', self.dsDataset);
    chart.addSeries('SERIES1', 'SERIES2', 'First');
    chart.addSeries('SERIES1', 'SERIES3', 'Second');
    chart.addSeries('SERIES2', 'SERIES3', 'Primary');
    self.pnlChart.add(chart, HorizontalPosition.CENTER);
}

function createTimeSeriesChart() {
    var chart = new TimeSeriesChart('TimeSeriesChart', 'Time', 'Data', jsData);//self.dsDataset);
    chart.addSeries('TIMELINE', 'SERIES1', 'One');
    chart.addSeries('TIMELINE', 'SERIES2', 'Two');
    chart.addSeries('TIMELINE', 'SERIES3', 'Three');
    self.pnlChart.add(chart, HorizontalPosition.CENTER);
    chart.XLabelsFormat = 'dd.MM.yyyy';
}

function createPieChart() {
    var chart = new PieChart('PieChartExample', 'NAME', 'DATA', self.dsPieChartData);
    self.pnlChart.add(chart, HorizontalPosition.CENTER);
}

function createChart() {
    self.pnlChart.clear();
    //createLineChart();
    createTimeSeriesChart();
    //createPieChart();
}

function btnCreateChartActionPerformed(evt) {//GEN-FIRST:event_btnCreateChartActionPerformed
    createChart();
}//GEN-LAST:event_btnCreateChartActionPerformed

function btnRequeryActionPerformed(evt) {//GEN-FIRST:event_btnRequeryActionPerformed
    self.pnlChart.children[0].dataChanged();
    self.dsDataset.requery();
    self.dsPieChartData.requery();
}//GEN-LAST:event_btnRequeryActionPerformed

var jsData = [{TIMELINE: 12, SERIES1: 4, SERIES2: 6, SERIES3: 7}, {TIMELINE: 24, SERIES1: 2, SERIES2: 8, SERIES3: 10}, {TIMELINE: 35, SERIES1: 14, SERIES2: 16, SERIES3: 17}];

function btnTestWillChangeActionPerformed(evt) {//GEN-FIRST:event_btnTestWillChangeActionPerformed
    if (self.pnlChart.children[0].data == self.dsDataset)
        self.pnlChart.children[0].data = jsData;
    else
        self.pnlChart.children[0].data = self.dsDataset;
}//GEN-LAST:event_btnTestWillChangeActionPerformed

function btnTest1ActionPerformed(evt) {//GEN-FIRST:event_btnTest1ActionPerformed
    self.pnlChart.children[0].dataWillChange();
}//GEN-LAST:event_btnTest1ActionPerformed

function btnTestChangedActionPerformed(evt) {//GEN-FIRST:event_btnTestChangedActionPerformed
    self.pnlChart.children[0].data[1].SERIES2 += 2;
    self.pnlChart.children[0].dataChanged();
}//GEN-LAST:event_btnTestChangedActionPerformed

}