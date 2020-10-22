let utils = {
    compare: function(o, n, layer=1) {
        let allPass = true;
        if(layer == 1) console.log(`\t\t\t\t\t\t\tPROD\tvs\tDEV`);
        for(const [key, value] of Object.entries(o)){
            let type = typeof value;
            if(type === 'object' && type !== null){
                console.log(`\n`);
                console.log(`${"*".repeat(layer).repeat(layer)} ${key}`);
                if(typeof n[key] !== 'undefined'){
                    if (this.compare(o[key], n[key], layer+1)) allpass = false;
                    delete n[key];
                } else { 
                    allPass = false;
                    console.log(`\tFAIL |\t\t${key}\t${'\t'.repeat(4 - key.length/7)}DOES NOT EXIST in other JSON file...`);
                }
            }
            else if(typeof n[key] === 'undefined'){
                allPass = false;
                console.log(`\tFAIL |\t\t${key}\t${'\t'.repeat(4 - key.length/7)}DOES NOT EXIST in other JSON file...`);
                delete n[key];
            }
            else if(value !== n[key]){
                allPass = false;
                console.log(`\tFAIL |\t\t${key}\t${'\t'.repeat(4 - key.length/7)}${o[key]}\tvs\t${n[key]}`);
                delete n[key];
            } else {
                console.log(`\tPASS |\t\t${key}\t${'\t'.repeat(4 - key.length/7)}${o[key]}`);
                delete n[key];
            }
        }
        if(JSON.stringify(n) !== JSON.stringify({})) {
            for(const [key, value] of Object.entries(n)){
                if(typeof value === 'object') console.log(`\tMISS |\t\t${key}\t${'\t'.repeat(4 - key.length/7)}${JSON.stringify(value)}`);
                else console.log(`\tMISS |\t\t${key}\t${'\t'.repeat(4 - key.length/7)}${value}`);
            }
            allPass = false;
        }
        return allPass;
    }
}

module.exports = utils;