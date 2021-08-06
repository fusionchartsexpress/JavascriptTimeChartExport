const fs = require('fs');
const path = require('path');
const {ExportManager, ExportConfig} = require('fusionexport-node-client');

// Instantiate ExportManager and ExportConfig
const exportManager = new ExportManager();
const exportConfig = new ExportConfig();

//Read the configuration from JSON
let jsonStr = fs.readFileSync("resources/time-series-config.json", "utf8");
let chartConfig = JSON.parse(jsonStr);

//Set the options for exportConfig
exportConfig.set("chartConfig", chartConfig);
exportConfig.set('templateFilePath', path.join('resources', 'time-series-template.html'));
exportConfig.set('type', 'png');
exportConfig.set('quality', 'best');

// Export the chart
exportManager.export(exportConfig, outputDir = '.', unzip = true).then((exportedFiles) => {
  exportedFiles.forEach(file => console.log(file));
}).catch((err) => {
  console.log(err);
});