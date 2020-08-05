import React, { useState }  from 'react';
import {NavLink} from 'react-router-dom'
import {Segment,Icon,Sidebar,Menu, Card} from 'semantic-ui-react';

const menu=(props)=>{
    const style={
        border:'1px solid black',
        padding:'10px 30px',
        borderRadius:'8px',
        margin:'10px 0px'
    }
    const [menuVisible, setmenuVisible] = useState(false);
    return(
        <div>
        <Menu inverted attached="top">
            <Menu.Item inverted pointing secondary onClick={() => setmenuVisible(!menuVisible)}>
                <Icon name="sidebar" />Menu
            </Menu.Item>          
            </Menu>
            <Sidebar.Pushable inverted
                as={Segment}  >
                <Sidebar as={Menu} animation="overlay" 
                visible={menuVisible} 
                icon="labeled" vertical width='thin' 
                inverted
                onHide={() => setmenuVisible(!menuVisible)}>
                <Menu.Item as={NavLink} to ='/posts'><Icon name="block layout" />Posts</Menu.Item> 
                <Menu.Item as={NavLink} to ='/comments'><Icon name="block layout" />Comments</Menu.Item> 
                <Menu.Item as={NavLink} to ='/albums'><Icon name="block layout" />Albums</Menu.Item> 
                <Menu.Item as={NavLink} to ='/users'><Icon name="block layout" />Users</Menu.Item> 
                <Menu.Item as={NavLink} to ='/fav'><Icon name="smile" />Favs</Menu.Item>
            </Sidebar>
            <Sidebar.Pusher  dimmed={menuVisible}>
            <input type="search" style={style} placeholder="Search...." onChange={(event)=>props.particularSearch(event)} />
            {props.search ?<div>{props.displayParticular}</div>:<Segment><Card.Group>{props.displayAll}</Card.Group></Segment>} 
            </Sidebar.Pusher>
            </Sidebar.Pushable>
</div>

    )
}

export default menu;

