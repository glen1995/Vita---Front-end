////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nutrient Result component. 
// 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useLocation } from "react-router-dom";
import React from 'react';
import UnorderedList from '../compositableComponents/Unorderedlist'

const NutrientResults = (props) => {
    const location = useLocation()
    const { vitamin, mineral } = location.state
    return (
        
       <div className="nutrient-results-wrapper">
           <div className="nutrient-calculator-introduction">
                <div className="nutrient-calculator-header">
                    <h2>Nutrient Calculator</h2>
                    <p>
                            Here are your results. This suggestions are in no way medical advice. If you are feeling seriously unwell, please, go see a doctor. Your physician’s word is final. This calculator is here to help you to make your daily diet healthier, not to substitute medical advice.
                    </p>
                </div>
           </div>
           <div className="results-wrapper">
                <h2 className="result-heading">Your Results</h2>
                <div className="chart-vitamin-result-wrapper">
                    <div className="vitamin-result-wrapper">
                        <UnorderedList heading="Vitamin" classname="test" name="test" arr={vitamin}/>
                    </div>
                    <div className="chart-wrapper">
                        <img src="https://picsum.photos/400" alt="dummy" /> 
                    </div>
                    
                </div>
                <div className="chart-mineral-result-wrapper">
                    <div className="mineral-result-wrapper">
                        <UnorderedList heading="Mineral" classname="test" name="test" arr={mineral}/>
                    </div>
                    <div className="chart-wrapper">
                        <img src="https://picsum.photos/400" alt="dummy" />      
                    </div>
                </div>
           </div>
           <div>

           </div>
       </div>
    )
}

export default NutrientResults;