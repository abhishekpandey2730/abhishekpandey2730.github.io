function teamMatchesData(){

    var teamData = require("../JSON-Files/matches.json");
    
    var perTeamData = {};

    teamData.map(obj => {
        if(obj["winner"]!==""){
            if(perTeamData.hasOwnProperty(obj["winner"])){
                perTeamData[obj["winner"]]++;
            }
            else{
                perTeamData[obj["winner"]] = 1;
            }
        }
    })

    var matchesWonArr = [];
    for(let ele in perTeamData){
        matchesArr.push({name:ele, y:PerYearResult[ele]});
    }

    const fs = require('fs');
    var jsonData = JSON.stringify(perTeamData);
    fs.writeFile('../Querries-JSON/MatchesWonByTeam.json' , jsonData , (err) => {
        if(err) throw err;
    });

}

teamMatchesData();