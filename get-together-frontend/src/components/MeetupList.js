import React, {Component} from 'react'
import MeetupCard from './MeetupCard'

class MeetupList extends Component {
    render(){
        return(
            <div>
                Meetup List
                {this.props.meetups.map(meetup => {
                    return <MeetupCard key={meetup.id} meetup={meetup}/>
                })}
            </div>
        )
    }
}

export default MeetupList