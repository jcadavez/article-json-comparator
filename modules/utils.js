let utils = {
    compare: function(o, n, layer=1, failures=0) {
        if(layer == 1) console.log(`\t\t\t\t\t\t\tPROD\tvs\tDEV`);
        for(const [key, value] of Object.entries(o)) {
            let type = typeof value;
            let rep = 4 - key.length / 7;
            let target = type === 'object' ? JSON.stringify(value) : value;
            if(typeof n[key] === 'undefined'){
                failures++;
                console.log(`\tFAIL |\t\t${key}\t${'\t'.repeat(rep)}${target}\tvs\tN/A`); 
            } else {
                if(type === 'object' && type !== null){
                    console.log(`\t${"*".repeat(layer)} ${key}`);
                    failures = failures + this.compare(o[key], n[key], layer+1);
                } else if(value !== n[key]){
                    failures++;
                    console.log(`\tFAIL |\t\t${key}\t${'\t'.repeat(rep)}${target}\tvs\t${n[key]}`);
                } else {
                    console.log(`\tPASS |\t\t${key}\t${'\t'.repeat(rep)}${target}`);
                }
                delete n[key];
            }
        }
        if(JSON.stringify(n) !== JSON.stringify({})) {
            failures = failures + Object.keys(n).length;
            for(const [key, value] of Object.entries(n)){
                let flag = typeof value === 'object';
                let rep = 4 - key.length / 7;
                console.log(`\tMISS |\t\t${key}\t${'\t'.repeat(rep)}${flag ? JSON.stringify(value) : value}`);
            }
        }
        return failures;
    }
}

module.exports = utils;