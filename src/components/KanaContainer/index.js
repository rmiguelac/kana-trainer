import KanaDisplay from '../KanaDisplay';
import KanaInputResult from '../KanaInputResult';
import KanaInput from '../KanaInput';
import './KanaContainer.css'

const KanaContainer = () => {
    return (
        <div className='kanas-container'>
            <KanaInputResult />
            <KanaDisplay />
            <KanaInput />
        </div>
    )
};

export default KanaContainer
