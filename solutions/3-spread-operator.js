const convert = (...dates) => {
    // BEGIN
    return dates.map(([year, month, day]) => 
        new Date(year, month, day).toDateString()
    );
    // END
};

export default convert;