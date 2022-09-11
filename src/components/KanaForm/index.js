import KanaInput from '../KanaInput';
import './KanaForm.css'
import React, { useState } from 'react';

const KanaForm = () => {

    const [answer, setAnswer] = useState('')

    const onAnswer = (e) => {
        e.preventDefault()
        console.log('Submetido')
    }

    return (
        <div className='kanas-container'>
            <form onSubmit={onAnswer}>
                <KanaInput answer={answer} onAnswer={answer => setAnswer(answer)} />
            </form>
        </div>
    )
};

export default KanaForm
