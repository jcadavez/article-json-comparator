let utils = {
    compare: function(o, n, layer=1) {
        let allPass = true;
        for(const [key, value] of Object.entries(o)){
            let type = typeof value;
            if(type === 'object' && type !== null){
                console.log(`\n`);
                console.log(`${"\t".repeat(layer)} ${"*".repeat(layer)} ${key} ${"*".repeat(layer)}`);
                if(typeof n[key] !== "undefined"){
                    console.log(`${"\t".repeat(layer)}\t\t\t\t\tOld\tvs\tNew`); 
                    this.compare(o[key], n[key], layer+1);
                } else {
                    allPass = false;
                    console.log(`\tFAIL |${"\t".repeat(layer)}${key} DOES NOT EXIST in other JSON file...`);
                }
            }
            else if(value !== n[key] || typeof n[key] === "undefined"){
                allPass = false;
                console.log(`\tFAIL |${"\t".repeat(layer)}${key}\t\t${o[key]}\tvs\t${n[key]}`);
            } else {
                console.log(`\tPASS |${"\t".repeat(layer)}${key}\t\t${o[key]}`);
            }
        }
        return allPass;
    }
}

module.exports = utils;