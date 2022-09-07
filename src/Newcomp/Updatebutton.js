
import React from 'react';
import { Commoncontext } from './Commoncontext'
function Updatebutton() {

        return (
            <Commoncontext.Consumer>
                {
                    ({updateColor }) => (
                        <div>
                        <button onClick={()=>updateColor('yellow')}>update color</button>
                        <button onClick={()=>updateColor('blue')}>update color</button>
                        </div>
                    )
                }
            </Commoncontext.Consumer>
        );

}
export default Updatebutton;
