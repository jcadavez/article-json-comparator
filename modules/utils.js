module.exports = {
    nestedCheck(o, n) {
        for(const [key, value] of Object.entries(o)){
            if(value !== n[key]){
                console.log(`\t${key}\t\t${layout_old[key]}\tvs\t${layout_new[key]}`);
            } else {

            }
        }
    }
}