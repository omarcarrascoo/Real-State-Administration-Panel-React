import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const DropDown = styled.div`
  margin: 0;
`;

function DropDownLan({setLan}) {

    const handleChange = (e) => {
        setLan(e.target.value);
    };
    return(

        <DropDown>
        <div className="custom-select">
            <select onChange={handleChange}>
                <option value="0">Select option:</option>
                <option key='es' name='lenguage' value='es'>es</option>
                <option key='en' name='lenguage' value='en'>en</option>
            </select>
        </div>
        </DropDown>
    )
}

export default DropDownLan;