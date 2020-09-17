const toFilter = (data, filter) => {
    if (filter.length === 0) {
        return data
    } else {
        return data.filter((item) => {
            return item.name.toLowerCase()
            .indexOf(filter.toLowerCase()) > -1;
        });
    }
}

export default toFilter;
