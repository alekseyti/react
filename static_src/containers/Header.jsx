
import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';



class Header extends React.Component {
   static propTypes = {
       chatId: PropTypes.number,
       profileName: PropTypes.string,
   };

   static defaultProps = {
       chatId: 1,
   };

   render() {
       return (
           <div className="header">
               <List>
                 <Link to="/profile/">
                    <ListItem primaryText={ this.props.profileName } />
                 </Link>   
            </List>



               <span style={ { fontSize: '20px' } }>Чат { this.props.chatId }</span>
           </div>
       )
   }
}



const mapStateToProps = ({ chatReducer }) => ({
    profileName: chatReducer.profileName,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(Header);
 
