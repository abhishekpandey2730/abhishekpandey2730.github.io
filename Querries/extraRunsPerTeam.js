/*function extraRunsPerTeam(){
    var runsData = require("../JSON-Files/matches.json");
    var deliveryData = require("../JSON-Files/deliveries.json");
    var teamID = [];
    var extraRuns = {};

    runsData.map(obj =>{
        if(obj["season"]=== 2016){
            if(!teamID.includes(obj["id"]))
                teamID.push(obj["id"]);
        }
    })

    deliveryData.map(score => {
        if(teamID.includes(score["match_id"])){
            console.log("ID Matched");
            if(extraRuns.hasOwnProperty(score["bowling_team"])){
                extraRuns[score["bowling_team"]] += parseInt(score["extra_runs"]);
            }
            else{
                extraRuns[score["bowling_team"]] = parseInt(score["extra_runs"]);
            }
        }
    })
    
    const fs = require('fs');
    var JsonData = JSON.stringify(extraRuns);
    fs.writeFile("../Querries-JSON/extraRunsPerTeam.json" , JsonData,(err)=>{
        if(err) throw err;
    });

    console.log(extraRuns);
}

extraRunsPerTeam();

*/


function matchesWonAllTeams(){
    
    // Store the json files into variables:
    var matches = require('../JSON-Files/matches.json');
    var deliveries = require('../JSON-Files/deliveries.json');

    // Store matches in the year 2016 in a seperate object:
   
    var matchesInYear = [];
    for(var i=0; i<matches.length; i++){
        if(matches[i]["season"] === 2016){
            matchesInYear.push(matches[i]);
        }
    }

    var extraRunsConceded = {};
    for(var i=0; i<matchesInYear.length; i++){
        var id = matchesInYear[i]["id"];
        
        deliveries.map(item => {
            
            if(item["match_id"] == id){
                if(extraRunsConceded.hasOwnProperty(item["bowling_team"])){
                    extraRunsConceded[item["bowling_team"]] += parseInt(item["extra_runs"]);
                }
                else{
                    extraRunsConceded[item["bowling_team"]] = parseInt(item["extra_runs"]);
                }
            }
        })
        }
    }

    var extraRunsArr= [];
    for(let ele in extraRunsConceded){
        extraRunsArr.push({name:ele,
                             y:extraRunsConceded[ele]
                            });
    }

    const fs = require('fs');
    var jsonData = JSON.stringify(extraRunsArr);
    fs.writeFile('../Querries-JSON/extraRunsPerTeam.json' , jsonData , (err) => {
        if(err) throw err;
    });

    
}

matchesWonAllTeams();
