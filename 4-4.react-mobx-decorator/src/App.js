import { observer } from 'mobx-react'
// import React, { Component } from 'react'
// import { CounterContext } from './context/counterContext';

// @observer
// export class App extends Component {
//     render() {
//         const myCounter = this.context;
//         return (
//             <div style={{ textAlign: 'center', padding: 16 }}>
//                 카운트: {myCounter.count}
//                 <br />
//                 <br />
//                 마이너스: {myCounter.isNegative}
//                 <br />
//                 <br />
//                 <button onClick={() => myCounter.increase()}>+</button>
//                 <button onClick={() => myCounter.decrease()}>-</button>
//             </div>
//         )
//     }
// }

// App.contextType = CounterContext;
// export default App;


import React from 'react'
import { useCounterStore } from './context/counterContext'

const App = () => {
    const myCounter = useCounterStore();
    return (
        <div style={{ textAlign: 'center', padding: 16 }}>
            카운트: {myCounter.count}
            <br />
            <br />
            마이너스: {myCounter.isNegative}
            <br />
            <br />
            <button onClick={() => myCounter.increase()}>+</button>
            <button onClick={() => myCounter.decrease()}>-</button>
        </div>
    )
}

export default observer(App)