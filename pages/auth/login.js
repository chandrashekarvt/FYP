import React, { Component } from 'react';
import { Form, Button, Input, Message, Segment, Header, Icon } from 'semantic-ui-react';
import Layout from '../../components/Layout';
// import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import { loginUser, postResult } from '../../utils';




class CampaignNew extends Component {
    state = {
        username: '',
        password: '',
        errorMessage: '',
        is_tester: false,
        loading: false,
        register: false
    };

    onSubmit = async event => {

        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const { username, password, is_tester, register } = this.state;
            let res = await loginUser(username, password, is_tester, register);
            console.log(res.message)
            if (!res.message.toLowerCase().includes("success")) {
                this.setState({ errorMessage: res.message })
            } else {
                localStorage.setItem("is_tester", res.is_tester || false)
                Router.pushRoute('/');
            }
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });
    };



    render() {
        const { register, is_tester } = this.state;
        return (
            <Layout>

                <Segment.Group horizontal>
                    <Segment>
                        <br />

                        <Header as='h3'>
                            {register ? "Register" : "Login"}
                        </Header>

                        <br />

                        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                            <Form.Field>
                                <label>Username</label>
                                <Input
                                    labelPosition="right"
                                    value={this.state.username}
                                    onChange={event =>
                                        this.setState({ username: event.target.value })}
                                />


                                <label>Password</label>
                                <Input
                                    type='password'
                                    labelPosition="right"
                                    value={this.state.password}
                                    onChange={event =>
                                        this.setState({ password: event.target.value })}
                                />

                                {register
                                    &&
                                    <div class="ui checkbox">
                                        <input checked={is_tester} type="checkbox"
                                            onChange={event =>
                                                this.setState({ is_tester: event.target.checked })} />
                                        <label>Register as tester</label>
                                    </div>
                                }

                            </Form.Field>
                            <Message error header="Oops!" content={this.state.errorMessage} />
                            <Button loading={this.state.loading} >
                                Submit
                            </Button>
                        </Form>

                        <div style={{ display: 'flex', justifyContent: 'end' }}>
                            <Button onClick={() => this.setState({ register: !register })}>
                                {register ? "Already a user ?" : "New user ?"}
                            </Button>
                        </div>


                    </Segment>
                </Segment.Group>



            </Layout>
        );
    }
}

export default CampaignNew;
