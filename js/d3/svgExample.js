//test that app.js is working!
console.log( 'svgExample.js loaded' );

//test that d3 is working
d3 ? console.log( 'd3 is runnig: ' , d3 ) : console.log( 'd3 is not running..' );
/*
if ( d3 ) {
    console.log( 'd3 is runnig: ' , d3 );
} else {
    console.log( 'd3 is not running..' );
} */

function svgExample() {

    //describe where the SVG is being created at
    var canvas = d3.select( 'body' )
        .append( 'svg' )
        //create an svg with width 700 and height 700
        .attr( 'width' , 700 )
        .attr( 'height', 700 );

    //Now create a circle
    //This is where its nice to  know the SVG fundamentals!
    var circle = canvas.append( 'circle' )
        .attr( 'cx' , 350 ).attr( 'cy' , 350 )
        .attr('r' , 50 )
        .attr( 'fill' , 'blue' );

    var rect = canvas.append( 'rect' )
        .attr( 'width' , 300 ).attr( 'height' , 100)
        .attr( 'fill' , 'orange' );

    var line = canvas.append( 'line' )
        .attr( 'x1' , 100 ).attr( 'x2' , 900 )
        .attr( 'y1' , 200 ).attr( 'y2' , 500 )
        .attr( 'stroke' , 'grey' )
        .attr( 'stroke-width' , 3 );
}
