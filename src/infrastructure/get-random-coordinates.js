import Coords from './model/Coords';

const getRandomCoordinates = () => {
    return new Coords(
        parseFloat((Math.random()*180-90).toFixed(8)),
        parseFloat((Math.random()*360-180).toFixed(8))
    )
}

export default getRandomCoordinates