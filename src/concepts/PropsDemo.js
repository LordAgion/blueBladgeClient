import React, {useState} from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {
    const [ color, setColor ] = useState('white');
    const [ backgroundColor, setBackgroundColor ] = useState('purple');
    const [ borderRadius, setBorderRadius ] = useState('5px');
    const [ borderStyle, setBorderStyle ] = useState('dashed');
    const [ display, setDisplay ] = useState('inline-block');
    const [ width, setWidth ] = useState('350px');
    const [ textAlign, setTextAlign ] = useState('center');
    

    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
        };

        const toggleBackgroundColor = () => {
            backgroundColor === 'purple' ? setBackgroundColor('black') : setBackgroundColor('purple');
        };
    
        const toggleBorderRadius = () => {
            borderRadius === '5px' ? setBorderRadius('20px') : setBorderRadius('5px');
        };
    
        const toggleBorderStyle = () => {
            borderStyle === 'dashed' ? setBorderStyle('double') : setBorderStyle('dashed');
}

    let styles = {
        color : color,
        backgroundColor : backgroundColor,
        borderRadius : borderRadius,
        borderStyle : borderStyle,
        display : display,
        width : width,
        textAlign : textAlign
      };
    

      return (
        <div className="main">
          <div className="mainDiv">
            <div style={ styles }>
              <FunctionalComponent string="will this display?" function={ toggleColor } selectedStyle={ color } />
              <FunctionalComponent string="Props are pretty cool right?" function={ toggleBackgroundColor } selectedStyle={ backgroundColor }/>
              <FunctionalComponent string="You can send data from one component ..." function={ toggleBorderRadius } selectedStyle={ borderRadius } />
              <FunctionalComponent string=" ... to another!" function={ toggleBorderStyle } selectedStyle={ borderStyle } />
            </div>
          </div>
        </div>
      );

}

const FunctionalComponent = (props) => {

    const TinyComponent = (props) => {
        return (
            <div>
              <p>The current style is : { props.selectedStyle }</p>
            </div>
          )
       };

    
       return (
        <div>
          <p>{ props.string }</p>
          <button onClick={ props.function }>Toggle Style</button>
          <TinyComponent selectedStyle={ props.selectedStyle } />
        </div>
      );
}

FunctionalComponent.defaultProps = {
    string: 'This is wild!',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle : 'what style??'
}


export default PropsDemo;