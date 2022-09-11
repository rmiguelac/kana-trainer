import './KanaDisplay.css'
var kanas = require('../../kanas/kanas.json')
var words = require('../../kanas/words.json')
    
const merged = {...kanas.kanas, ...words.words}

function pickRandonKana() {
    var obj_keys = Object.keys(merged);
    var ran_obj = obj_keys[Math.floor(Math.random() *obj_keys.length)];
    return merged[ran_obj].kana
}

const KanaDisplay = () => {
    return (
        <div className='kana-display-container'>
            <h1>{pickRandonKana()}</h1>
        </div>
    )
};

export default KanaDisplay