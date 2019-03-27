var csvToJson = require("convert-csv-to-json");

//function to convert csv to json
function convertToJson(inputFile,outputFile){
    csvToJson.generateJsonFileFromCsv(inputFile,outputFile);
}

//function call

convertToJson("CSV-Files/matches.csv","JSON-Files/matches.json");
convertToJson("CSV-Files/deliveries.csv","JSON-Files/deliveries.json");