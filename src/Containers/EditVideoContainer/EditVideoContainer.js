import React, {Component} from 'react'

class EditVideoContainer extends Component {
    
    constructor(){
        super();
        this.state = {
            videoId: 0
        }
    }
    componentDidMount(){
        let videoId = this.props.match.params["id"];
        this.setState({videoId: videoId})
    }

    render() {
        return (<div>
            EditVideoContainer videoId: {this.state.videoId}
        </div>)
    }
}

export default EditVideoContainer