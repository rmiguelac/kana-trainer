import './KanaInput.css'

const KanaInput = (props) => {

    const onType = (e) => {
        e.preventDefault()
        props.onAnswer(e.target.value)
    } 

    return (
        <div className='kana-input-container'>
            <input value={props.answer} onChange={onType} autoFocus type='text' className='kana-input-field'/>
        </div>
    )
};

export default KanaInput