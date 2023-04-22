import React, { Component } from 'react';
import { Card, Grid, Button ,Segment,Header,Icon} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/malware';
import web3 from '../../ethereum/web3';
import ConsentForm from '../../components/ConsentForm';
import ByteForm from '../../components/ByteForm';
import GetFileFormMalware from '../../components/GetFileFormMalware';




import { Link } from '../../routes';
import { getResult } from '../../utils';

class CampaignShow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      info: {
        address: '',
        prob: 0,
        deployedUser: '0xefCFCc404B71eB723100D02f9c9dfC71C197e265',
        MalwareHash: '',
        amount: 0,
        perCentMalware: 0
      }
    }
  }
  static async getInitialProps(props) {
    const hash = props.query.address;

    let res = await getResult(`http://localhost:8000/malwaredetection/get/${hash}`);
    const { contribution, link, percent } = res;

    // const campaign = Campaign(props.query.address);
    // // const campaign = Campaign('0xefCFCc404B71eB723100D02f9c9dfC71C197e265');

    // const summary = await campaign.methods.getSummary().call();

    // // const summary = ["a", "b", "c", "d", "e", "f"];

    return {
      address: hash,
      addedAddress: hash,
      prob: 0,
      deployedUser: '0xefCFCc404B71eB723100D02f9c9dfC71C197e265',
      MalwareHash: hash,
      amount: contribution,
      perCentMalware: percent,
    };
  }

  // async componentDidMount() {
  //   console.log(this.props)
  //   const hash = this.props.query.address;

  //   let res = getResult(`http://localhost:8000/malwaredetection/get/${hash}`);
  //   const { contribution, link, percent } = res;
  //   this.setState({
  //     info: { ...this.state.info, address: hash, hash, amount: contribution, perCentMalware: percent }
  //   })

  // }

  renderCards() {
    const {
      address,
      prob,
      deployedUser,
      MalwareHash,
      amount,
      perCentMalware,


    } = this.props;

    const items = [
      {
        header: deployedUser,
        meta: 'Address of User',
        description:
          'The user uploaded this malware.',
        style: { overflowWrap: 'break-word' },
        color : 'blue',

      },
      {
        header: amount,
        meta: 'Amount(wei)',
        description:
          'This amount offered by user for getting files checked.',
        color : 'blue'
      },
      {
        header: address,
        meta: 'Address of Malware',
        description:
          'Address of current malware contract',
        style: { overflowWrap: 'break-word' },
        color : 'blue'
      },
      {
        header: perCentMalware,
        meta: 'Percent of malware',
        description:
          'Percent of malware detected after nodes report',
        color : 'blue'
      },
      {
        header: MalwareHash,
        meta: 'Hash of Malware',
        description:
          'The sha256 hash for this malware',
        style: { overflowWrap: 'break-word' },
        color : 'blue'
    },
    {
      header: prob,
      meta: 'Probabilty Malware',
      description:
        '',
      style: { overflowWrap: 'break-word' },
      color : 'blue'
    }

    ];

    return <Card.Group items={items} />;
  }

  render() {

    return (
      <Layout>

        <Segment.Group>

        <Segment>
        <Header as='h3'>
            <Icon name='bug' />
           Details
        </Header>
        </Segment>

              <Segment>

        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

            <Grid.Column width={6}>
                <ConsentForm address={this.props.address} />
                    <br/><br/>
                <GetFileFormMalware/>
            </Grid.Column>

          </Grid.Row>

        </Grid>
        </Segment>
        </Segment.Group>


      </Layout>
    );
  }
}

export default CampaignShow;
