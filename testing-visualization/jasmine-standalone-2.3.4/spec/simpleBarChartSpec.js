/**
 * Created by gchand on 11/3/2015.
 */
describe('Test D3.js with jasmine ', function() {
    var c;

    beforeEach(function() {
        c = simpleBarChart();
        c.render();
    });

    afterEach(function() {
        d3.selectAll('svg').remove();
    });

    describe('the svg' ,function() {
        it('should be created', function() {
            expect(getSvg()).not.toBeNull();
        });

        it('should have the correct height', function() {
            expect(getSvg().attr('height')).toBe('500');
        });

        it('should have the correct width', function() {
            expect(getSvg().attr('width')).toBe('500');
        });
    });

    function getSvg() {
        return d3.select('svg');
    }

    describe('working with data', function(){
       it('should be null if no data has been specified', function(){
          expect(c.getData()).toBeNull();
       });

        it('should be able to update the data', function(){
            var testData = [
                {date: '2014-01', value: 1000},{date: '2014-02', value: 2000}
            ];
            c.setData(testData);
            expect(c.getData().toBe(testData))
        })
    });

});