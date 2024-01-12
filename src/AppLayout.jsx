import { Component } from 'react';
import { BoardLayout } from './components/board/board';
import { Inform } from './components/inform/Inform';
import { stateObject } from './redux';
import { store } from './redux';

export class AppLayout extends Component {
    constructor() {
        super();
    }

    reset() {
        store.dispatch({ type: '_RESET_', payload: stateObject })
      }
render() {
    return (
        <div>
            <Inform />
            <BoardLayout/>
            <button className='StyleButton' onClick={() => this.reset()}>Начать заново</button>
        </div>
    )
}
    
}

