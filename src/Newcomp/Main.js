import React from 'react';
import { Commoncontext } from './Commoncontext'
class Main extends React.Component
 {

    render()  {
        return (
            <Commoncontext.Consumer>
                {
                    ({color}) => (
                        <h1 style={{backgroundColor:color}}>this is main page</h1>
                    )
                }
            </Commoncontext.Consumer>
              );
    }

}
export default Main;
