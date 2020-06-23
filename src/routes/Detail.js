import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    
    const { location, history } = this.props;
    console.log(location);
    if (location.state == undefined){
        history.push('/');
    }

  }

  render() {
    const {location} = this.props;
    if (location == undefined){
        return <spanb>{location.state.title}</spanb>;
    }
    else{
        return null;
    }
    
  }
}

export default Detail;