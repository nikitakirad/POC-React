import React, {  Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import {Card,Button,Modal} from 'semantic-ui-react';
import Menu from '../../components/menu';
class Users extends Component{
    state={
        searchid:null,
        search:false
    }
    
    componentDidMount(){
        this.props.oninitUser();
    }
    addfav=(id)=>{
        this.props.onAddFavUser(id);
    }
    search=(event)=>{
        let postid=null;
        this.props.users.map(post=>{
            if(post.name === event.target.value){
                postid=post.id; 
            }
            return -1;
        })
        if(postid){
            this.setState({searchid:postid});
            this.setState({search:true});   
        }
        if(postid===null){
            this.setState({search:false});
        }
    }
    render(){
        let user;
        let searchuser;
        user=this.props.users.map(post=>{
            return(
                <div style={{margin:'10px 20px',height:'200px',width:'250px',border:'1px solid grey',background:'white'}}>
                     <div style={{height:"80px",paddingTop:'10px'}}>
                        <h4>{post.name}</h4></div><br/>
                    <Button id="btn" onClick={()=>this.addfav(post.id)} 
                             basic color='yellow'>
                             Add To Favs
                    </Button> <br/><br/>
                    <Modal trigger={<Button basic color='blue'>More details...</Button>}>
                    <Modal.Header>INFO</Modal.Header>
                    <Modal.Content>
                    <Modal.Description>
                        <label>NAME:</label>
                        {post.name}<br></br><br></br>
                        <label>EMAIL:</label>
                        {post.email}<br></br><br></br>
                        <label>USERNAME:</label>
                        {post.username}<br></br><br></br>
                        <label>ADDRESS:</label>
                        {post.address.street} {post.address.suite} {post.address.city}{post.address.zipcode}<br/><br/>
                        <label>PHONE:</label>
                        {post.phone}<br></br><br></br>
                        <label>WEBSITE:</label>
                        {post.website}<br></br><br></br>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
                </div>
            )
         })
        if(this.state.search === true){
            searchuser= <div style={{margin:'0px 20px'}}>
                                <Card color="black">
                                <Card.Content>
                                    <Card.Header>{this.props.users[this.state.searchid].name}</Card.Header>
                                    <Card.Description>
                                        {this.props.users[this.state.searchid].username}<br/>
                                        {this.props.users[this.state.searchid].email}<br/>
                                        {this.props.users[this.state.searchid].phone}<br/>
                                        {this.props.users[this.state.searchid].website}<br/>
                                    </Card.Description><br></br>
                                </Card.Content>
                            </Card><br/>
                            </div>
        }
        return(
            <div>
             <Menu displayParticular={searchuser} 
                displayAll={user}
                search={this.state.search}
                particularSearch={this.search}/>
            </div>
        );
    }
}
const mapStateToProps=state=>{
    return{
        users:state.user.users
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        oninitUser: () => dispatch(actions.initUsers()),
        onAddFavUser: (userid) => dispatch(actions.addUserToFavs(userid))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Users);
