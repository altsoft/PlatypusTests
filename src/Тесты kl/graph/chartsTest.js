/**
 * @name ChartTest
 * @author kl
 * *
 * Created on 02.07.2012, 16:49:49
 */


function createLineChart() {
    var chart = new LineChart('LineChartExample', 'xLabelExample', 'yLabelExample', dsDataset);
    chart.addSeries('SERIES1', 'SERIES2', 'First');
    chart.addSeries('SERIES1', 'SERIES3', 'Second');
    chart.addSeries('SERIES2', 'SERIES3', 'Primary');
    pnlChart.add(chart, HorizontalPosition.CENTER);
}

function createTimeSeriesChart() {
    var chart = new TimeSeriesChart('TimeSeriesChart', 'Time', 'Data', dsDataset);
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
    dsDataset.requery();
    dsPieChartData.requery();
}//GEN-LAST:event_btnRequeryActionPerformed
