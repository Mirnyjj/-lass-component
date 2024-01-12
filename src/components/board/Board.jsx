import { connect } from "react-redux";
import { check, winCheck } from "../../utils/winningСheck";
// import './board.css'
import { Component } from "react";
class BoardLayoutConteiner extends Component {
    constructor(props) {
        super(props)
    }

    clickButton(el) {

        if (this.props.draw || this.props.isVictory) return;

        const newArrButton = this.props.buttonState.map((mean, ind) => el === ind ? this.props.player : mean);
        this.props.dispatch({ type: 'BUTTON_STATE', payload: newArrButton })

        if (winCheck(newArrButton, this.props.player)) {
            this.props.dispatch({ type: 'CHECKING_FOR_WINNINGS', payload: true })
            return
        }

        if (check(newArrButton)) {
            this.props.dispatch({ type: 'CHECKING_FOR_A_DRAW', payload: true })
            return
        }

        if (this.props.player === 'X') {
            this.props.dispatch({ type: 'PLAYER_CHANGE', payload: '0' })
        } else {
            this.props.dispatch({ type: 'PLAYER_CHANGE', payload: 'X' })

        }
        console.log(this.props)
    };
    render() {
         return (
            <div className="header">
                {this.props.buttonState.map((elem, index) => (
                    <button className="cell" onClick={() => this.clickButton(index)} key={index}>
                    {elem}
                    </button>))}
            </div>
         )
       
    }
   
}
const mapStateToProps = (state) => {
    return {
        draw: state.draw,
        isVictory: state.isVictory,
        player: state.player,
        buttonState: state.buttonState

    }

};

export const BoardLayout = connect(mapStateToProps)(BoardLayoutConteiner)

