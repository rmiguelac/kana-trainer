import './KanaDisplay.css'
var kanas = require('../../kanas/kanas.json')
var words = require('../../kanas/words.json')

function pickRandonKanaOrWord() {
    var obj_keys = Object.keys(kanas.kanas);
    var ran_obj = obj_keys[Math.floor(Math.random() *obj_keys.length)];
    return kanas.kanas[ran_obj].kana
}

const KanaDisplay = () => {
    return (
        <div className='kana-display-container'>
            <h1>{pickRandonKanaOrWord()}</h1>
        </div>
    )
};

export default KanaDisplay