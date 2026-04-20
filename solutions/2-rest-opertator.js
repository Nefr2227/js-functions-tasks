import _ from 'lodash';

// BEGIN
const average = (...massiv) => {
    if (massiv.length !== 0){
        let otwet = 0;
        for (let i = 0; i < massiv.length; i++){
            otwet += massiv[i];
        }
        return otwet / massiv.length;
    }
    else{
        return null;
    }
}

export default average;
// END