const convert = (...dates) => {
    return dates.map(date => {
        const [year, month, day] = date;
        const jsDate = new Date(year, month - 1, day);
        jsDate.setUTCHours(0, 0, 0, 0);
        return jsDate.toDateString();
    });
}

export default convert;