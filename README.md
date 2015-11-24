# Chartist Bar Labels Demo

A simple Chartist plugin to put labels on top of bar charts. This is
just a demo page. For the full documentation go to the project page: <a
href="https://github.com/YorkshireInteractive/chartist-bar-labels">YorkshireInteractive/chartist-bar-labels</a>.

      
## Default usage

<div class="ct-chart"></div>

```js
var chart1 = new Chartist.Bar('.ct-chart', {
  labels: ['Feb', 'Mar', 'Apr', 'May'],
  series: [
    [19, 15, 9, 13]
  ],
  },{
  height: 400,
  axisY: {
    onlyInteger: true
  },
  plugins: [
    Chartist.plugins.ctBarLabels()
  ]
});
```
      

## Custom positioning and labeling usage

<div class="ct-chart-2"></div>

```js
var chart2 = new Chartist.Bar('.ct-chart-2', {
  labels: ['% to Campaign Goal', '% to Prior Month', '% to Prior Year'],
  series: [
    [127, 211, 146]
  ]
}, {
  chartPadding: {
    right: 50
  },
  height: 350,
  horizontalBars: true,
  reverseData: true,
  axisX: {
    labelInterpolationFnc: function(value) {
      return value + '%';
    },
    onlyInteger: true,
  },
  axisY: {
    offset: 135,
  },
  plugins: [
    Chartist.plugins.ctBarLabels({
      position: {
        x: function (data) {
          return data.x1 + 50
        }
      },
      labelOffset: {
        y: 7
      },
      labelInterpolationFnc: function (text) {
        return text + '%'
      }
    })
  ]
```
