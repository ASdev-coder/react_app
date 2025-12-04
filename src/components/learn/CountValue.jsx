import React from 'react';

const CountValue = ({value, id}) => {
    console.log(`Rendering CountValue id=${id}`);

    return <b>{value}</b>
}

export default React.memo(CountValue);
