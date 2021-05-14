
import React, {useState, useEffect} from 'react';
import './CardApp.css';
import india from './flag_india.png';
import usa from './flag_us.jpg';
import russia from './flag_russia.jpg';

const countryName = ["India", "USA", "Russia"];

const countryInfo = ["India Information", "USA Information", "Russia Information"];

const countryFlag = [india, usa, russia];

// const TitleLoader = props => {
//   const { countryName } = props;
//   // Default to the first message passed
//   const [countryNameIndex, setCountryNameIndex] = useState(0);

//   useEffect(() => {
//     // Move on to the next message every `n` milliseconds
//     let timeout;
//     if (countryNameIndex < countryName.length - 1) {
//       timeout = setTimeout(() => {
//           setCountryNameIndex(countryNameIndex + 1);
//       }, 1000);
//     }
//     else {
//         timeout = setTimeout(() => {
//             setCountryNameIndex(0);
//         }, 1000);
//     }

//     return () => {
//       clearTimeout(timeout);
//     };
//   }, [countryName, countryNameIndex]);

//   return <div>{countryName[countryNameIndex]}</div>;
// };

// const InfoLoader = props => {
//     const { countryInfo } = props;
    
//     // Default to the first message passed
//     const [countryInfoIndex, setCountryInfoIndex] = useState(0);
  
//     useEffect(() => {
//       // Move on to the next message every `n` milliseconds
//       let timeout;
//       if (countryInfoIndex < countryInfo.length - 1) {
//         timeout = setTimeout(() => {
//             setCountryInfoIndex(countryInfoIndex + 1);
//         }, 1000);
//       }
//       else {
//           timeout = setTimeout(() => {
//               setCountryInfoIndex(0);
//           }, 1000);
//       }
  
//       return () => {
//         clearTimeout(timeout);
//       };
//     }, [countryInfo, countryInfoIndex]);
  
//     return <div>{countryInfo[countryInfoIndex]}</div>;
//   };

// const FlagLoader = props => {
//     const { countryFlag } = props;
    
//     // Default to the first message passed
//     const [countryFlagIndex, setCountryFlagIndex] = useState(0);
  
//     useEffect(() => {
//       // Move on to the next message every `n` milliseconds
//       let timeout;
//       if (countryFlagIndex < countryFlag.length - 1) {
//         timeout = setTimeout(() => {
//             setCountryFlagIndex(countryFlagIndex + 1);
//         }, 1000);
//       }
//       else {
//           timeout = setTimeout(() => {
//               setCountryFlagIndex(0);
//           }, 1000);
//       }
  
//       return () => {
//         clearTimeout(timeout);
//       };
//     }, [countryFlag, countryFlagIndex]);
  
//     return <img className="card-img-top" src={countryFlag[countryFlagIndex]} alt="Card image cap" />;
// };  

const UniLoader = (props) => {
  
  // Default to the start index passed 
  const [countryFlagIndex, setCountryFlagIndex] = useState(props.start);
  const [countryNameIndex, setCountryNameIndex] = useState(props.start);
  const [countryInfoIndex, setCountryInfoIndex] = useState(props.start);

  useEffect(() => {
    // Move on to the next message every `n` milliseconds
    let timeout;
    if (countryFlagIndex < props.countryFlag.length - 1) {
      timeout = setTimeout(() => {
          setCountryFlagIndex(countryFlagIndex + 1);
          setCountryNameIndex(countryNameIndex + 1);
          setCountryInfoIndex(countryInfoIndex + 1);
      }, 1000);
    }
    else {
        timeout = setTimeout(() => {
            setCountryFlagIndex(0);
            setCountryNameIndex(0);
            setCountryInfoIndex(0);
        }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [props.countryFlag, countryFlagIndex]);

  return <div className="card">
          
          <div className="card-body">
            <img className="card-img-top" src={props.countryFlag[countryFlagIndex]} alt="Card image cap" />
            <h5 className="card-title">{props.countryName[countryNameIndex]}</h5>
            <p className="card-text">{props.countryInfo[countryInfoIndex]}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        
        </div>;
};  

function CardApp() {
  return (
    <div className="CardApp">

      <div className="container">

        <UniLoader countryFlag={countryFlag} countryName={countryName} countryInfo={countryInfo} start={0}/>

        <UniLoader countryFlag={countryFlag} countryName={countryName} countryInfo={countryInfo} start={1}/>

        {/* <div className="card">

          <FlagLoader countryFlag={countryFlag}/>

          <div className="card-body">
            <h5 className="card-title">{<TitleLoader countryName = {countryName} />}</h5>
            <p className="card-text">{<InfoLoader countryInfo = {countryInfo}/>}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        
        </div>

        <div className="card">

        <FlagLoader countryFlag={countryFlag}/>

          <div className="card-body">
            <h5 className="card-title">{<TitleLoader countryName = {countryName}/>}</h5>
            <p className="card-text">{<InfoLoader countryInfo = {countryInfo}/>}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        
        </div> */}

      </div>

    </div>
  );
}

export default CardApp;
