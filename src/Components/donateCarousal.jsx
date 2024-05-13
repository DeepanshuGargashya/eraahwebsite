import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { TransitionGroup } from 'react-transition-group'; // Import TransitionGroup from 'react-transition-group'
import Hand from '../Assets/hand.png'
import hj from '../Assets/aged.png'
function Carousel({ items, active }) {
    const [state, setState] = useState({
        items: items,
        active: active,
        direction: ''
    });

    const generateItems = useCallback(() => {
        let itemsArray = [];
        let level;
        for (let i = state.active - 2; i < state.active + 3; i++) {
            let index = i;
            if (i < 0) {
                index = state.items.length + i;
            } else if (i >= state.items.length) {
                index = i % state.items.length;
            }
            level = state.active - i;
            itemsArray.push(<Item key={index} id={state.items[index]} level={level} />);
        }
        return itemsArray;
    }, [state.active, state.items]);

    const moveLeft = useCallback(() => {
        const newActive = state.active - 1;
        setState({
            ...state,
            active: newActive < 0 ? state.items.length - 1 : newActive,
            direction: 'left'
        });
    }, [state]);

    const moveRight = useCallback(() => {
        setState({
            ...state,
            active: (state.active + 1) % state.items.length,
            direction: 'right'
        });
    }, [state]);

    return (
        <div id="carousel" className="noselect">
            <div className="arrow arrow-left" onClick={moveLeft}><i className="fi-arrow-left"></i></div>
            <TransitionGroup
                transitionName={state.direction}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {generateItems()}
            </TransitionGroup>
            <div className="arrow arrow-right" onClick={moveRight}><i className="fi-arrow-right"></i></div>
            <div className="basedOn">Based on: <strong><a href="https://codepen.io/andyNroses/pen/KaENLb" target="_blank">andyNroses</a></strong></div>
        </div>
    );
}

const Item = ({ level }) => {
    const className = 'item level' + level;
    return (
        <div className={className}
            // style={{
            //     backgroundImage: 'url("D:\react\eraah\src\Assets.appStore.png")',
            //     backgroundSize: "cover",
            //     backgroundRepeat: "no-repeat",
            //     backgroundPosition: "center center",
            // }}
        >
            {/* {
                level == 0 ? 
                <img src={Hand} width={'40%'} alt="" />
                : 
                level == 1 ?
                <img src={hj} alt="" />
                :''
            } */}
            <h5>{className}</h5>
        </div>
    );
};

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
// ReactDOM.render( document.getElementById('app'));

export default Carousel
