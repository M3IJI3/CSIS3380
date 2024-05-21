const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = '';

    day = currentDay;
    // console.log(currentDay)

    // if (currentDay === 6 || currentDay === 0) {
    //     day = 'weekend';
    //     console.log(currentDay)
    //     // res.sendFile(__dirname+"/weekend.html");
    // }
    // else {
    //     day = 'weekday';
    //     console.log(day)

    //     // res.sendFile(__dirname+"/weekday.html");
    // }
    res.render('list', {kindOfDay: day});
    }
);

app.listen(3000, function(){
    console.log("server started on port 3000")
});