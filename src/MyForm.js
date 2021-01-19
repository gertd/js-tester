import React from 'react';
import ReactJson from 'react-json-view'
import axios from 'axios';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appl: "mycars",
            results: []
        };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        axios.get(`https://localhost:8383/openapi/swagger.json`)
        // axios.post(`https://localhost:8383/api/v1/edge/decisiontree`, {
        //     "anonymous": false,
        //     "application": this.state.appl,
        //     "identity": "euang@acmecorp.com",
        //     "options": {
        //         "elementList": [
        //             "visible", "enabled", "allowed"
        //         ],
        //         "grouping": "VERB",
        //         "pathSeparator": "SLASH",
        //         "prefixPathWithApplication": true,
        //         "useConvention": false
        //     }
        // })
            .then(res => {
                const results = res.data;
                this.setState({ results });
            })
    }
    myChangeHandler = (event) => {
        this.setState({ appl: event.target.value });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.mySubmitHandler}>
                    <h1>decisiontree {this.state.appl}</h1>
                    <p>Enter your application name and submit:</p>
                    <input
                        type='text'
                        onChange={this.myChangeHandler}
                    />
                    <input
                        type='submit'
                    />
                </form>
                <div>
                    <ReactJson src={this.state.results} />
                </div>
            </div>
        );
    }
}

export default MyForm;