import React, {  Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import {Card,Button,Modal} from 'semantic-ui-react';
import Menu from '../../components/menu';
class Comments extends Component{
    state={
        searchid:null,
        search:false
    }
    
    componentDidMount(){
        this.props.oninitComments();
    }
    addfav=(id)=>{
        this.props.onAddFavComment(id);
    }
    search=(event)=>{
        let postid=null;
        this.props.comments.map(post=>{
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
        let comment;
        let searchcomment;
        comment=this.props.comments.map(post=>{
            return(
                <div style={{margin:'10px 20px',height:'200px',width:'250px',border:'1px solid grey',background:'white'}}>
                     <div style={{height:"80px",paddingTop:"10px"}}>
                        <h4>{post.name}</h4></div><br/>
                    <Button id="btn" onClick={()=>this.addfav(post.id)} 
                             basic color='yellow'>
                             Add To Favs
                    </Button><br/><br/>
                    <Modal trigger={<Button basic color='blue'>More details...</Button>}>
                    <Modal.Header>INFO</Modal.Header>
                    <Modal.Content>
                    <Modal.Description>
                        <label>NAME:</label>
                        {post.name}<br></br><br></br>
                        <label>EMAIL:</label>
                        {post.email}<br></br><br></br>
                        <label>BODY:</label>
                        {post.body}<br></br><br></br>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
                </div>
            )
         })
        if(this.state.search === true){
            searchcomment= <div style={{margin:'0px 20px'}}>
                                <Card color="black">
                                <Card.Content>
                                    <Card.Header>{this.props.comments[this.state.searchid].name}</Card.Header>
                                    <Card.Description>{this.props.comments[this.state.searchid].body}</Card.Description><br></br>
                                </Card.Content>
                            </Card><br/>
                            </div>
        }
        return(
            <div>
            <Menu displayParticular={searchcomment} 
                displayAll={comment}
                search={this.state.search}
                particularSearch={this.search}/>
            </div>
            
        );
    }
}
const mapStateToProps=state=>{
    return{
        comments:state.comment.comments
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        oninitComments: () => dispatch(actions.initComments()),
        onAddFavComment: (commentid) => dispatch(actions.addCommentsToFavs(commentid))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Comments);
