// import React from "react";
// class Profile extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log(props);
//     // console.log(this.props);
//     this.props = props;
//     this.state = {
//       userInfo: {
//         name: "Dummy Name",
//         location: "Dummy Location",
//         avatar_url:""
//       },
//     };
//     console.log("Child Constructor" + this.props.name);
//   }
//   async componentDidMount() {
//     const res = await fetch("https://api.github.com/users/akshaymarch7");
//     const data = await res.json();
//     console.log(data);
//     this.setState({
//       userInfo: data,
//     });
//     console.log("Child Component" + this.props.name);
//   }
//   render() {
//     console.log("Child Render" + this.props.name);
//     {/* we do not mutate state directly */}
//     return (
//       <>
//         <h1>Profile Class Component</h1>
//         <img src={this.state.userInfo.avatar_url}></img>
//         <h2>Name:{this.state.userInfo.name}</h2>
//         <h2>Location:{this.state.userInfo.location}</h2>
        
//       </>
//     );
//   }
// }
// export default Profile;
