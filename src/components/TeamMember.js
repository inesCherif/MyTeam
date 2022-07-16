import React, {Component} from 'react'

class TeamMember extends Component{
    render(){
        return(
            <div className="col-md-4 col-sm-6">
                <div className="card" style={{borderColor: this.props.phone ? '' : 'gris',backgroundColor: !(this.props.phone) ? 'orange' : 'white'}}>
                    <div className="card-header">
                        <img src={this.props.img} alt={this.props.name} />
                    </div>
                    <div className="card-body">
                        <h2>{this.props.name}</h2>
                        <h5>{this.props.position}</h5>
                        <div>{this.props.phone}</div>
                        <div>{this.props.email}</div>
                        <div>{this.props.facebook}</div>
                    </div>
                </div>
            </div>
           )
    }
}

export default TeamMember