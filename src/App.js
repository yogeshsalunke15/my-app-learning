import React, { lazy, Profiler, Suspense} from 'react';
import { Routes, Link, Route, Outlet } from 'react-router-dom';

import CustomContext from './Components/Context/Context';
import CustomPortal from './Components/Portals/Portal';
import './App.scss';
import MouseTracker from './Components/RenderProps/MouseTracker';
import CustomHooks from './Components/Hooks/Hooks';
import AddUsers from './app/Features/Users/addUsers';
import { ProfileContainer } from './app/Features/Profile/ProfileContainer';
import HOC from './Components/HigherOrderComponent/HOC';
import StateManagment from './Components/StateManagement/StateManagement';
import Timer from './Components/Events/Timer';
import FormHandeling from './Components/Forms/FormHandeling';

//lazy loading component 
const eventComponent = import('./Components/Events/Events');
const Events = lazy(() => eventComponent);

function App() {
  const user = {
    fname: 'Yogesh Dadasaheb ',
    lname: 'Salunke'
  };
  
  navigator.clipboard.writeText('Text Copied to Clipboard - Yogesh Salunke');

  const formatUser = (user) => {
    return user.fname+' '+user.lname;
  }

  const buttonClicked = () =>{
    //alert("buton clicked !");
  };
 
  const eventToggle = (val) =>{
   // alert("Value from Child to Parent ->"+val);
  };

  const reader = {
    author: { 
      name: 'Yogesh Salunke Writer',
      avtarUrl: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    comment: 'Good Book, Must red it !',
    publishedDate: new Date()
  };

  function unsubscribingEffect() {
    //alert('Unsubscribing the effect');
  }
  
  const profilerCalled = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) =>{
    /*
    id : the "id" prop of the Profiler tree that has just committed
    phase : either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration:  time spent rendering the committed update
    baseDuration: estimated time to render the entire subtree without memoization
    startTime: when React began rendering this update
    commitTime: when React committed this update
    interactions: the Set of interactions belonging to this update */

      console.log(id+'----'+phase+'---'+actualDuration+'----'+baseDuration+'---'+startTime+'----'+commitTime+'---'+interactions+'---Ended-');
  }

    return (
      // <Profiler id="appProfiler" onRender={profilerCalled}>
      <div className="App bground">
      <h1> Hello, {formatUser(user)} !</h1>
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route exact path="/timer" element={<Timer />} ></Route>
              <Route path='/mouse' element={<MouseTracker />}></Route>
              <Route path='/state' element={ <StateManagment />}></Route>
              <Route path='/form' element={ <FormHandeling />}></Route>
              <Route path='/add-user' element={ <AddUsers />}></Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      {/* <button onClick={buttonClicked}> Click me !</button><br/><br/> */}
      {/* <Welcome name="Yogesh" />
      <Comment user={reader} /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Events onEventClick={eventToggle}>
          <div>
            <h2>
              Please click on the button above to switch On or Off the toggle !
            </h2>
            <h4>Note: Thanks for reaching out to "props.children" proprty !</h4>
          </div>
        </Events>
      </Suspense><br/><br/>
      <br/><br/>
      {/* <Clock /><br/><br/> */}
      <List /><br/><br/>
      <ControlledForms />
      <Composition left={<Clock />} right={<Clock />} /> <br/>
      <CustomContext /> <br/>
      <CustomPortal>
        <>
          This information has to be embeded into another dom tree at different location in DOM
        </> { /*short syntax of using Fragment */ }
      </CustomPortal>
      <CustomHooks unsubscribingEffect={unsubscribingEffect} /> <br/><br/>
      <ProfileContainer />
      <HOC></HOC>
      </div>
     // </Profiler>
    );
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class Comment extends React.Component {
  render() {
    return (
      <React.Fragment>
          <UserInfo user={this.props.user.author} />
          <div>{this.props.user.comment}</div>
          <div>{this.props.user.publishedDate.toString()}</div>
      </React.Fragment>
    
    );
  }
}
  class Avtar extends React.Component {
    render() {
      return (
          <img 
          src={this.props.author.avtarUrl} 
          alt={this.props.author.name} 
          />
      );
    }
  }
  class UserInfo extends React.Component {
    render() {
      return(
        <div>
          <Avtar author={this.props.user} />
          <div>{this.props.user.name}</div>
        </div>
      );
    }
  }

  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(),
      isLoggedIn:false};
    }

    componentDidMount() {
      this.timerID = setInterval(()=> this.tick(), 1000);
    }
    componentWillUnmount(){ //alert("Clearing Clock component from DOM !");
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date: new Date()
      });

     this.setState(() => {return this.state = {date: new Date() }});
    }
    userLoggedIn = () => {
      this.setState({isLoggedIn: true});
    }
    userLoggedOut = () => {
      this.setState({isLoggedIn: false});
    }

    //innerHTML rendering in react
    reactInnerHTML = () => {
      return {__html: 'Rendering Inner HTML for React component dangerouly ! - Yogesh'};
    }

    render() {
      const loggedIn = this.state.isLoggedIn;
      return (
        <React.Fragment>
          <div>Hello Yogesh, below is CLock !</div>
          <div> {this.state.date.toLocaleTimeString()} </div>
          <div>{loggedIn 
          ? <button onClick={this.userLoggedOut}>User Logged In !</button> 
          : <button onClick={this.userLoggedIn}>Guest User </button>}</div>
          <div dangerouslySetInnerHTML={this.reactInnerHTML()} /> 
          </React.Fragment>
      );
    }
  }

  class List extends React.Component {
    constructor() {
      super();
      this.state = {num: [1,2,3,4,5,6]};
    }

    render() {
      return(
        <div><ul>
          {this.state.num.map(numbr =>
            <li key={numbr.toString()}> {numbr}</li>
          )}
          </ul>
        </div>
      );
    }
  }

  class ControlledForms extends React.Component {

    constructor() {
      super();
      this.state = {
        selectedFruit: 'placeholder right now',
        dropdown: 'coconut'
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      console.log(event.target.fruit.value);
      //this.setState({selectedFruit: event.target.value});
    }

    handleChange(event){
      console.log(event.target.value);
      this.setState({selectedFruit: event.target.value});
    }

    render() {
      return(
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="userName" type="text" value={this.state.selectedFruit} />
        </label><br/>
        <select defaultValue={this.state.dropdown} onChange={this.handleChange.bind(this)} name='fruit'>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select><br/>
        <input type="submit" value="Submit Form" />
        </form>
      );
    }
  }

  class Composition extends React.Component {
    constructor(props) {
      super(props);
      this.FrwrdRef = React.createRef();
      this.parentRef = React.createRef();
    }

    componentDidMount() {
      console.log(this.parentRef.current);
    }
    
    render() {
      console.log(this.FrwrdRef.current);
      return(
        <React.Fragment>
          <div ref={this.parentRef}>
              <h3>Inside composition component and rendering props as other component</h3>
              <div>
                {this.props.left}
              </div>
              <div>
                {this.props.right}
              </div>
              <button onClick={() => { console.log(this.FrwrdRef.current.name) }}>Printing forwardRef Ref in Parent Component !</button>
          </div>
          <ForwardRefComponent ref={this.FrwrdRef}>
           Click me  Yogesh!
          </ForwardRefComponent>
        </React.Fragment>
        
      );
    }
  }

  const ForwardRefComponent = React.forwardRef((props, forwardedref) => {
    class ForwardRefComponent extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          count: 0
        }
      }
      render() {
        return (
          <div>
            {props.children}<br/>
            <button ref={forwardedref} onClick={() => this.setState(
              { count: this.state.count + 1 })} name={this.state.count}>
                    Increment
            </button>
          </div>
        )
      }
    }
    return <ForwardRefComponent />
  })

  function Layout() {
    return (
      <div>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/timer">Timer</Link>
            </li>
            <li>
              <Link to="/state">State Managment</Link>
            </li>
            <li>
              <Link to="/mouse">Mouse Tracker</Link>
            </li>
            <li>
              <Link to="/add-user">Add user to State </Link>
            </li>
            <li>
              <Link to="/form">Form Handeling</Link>
            </li>
          </ul>
        </nav>
  
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </div>
    );
  }
  const NotFound = () => {
    return(<>
      <div> 404 - Not found any page of specified Name</div>
    </>);
  }

export default App;

/*
component’s lifecycle methods

1. componentDidMount
2. componentWillUnmount
3. componentDidUpdate 


*/
