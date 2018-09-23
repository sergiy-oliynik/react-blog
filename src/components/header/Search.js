import React, { Component } from 'react';
import { Col, FormGroup, FormControl } from 'react-bootstrap';

import "./Search.css";

let input = "";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: input
        };
    }

    componentDidMount() {
        this.textInput.focus();
    }

    render() {
        return (
            <div>
                <Col md={12}>
                    <FormGroup>
                        <FormControl inputRef={input => this.textInput = input}
                                     onChange={ (e) => this.onChangeHandler(e) }
                                     type="text" value={this.state.value}
                                     placeholder="Search" />
                    </FormGroup>{' '}
                </Col>


            </div>
        );
    }

    onChangeHandler(e) {
        input = e.target.value;
        this.props.search(input);
    }
}
export default Search;