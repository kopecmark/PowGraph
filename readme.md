# PowderGraph

[Live Link](https://kopecmark.github.io/PowderGraph/)

## Overview

PowderGraph is a visualization application to show how much snow has fallen monthly throughout the years in Lake Louise - Alberta, Canada.

### Functionality

* The app consists of a single page
* A user can toggle between snow and rain totals using the buttons
* A user can select a single year using the slider to view the total amount of snowfall or rainfall on the bar graph
* Using the range slider, a user can view multiple years of snowfall or rainfall totals on the line graph and compare them to a single year against the bar graph
* Hovering over a each bar in the bar graph will display additional information for each month
* Hovering on a line in the line graph will display the year that the line represents
* Hovering over a point on the line graph will display the precipitation total for that month


### Technologies employed

* Vanilla JavaScript for data sorting and DOM manipulation
* D3.js for visualizing the data
* HTML
* CSS
* noUiSlider for styling the sliders

### Data
* Data was obtained from the Government of Canada Environment and Natural Resources Climate Data Website [LINK](http://climate.weather.gc.ca/index_e.html)
* Data was downloaded in csv file format using a Homebrew script for all available years that the weather station was in operation
* The data was parsed and statically available on the website

### Features
A user can select a year using the slider to view monthly precipitation totals and hover over each bar to view exact values
![Wireframe](./gifs/slider.gif)

A user can select a range of years using the range slider to view multiple years on the line graph and hover over the line to view the year
![Wireframe](./gifs/rangeSlider.gif)

A user can click the buttons to toggle between snow and rain fall totals
![Wireframe](./gifs/buttons.gif)

### CODE
#### Data download
```
  for year in `seq 2000 2005`;do for month in `seq 1 12`;do wget --content-disposition "http://climate.weather.gc.ca/climate_data/bulk_data_e.html?format=csv&stationID=2409&Year=${year}&Month=${month}&Day=14&timeframe=3&submit= Download+Data" ;done;done
```

### Possible Future Implementations
* The ability to search all weather stations in Canada and have the application automatically fetch the data so that it can be displayed within the graph.
* Adjust graph bar colors to change shading based on total snowfall for given month compared to average totals for the specified month for all years data has been recorded.