
function topEconomicBowlers(){
 
    // Store the json files into variables:
    var matchesData = require('../JSON-Files/matches.json');
    var deliverData = require('../JSON-Files/deliveries.json');


    var matchesInYear = [];      
    var recordBowlersObj = {};
    var economyBowlersArr = [];
    var topTenBowlersArr = [];
    var economicBowlers = {};



    // Store matches in the year 2015 in a seperate object:
    matchesData.map(obj => {
        if(obj["season"] === 2015){
            matchesInYear.push(obj["id"]);
        }
    });

    //Check for deliveries of 2015
    deliverData.map(del => {
        if(matchesInYear.includes(parseInt(del["match_id"]))){  
            if(recordBowlersObj.hasOwnProperty(del["bowler"])){
                recordBowlersObj[del["bowler"]]["runs"] += parseInt(del["total_runs"]);
                recordBowlersObj[del["bowler"]]["balls"] += 1; 
            }
            else{
                recordBowlersObj[del["bowler"]] = {};
                recordBowlersObj[del["bowler"]]["runs"] = parseInt(del["total_runs"]);
                recordBowlersObj[del["bowler"]]["balls"] = 1;    
            }
        }
    });

   

    for(var bow in recordBowlersObj){
        var arr = [];
        let economyRate = (recordBowlersObj[bow]["runs"] * 6) / (recordBowlersObj[bow]["balls"]);
        arr.push(bow);
        arr.push(economyRate);
        economyBowlersArr.push(arr);
    }

    economyBowlersArr.sort((a,b) => a[1]-b[1] );

    var topTenBowlers = economyBowlersArr.slice(0, 11);
    
  
    topTenBowlers.map(item => {
        economicBowlers[item[0]] = item[1];
    })

    
    for(var obj in economicBowlers){
        topTenBowlersArr.push({'name': obj, 'y':economicBowlers[obj] });
    }



    const fs = require('fs');
    jsonData = JSON.stringify(topTenBowlersArr);
    fs.writeFile('../Querries-JSON/topEconomicBowlers.json', jsonData, (err) => {
        if(err) throw err;
    });
}
topEconomicBowlers();


