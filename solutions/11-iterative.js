const smallestDivisor = (num) => {
    // BEGIN
    if (num === 1) { return 1; }
    
    const iter = (divisor) => {
        if (divisor > Math.sqrt(num)) {
            return num;
        }
        
        if (num % divisor === 0) {
            return divisor;
        }
        
        return iter(divisor + 1);
    };
    
    return iter(2);
    // END
};

export default smallestDivisor;