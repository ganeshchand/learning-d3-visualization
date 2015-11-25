/**
 * Created by gchand on 11/3/2015.
 */
function simpleBarChart() {
    var that = {};

    that.render = function() {
        var svg = d3.select('body').append('svg')
            .attr('height', '500')
            .attr('width', '500')
            .append('g')
            .attr("transform", "translate(0, 0)");
    };
    return that;

    var data = null;

    that.setData = function(d) { // setter
        data = d;
    };

    that.getData = function() { // getter
        return data;
    }

}
