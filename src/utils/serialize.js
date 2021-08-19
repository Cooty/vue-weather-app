const serialize = (obj) => {
    const keysThatHaveValidValues = Object.keys(obj).filter(
        key => obj.hasOwnProperty(key) && obj[key] !== null && obj[key] !== undefined
    )

    const objWithValidValues = {}

    keysThatHaveValidValues.forEach(key => {
        objWithValidValues[key] = obj[key]
    })

    return new URLSearchParams(objWithValidValues).toString()
}

export default serialize
