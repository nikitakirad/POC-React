import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { Accordion,Icon, Segment } from 'semantic-ui-react';
class Favmenu extends Component{
    state = { activeIndex: 0,value:false}

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }
    render(){
        const { activeIndex } = this.state
        let posts,comments,albums,users;
        let postlength=this.props.posts.length;
        let commentslength=this.props.comments.length;
        let albumslength=this.props.albums.length;
        let userslength=this.props.users.length;
        let count=0;        
        if(count!==postlength){
        posts=this.props.posts.map(post=>{
            let favpost=null;
            count++;
            if(post.fav === true){
              favpost=<div>
                  <h4><span>~</span>{post.title}{post.name}</h4>
                </div>
            }
            return favpost;
          })
      }
         if(count!==commentslength){
          comments=this.props.comments.map(comment=>{
              let favcomment=null;
              count++;
              if(comment.fav === true){
                favcomment=<div>
                            <h4><span>~</span>{comment.name}</h4>
                            </div>
              }
              return favcomment;
        })}
        if(count!==albumslength){
          albums=this.props.albums.map(album=>{
              let favalbum=null;
              count++;
              if(album.fav === true){
                favalbum=<div>
                            <h4><span>~</span>{album.title}</h4>
                            </div>
              }
              return favalbum;
        })}
        if(count!==userslength){
          users=this.props.users.map(user=>{
              let favuser=null;
              count++;
              if(user.fav === true){
                favuser=<div>
                            <h4><span>~</span>
                            {user.name}
                            </h4>
                            </div>
              }
              return favuser;
        })}
      
        return(
            <div>
                <Segment>
                <Accordion fluid styled>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                > 
                <Icon name='dropdown' />
                  POSTS
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <p>
                    {posts}
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={this.handleClick}
                >
                  <Icon name='dropdown' />
                  COMMENTS
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <p>
                    {comments}
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={this.handleClick}
                >
                  <Icon name='dropdown' />
                  ALBUMS
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                 <p>
                  {albums}
                 </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 3}
                  index={3}
                  onClick={this.handleClick}
                >
                  <Icon name='dropdown' />
                  USERS
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                 <p>
                  {users}
                 </p>
                </Accordion.Content>
              </Accordion></Segment>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        posts:state.post.posts,
        comments:state.comment.comments,
        albums:state.album.albums,
        users:state.user.users
    }
}
export default connect(mapStateToProps)(Favmenu);