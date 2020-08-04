function sum(nums) {
    var res = 0;
    for (let c of nums){
        res+=c;
    }
    return res;
}

module.exports.sum = sum