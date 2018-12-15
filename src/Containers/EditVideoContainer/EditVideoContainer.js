import React, {Component} from 'react'
import VideoForm from '../../Components/VideoForm/VideoForm';

class EditVideoContainer extends Component {

    constructor() {
        super();
        this.state = {
            videoId: 0
        }
        this.updateVideoDetails = this
            .updateVideoDetails
            .bind(this);
    }
    componentDidMount() {
        let videoId = this.props.match.params["id"];
        this.setState({videoId: videoId})
    }
    updateVideoDetails(newVideoData) {
        console.log("updateVideoDetails", newVideoData);
    }
    render() {
        return (
            <div>
                <h2>Edit Video</h2>
                <VideoForm updateVideoDetails={this.updateVideoDetails}></VideoForm>
            </div>
        )
    }
}

export default EditVideoContainer