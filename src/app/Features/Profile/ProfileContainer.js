import { connect } from 'react-redux';

import ProfileInfo from './Profile';
import { updateUser } from '../Users/userSlice';

// Container component(business logic and state transformation is done here)
const mapStateToProps = state => {
    return state.users;
  };

  const mapDispatchToProps = dispatch => {
    const newUser = {
      name: 'Rajiv Shrivastava',
      age: 53,
      location: 'UP, India',
      religion: 'Sanatak Dharma',
      education: 'Ayurved / Constitution Expert who educated the people of India to fight against corruption !'
    };
    return {
      updateUserInfo: () => dispatch(updateUser(newUser))
    }
  }
  
  export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
