/**
 * Created by gchand on 11/3/2015.
 */
function simpleSvgTest() {
    var that = {};
    var data = null;

    var h = 500-80, w = 500, svg, x, y;


    that.render = function() {
        var svg = d3.select('body').append('svg')
            .attr('height', '500')
            .attr('width', '500')
            .append('g')
            .attr("transform", "translate(0, 0)");
    };
    return that;

    x = d3.scale.ordinal().rangeRoundBands([0, w], .05);
    x.domain(data.map(function(d) {
        return d.date;
    }));

    y = d3.scale.linear().range([h, 0]);
    y.domain([0, d3.max(data, function(d) {
        return d.value;
    })]);
// add bars

    var bars = svg.selectAll('.bar').data(this.getData());
    bars
        .enter().append('rect')
        .attr('class', 'bar')
        .attr("x", function(d) {
            return x(d.date);
        })
        .attr("width", x.rangeBand())
        .attr("y", function(d) {
            return y(d.value);
        })
        .attr("height", function(d) {
            return h - y(d.value);
        });
}
