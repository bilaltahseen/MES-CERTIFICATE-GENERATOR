import React from 'react';
import main from './assets/Svg/Main-01.png';

function Certificate(props) {
  return (
    <svg
      id='svgCert'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-name='Layer 1'
      viewBox='0 0 1390.81 936.46'
    >
      <image
        width='1392'
        height='938'
        transform='translate(-.6 -.77)'
        xlinkHref={main}
      ></image>
      <text
        fill='#fff'
        fontFamily='Dancing Script'
        fontSize='90'
        x='55%'
        y='53%'
        textAnchor='middle'
      >
        {props.Name}
      </text>
      {props.isChecked ? (
        <text
          fill='#fff'
          fontFamily='Calibri-Light, Calibri'
          fontSize='33'
          opacity='0.34'
          transform='translate(64.52 908.8)'
        >
          This is an auto generated certificate property of finalartproduct ®
        </text>
      ) : (
        ''
      )}
    </svg>
  );
}

export default Certificate;
