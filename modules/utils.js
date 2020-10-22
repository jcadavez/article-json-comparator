let utils = {
    compare: function(o, n, layer=1, failures=0) {
        if(layer == 1) console.log(`\t\t\t\t\t\t\tPROD\tvs\tDEV`);
        for(const [key, value] of Object.entries(o)){
            let type = typeof value;
            if(type === 'object' && type !== null){
                console.log(`\t${"*".repeat(layer)} ${key}`);
                if(typeof n[key] !== 'undefined'){
                    failures = failures + this.compare(o[key], n[key], layer+1);
                    delete n[key];
                } else { 
                    failures++;
                    console.log(`\tFAIL |\t\t${key}\t${'\t'.repeat(4 - key.length/7)}${JSON.stringify(o[key])}\tvs\tN/A`);
                }
            }
            else if(typeof n[key] === 'undefined'){
                failures++;
                console.log(`\tFAIL |\t\t${key}\t${'\t'.repeat(4 - key.length/7)}${o[key]}\tvs\tN/A`);
                delete n[key];
            }
            else if(value !== n[key]){
                failures++;
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
            failures++;
        }
        return failures;
    }
}

module.exports = utils;