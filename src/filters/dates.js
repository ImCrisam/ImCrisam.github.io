
const mounthYear = function (value) {
    var dates = value.split("-");
    return dates[1] + "/" + dates[0]
}

export {
    mounthYear
}
