import { useState } from 'react';
import KanaDisplay from '../KanaDisplay';
import KanaInputResult from '../KanaInputResult';
import KanaInput from '../KanaInput';
import './KanaContainer.css'
import React from 'react';

const KanaContainer = () => {

    const [answer, setAnswer] = useState('');
    const onAnswerGiven = (answer) => {
        console.log(answer)
    }

    return (
        <div className='kanas-container'>
            <KanaInputResult />
            <KanaDisplay />
            <KanaInput onAnwer={answer => onAnswerGiven(answer)}/>
        </div>
    )
};

export default KanaContainer
