//test that app.js is working!
console.log( 'svgExample.js loaded' );

//test that d3 is working
d3 ? console.log( 'd3 is runnig: ' , d3 ) : console.log( 'd3 is not running..' );

//simple bars
function scaling() {
    //note the 1200 at the end of the array is greater than the svg width of 800px
    // this could be anything (PPH, SPORH, etc..)
    var graphData   = [ 88 , 765 , 400 , 322 , 644 , 1100 ],
        w           = 800,
        h           = 800;

    //we can create scaling to fit the bars within the svg boundaries
    // d3.scale.linear on v3
    var scaling = d3.scaleLinear()
        .domain( [ 0 , 1200 ] ) //min and max scaling
        .range( [ 0 , w ] ); //actual size of the canvas

    //create the canvas the svg elements sit on
    var canvas = d3.select( '.graphContainer' )
        .append( 'svg' )
        .attr( 'width' , w )
        .attr( 'height' , h );

    //create the bars
    var graphBars = canvas.selectAll( 'rect' )
        //tell it where the data is coming from
        .data( graphData )
        //enter tells the computer we are going to do something with the data
        .enter()
            .append( 'rect' )
            .attr( 'fill' , 'pink' )
            .attr( 'width' , function( d ){  return scaling( d );  } )
            .attr( 'height' , 30 )
            //d for data, i for index in the array graphData from line 9!
            .attr( 'y' , function( d , i ){  return i * 50;  });
}


