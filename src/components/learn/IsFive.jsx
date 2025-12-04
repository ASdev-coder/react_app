import React from 'react';

const IsFive = ({value}) => {

    console.log('Rendering IsFive');

    const getResult = () => {

        let i = 0;
        while (i < 1000000000) {
            i++;
        }

        return value === 5 ? 'Value is Five!' : 'Value is not Five.';
    }

    return (
        <div>
            {getResult()}
        </div>
    );
}

export default React.memo(IsFive, (prevProps, nextProps) => {
    if(nextProps.value === 5 || prevProps.value === 5) {
        return false;
    }
    return true;
});
