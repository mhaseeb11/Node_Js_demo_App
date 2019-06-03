import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { fetchAllMembersService, deleteMember } from './modules/actions';
// import FormModal from './components/FormModal';

class MemberPage extends React.Component {

    componentDidMount() {
        this.props.fetchAllMembers();
    }

    deleteMember = (id) => {
        this.props.deleteMember(id).then(() => this.props.fetchAllMembers());
    }
 
  render() {
    const  { members } = this.props;
    const tableBodyDiv = (
        (members !== undefined && members.length > 0) &&
        members.map((item, index) => {
            return (
                <Table.Row key={index}>
                    <Table.Cell>{item.userName}</Table.Cell>
                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.city}</Table.Cell>
                    <Table.Cell><button className="btn btn-danger" onClick={() => this.deleteMember(item._id)}>Delete</button></Table.Cell>
                </Table.Row>
            )
        })
    )
    return (
      <div style={{textAlign: 'center', margin: 50}}>
      {/* <FormModal/> */}
        <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>User name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Mobile number</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
             {tableBodyDiv}
            </Table.Body>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
     members: state.members.membersList
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        fetchAllMembers: () => dispatch(fetchAllMembersService()),
        deleteMember: (id) => dispatch(deleteMember(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberPage);