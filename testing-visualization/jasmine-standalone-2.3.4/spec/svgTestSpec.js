/**
 * Created by gchand on 11/3/2015.
 */
describe('Test D3.js with jasmine ', function() {
    var c;

    beforeEach(function() {
        c = simpleSvgTest();
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

});