function dowork(x) {
    var y = 100;
    if (x) {
        console.log("In Condition" + y);
    }
    console.log("Out of Condition" + y);
}
dowork(true);
dowork(false);
