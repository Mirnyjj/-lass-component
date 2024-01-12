import { connect } from 'react-redux';
// import './inform.css'
import { Component } from 'react';

class InformConteiner extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>
                {this.props.isVictory ? `Выиграл ${this.props.player}` : this.props.draw ? 'Ничья' : `Сейчас ходит ${this.props.player}`}
                </h1>

    }
}

const mapStateToProps = (state) => {
    return {
        draw: state.draw,
        isVictory: state.isVictory,
        player: state.player,
    }

};

export const Inform = connect(mapStateToProps)(InformConteiner)

