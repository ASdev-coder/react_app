
import React, { useContext, useState } from 'react';
import I18nContext from '../../contexts/I18nContext';

const User = () => {

    const { texts } = useContext(I18nContext);

    const [user, setUser] = useState(
    {
        name: 'Tom',
        age: 20
    });

    const [name, setName] = useState(user.name);

    const changeAge = () => {
        setUser({...user, age: user.age +1 });
    }

    const changeName = () => {
        setUser({...user, name: name});
    }

    const changeHandler = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <h2>{texts.name}: {user.name}, {texts.age}: {user.age}</h2>
            <button onClick={changeAge}>{texts.changeAge}</button>
            <div>
                <input type="text" value={name} placeholder='Enter new name: ' onChange={changeHandler}/>
                <button onClick={() => changeName({name})}>{texts.save}</button>
            </div>
        </div>
    );
}

export default User;
