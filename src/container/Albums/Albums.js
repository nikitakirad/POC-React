import React, {  Component } from 'react';
import { connect } from 'react-redux';
import {Card,Button} from 'semantic-ui-react';
import * as actions from '../../store/actions/index';
import  Menu from '../../components/menu';
class Albums extends Component{
    state={
        searchid:null,
        search:false
    }
    
    componentDidMount(){
        this.props.oninitAlbum();
    }
    addfav=(id)=>{
        this.props.onAddFavAlbum(id);
    }
    search=(event)=>{
        let postid=null;
        this.props.albums.map(post=>{
            if(post.title === event.target.value){
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
        let album;
        let searchalbum;
        album=this.props.albums.map(post=>{
            return(
                <div style={{margin:'10px 20px',height:'200px',width:'250px',border:'1px solid grey',background:'white'}}>
                     <div style={{height:"80px",paddingTop:'10px'}}>
                        <h4>{post.title}</h4></div><br/>
                    <Button id="btn" onClick={()=>this.addfav(post.id)} 
                             basic color='yellow'>
                             Add To Favs
                    </Button> <br/><br/>
                </div>
            )
         })
        if(this.state.search === true){
            searchalbum= <div style={{margin:'0px 20px'}}>
                                <Card color="black">
                                <Card.Content>
                                    <Card.Header>{this.props.albums[this.state.searchid].title}</Card.Header><br/><br/>
                                </Card.Content>
                            </Card><br/>
                            </div>
        }
        return(
            <div>
            <Menu displayParticular={searchalbum} 
                displayAll={album}
                search={this.state.search}
                particularSearch={this.search}/>
            </div>
        );
    }
}
const mapStateToProps=state=>{
    return{
        albums:state.album.albums
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        oninitAlbum: () => dispatch(actions.initAlbums()),
        onAddFavAlbum: (albumid) => dispatch(actions.addAlbumsToFavs(albumid))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Albums);
