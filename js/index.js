function bake(temp) {
    var message;
    if (temp > 500) {
        message = "I'm not a nuclear reactor!";
    } else if (temp < 100) {
        message = "I'm not a refrigerator!";
    } else {
        message = "That's a very comfortable temperature for me!";
    }
    console.log(message)
    //return message;
}

var status = bake(350);
//console.log(status);



var radius = 5;
var area = circleArea(radius);
alert(area);


function circleArea(r) {
    var a = Math.PI * r *r;
    return (a + "  dkgj");
    // без return функція буде undefined;
}


function clunk(times) {
    var num = times;
    while (num > 0) {
        console.log('clunk');
        num--;
    }
}
clunk(7);

function thingamajig(size) {
    var facky = 1;
    if (size == 0) {
        console.log("clank");
    } else if (size == 1) {
        console.log("thunk");
    } else {
        while (size > 1) {
            facky = facky * size;
            size = size - 1;
            console.log(facky);        
        }
    }
}
 
 thingamajig(4);
 thingamajig(5);
 
 