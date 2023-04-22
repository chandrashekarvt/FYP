import React, { Component } from 'react';
import { Card, Button ,Header,Icon,Segment} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import AnalyseForm from '../components/AnalyseForm';
import Web3 from 'web3';
import NalwareDetection from "../ethereum/build/MalwareDetection.json"
import { getResult } from '../utils'
import { Router } from '../routes';

class CampaignIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      campaigns: []
    }
  }

  // static async getInitialProps() {
  //   let web3 = new Web3('https://goerli.infura.io/v3/41394bd8d0254526be13defed288327a')
  //   let factory = new web3.eth.Contract(
  //     JSON.parse(MalwareDetection.interface),
  //     '0xefCFCc404B71eB723100D02f9c9dfC71C197e265'
  //   );
  //   const campaigns = await factory.methods.getDeployedMalwares().call();

  //   console.log("Ff: ", campaigns)
  //   return {
  //     campaigns
  //   };
  // }


  async componentDidMount() {
    // const campaigns = await factory.methods.getDeployedMalwares().call();

    let isLoggedIn = localStorage.getItem("is_tester") !== null;

    if (isLoggedIn) {
      try {
        let res = await getResult('http://localhost:8000/malwaredetection/');
        this.setState({
          campaigns: res.malwares
        })
      } catch (err) {
        console.log(err.message)
      }
    } else {
      Router.pushRoute('/auth/login');

    }


  }

  renderCampaigns() {

    const items = this.state.campaigns.map(({ hash: address }) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Malware</a>
          </Link>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>

      <div>

        <Segment.Group>

        <Segment>
                <Header as='h3'>
                    <Icon name='file alternate outline' />
                    Analysing Files
                </Header>
                            <AnalyseForm />
                        </Segment>

        <Segment>
        <Header as='h3'>
            <Icon name='bug' />
           Malware Files
        </Header>
        </Segment>

              <Segment>

          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Malware"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderCampaigns()}

          </Segment>
        </Segment.Group>


       </div>

      </Layout>
    );
  }
}

export default CampaignIndex;
