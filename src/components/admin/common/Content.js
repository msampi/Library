import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import ImportData from '../import/View';
import Books from '../books/View';

class Content extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <Switch>
                                    <Route exact path="/admin" component={ImportData} />
                                    <Route path="/admin/books" component={Books} />
                                    
                                </Switch>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Content