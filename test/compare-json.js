const config_o = require("../modules/configs/article-prod"); // old
const config_n = require("../modules/configs/article-bi-story");// new

describe('Should compare two JSON files and console.log the Differences', () => {
    it('should output the *layout* differences betwen files', () => {
        console.log("======================================================");
        console.log("Comparing *LAYOUT* properties...")
        console.log("\t\t\tOld\tvs\tNew");
        const layout_old = config_o.layout;
        const layout_new = config_n.data.document.layout; // TODO: Edit depending on location of layout map
        for(const [key, value] of Object.entries(layout_old)){
            if(value !== layout_new[key]){
                console.log(`\t${key}\t\t${layout_old[key]}\tvs\t${layout_new[key]}`);
            } else {
                console.log(`\t${key}\t\tPASS\t${layout_old[key]}`);
            }
        }
    });

    it('should output the *componentTextStyles* differences betwen files', () => {
        console.log("======================================================");
        console.log("Comparing *componentTextStyles* properties...")
        console.log("\t\t\tOld\tvs\tNew");
        const layout_old = config_o.componentTextStyles;
        const layout_new = config_n.data.document.componentTextStyles; // TODO: Edit depending on location of componentTextStyles map
        for(const [key, value] of Object.entries(layout_old)){
            // console.log("\t\t${key}");
            if(value !== layout_new[key]){
                console.log(`\t${key}\t\t${layout_old[key]}\tvs\t${layout_new[key]}`);
            } else {
                console.log(`\t${key}\t\tPASS\t${layout_old[key]}`);
            }
        }
    });
})
    