import React, { useState } from 'react'

function HookCounter() {
    /*
    * Counter: is the new state property after updated.
    * SetCount: is the method that capable to update the state property
    * (0): is the initial value of the state and will no loger used while re-render
    */
    const [counter, setCount] = useState(0)

    return (
        <div>
            <h5>Using Hook</h5>
                {/* used the arrow function here to call function */}
            <button onClick={() => setCount(counter+1)}>{counter}</button>
            <hr></hr>
        </div>
    )
}

export default HookCounter
