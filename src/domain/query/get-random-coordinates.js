const getRandomCoordinates = () => {
    return {
        lat: parseFloat((Math.random()*180-90).toFixed(8)),
        lon: parseFloat((Math.random()*360-180).toFixed(8))
    }
}

export default getRandomCoordinates