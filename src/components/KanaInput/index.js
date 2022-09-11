import './KanaInput.css'


const KanaInput = (props) => {

    const onAnswer = (e) => {
        e.preventDefault();
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            console.log('Enter pressionado') 
        }
        props.onAnswer()
    }
    return (
        <form onSubmit={onAnswer} className='kana-input-container'>
            <input type='text' className='kana-input-field'/>
        </form>
    )
};

export default KanaInput