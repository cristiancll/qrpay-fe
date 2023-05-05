function validateNumber(e) {
    const {value} = e.target;
    return isNaN(value);
}


const Check = {
    Input: {
        valid: (e) => {
            const {type} = e.target;
            switch (type) {
                case 'number':
                case 'tel':
                    return validateNumber(e);
                default:
                    return true;
            }
        },
    }

}

export default Check;
