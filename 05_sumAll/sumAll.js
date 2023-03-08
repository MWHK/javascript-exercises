const sumAll = function (int1, int2) {
    if (int1 > 0 && int2 > 0 && typeof int1 === 'number' && typeof int2 === 'number') {
        var total = 0;
        if (int1 < int2) {
            for (var i = int1; i <= int2; i++) {
                total += i;
            }
            return total;
        } else if (int1 > int2) {
            for (var i = int2; i <= int1; i++) {
                total += i;
            }
            return total;
        }
    } else {
        return 'ERROR'
     }
    }

// Do not edit below this line
module.exports = sumAll;
