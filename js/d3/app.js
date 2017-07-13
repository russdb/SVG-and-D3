//test that app.js is working!
console.log('app.js loaded');

//test that d3 is working
if (d3) {
    console.log( 'd3 is runnig: ' , d3 );
} else {
    console.log( 'd3 is not running..' );
}

//Good way to start out with d3
function start() {
    d3.select( "#d3-start" )
        .append( "p" )
        .text( "Place a console.log(d3) in your script block to see the entire d3 object in the console" );  
}

