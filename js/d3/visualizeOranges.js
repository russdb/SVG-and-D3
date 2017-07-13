//test that app.js is working!
console.log( 'svgExample.js loaded' );

//test that d3 is working
d3 ? console.log( 'd3 is runnig: ' , d3 ) : console.log( 'd3 is not running..' );

function visualizeOranges() {

    /* Size of the oranges, this is where you would place your data from the server */
    var orangeData = [ 10 , 30 , 50 , 100 ];

    var canvas = d3.select( '.orangeContainer' )
        .append( 'svg' )
        .attr( 'width' , 768 )
        .attr( 'height' , 1024 );

    //oranges will apply to every circle
    var oranges = canvas.selectAll( 'circle' )
        //now we designate where the data is coming from!
        .data( orangeData )
        // Enter is saying we are going to do something to the data
        .enter()
            .append( 'circle' )
            .attr( 'fill' , 'orange' )
            //now we will place the circles on the canvas page..
            // d = data , i = index in the array
            .attr( 'cx' , function( d , i ){
                //takes data + ( index * 100 ), this spreads them across the screen
                return d + ( i * 100 );
            })
            .attr( 'cy' , function( d ){ return d })
            .attr( 'r' , function( d ) { return d })
    
}