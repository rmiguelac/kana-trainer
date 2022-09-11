import './KanaInput.css'


const KanaInput = (props) => {

    return (
        <form className='kana-input-container'>
            <input autoFocus type='text' className='kana-input-field'/>
        </form>
    )
};

export default KanaInput