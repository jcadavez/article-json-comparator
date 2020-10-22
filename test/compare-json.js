const config_p = require("../modules/configs/article-prod"); // old
const config_d = require("../modules/configs/article-dev");// new
const utils = require("../modules/utils");

var assert = require('chai').assert;

describe('Should compare two JSON files and console.log the Differences', () => {
    it('should output the *layout* differences betwen files', () => {
        console.log("======================================================");
        console.log("Comparing *layout* properties...")
        const layout_old = config_p.layout;
        const layout_new = config_d.data.document.layout; // TODO: Edit depending on location of layout map
        assert.equal(utils.compare(layout_old, layout_new), 0, 'there should not be any failures...');
    });

    it('should output the *componentTextStyles* differences betwen files', () => {
        console.log("======================================================");
        console.log("Comparing *componentTextStyles* properties...")
        const layout_old = config_p.componentTextStyles;
        const layout_new = config_d.data.document.componentTextStyles; // TODO: Edit depending on location of componentTextStyles map
        assert.equal(utils.compare(layout_old, layout_new), 0, 'there should not be any failures...');
    });

    it('should output the *componentLayouts* differences betwen files', () => {
        console.log("======================================================");
        console.log("Comparing *componentLayouts* properties...")
        const layout_old = config_p.componentLayouts;
        const layout_new = config_d.data.document.componentLayouts; // TODO: Edit depending on location of componentLayouts map
        assert.equal(utils.compare(layout_old, layout_new), 0, 'there should not be any failures...');
    });
})
    