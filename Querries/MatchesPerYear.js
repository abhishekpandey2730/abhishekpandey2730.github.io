function matchesPlayedPerYear(){
    var matchData = require('../JSON-Files/matches.json');
    var PerYearResult={};

   /* matchData.map(obj => {
        if(PerYearResult.hasOwnProperty(obj["season"])){    
            PerYearResult[obj["season"]] += 1;
        }
        else{
        PerYearResult[obj["season"]] = 1;
        }
    });*/
    matchData.map(obj => { PerYearResult.hasOwnProperty(obj["season"])?PerYearResult[obj["season"]]++:PerYearResult[obj["season"]]=1})

    var matchesArr = [];
    for(let ele in PerYearResult){
        matchesArr.push({name:ele, y:PerYearResult[ele]});
    }

    const fs = require('fs');
    var JSONdata = JSON.stringify(matchesArr);
    fs.writeFile('../Querries-JSON/MatchesPerYear.json', JSONdata, (err) => {
        if(err) throw err;
    });
}

matchesPlayedPerYear();