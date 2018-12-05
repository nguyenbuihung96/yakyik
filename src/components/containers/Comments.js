import React, {Component} from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'

class Comments extends Component{
    constructor(){
        super()
        this.state={
            comment:{
                username: '',
                body: '',
                timestamp:''
            },
            list:[
                {body: 'comment 1', username: 'dtrump', timestamp:'10:30'},
                {body: 'comment 2', username: 'hclinton', timestamp: '10:45'},
                {body: 'comment 3', username: 'gjohnson', timestamp: '11:00'}
            ]
        }
    }

    submitComment(){
        console.log('submitComment: '+JSON.stringify(this.state.comment))
        let updatedList=Object.assign([], this.state.list)
        updatedList.push(this.state.comment)

        this.setState({
            list: updatedList
        })

    }

    updateUsername(event){
        console.log('updateUsername: '+event.target.value)
        let updateComment=Object.assign({}, this.state.comment)
        updateComment['username']=event.target.value

        this.setState({
            comment: updateComment
        })
    }

    updateBody(event){
        console.log('updateBody: '+event.target.value)

        let updateComment=Object.assign({}, this.state.comment)
        updateComment['body']=event.target.value

        this.setState({
            comment: updateComment
        })
    }

    updateTimestamp(event){
        let updateComment=Object.assign({}, this.state.comment)
        updateComment['timestamp']=event.target.value

        this.setState({
            comment: updateComment
        })
    }


    render(){
        const commentList=this.state.list.map((comment, i)=>{
            return(
                <li key={i}><Comment currentComment={comment}/></li>
            )
        })
        return(
            <div>
                <h2>Comments: Zone 1</h2>
                <div style={styles.comment.commentsBox}>
                    <ul style={styles.comment.commentsList}>
                        {commentList}
                    </ul>

                    <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username"/><br />
                    <input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comment"/><br />
                    <input onChange={this.updateTimestamp.bind(this)} className="form-control" type="text" placeholder="Timestamp"/><br />
                    <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
                </div>
            </div>
        )
    }
}

export default Comments

