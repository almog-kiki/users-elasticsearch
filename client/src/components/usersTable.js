import React, { Fragment , Component} from 'react';
import { Table } from 'reactstrap'
import * as Constants from '../common/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp,faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default class UsersTable extends Component {

    drawHeader = () =>{
        return ( 
            <h1>{Constants.USER_LIST_TITLE}</h1>
        )
    }

    getArrowIcon= (isAsc)=>{
        if(isAsc){
            return <FontAwesomeIcon icon={faArrowDown} />
        } else {
            return <FontAwesomeIcon icon={faArrowUp} />
        }        
    }

    render(){
        const { users, sortBy, sort } = this.props;
        return(
            <Fragment>
                {this.drawHeader()}
                {
                    <Table striped className="table-container">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th className="table-th-click" onClick={()=>sortBy("firstname")}>
                                firstname
                                <span className="arrow">
                                    {this.getArrowIcon(sort.firstname)}
                                </span>     
                             </th>
                            <th className="table-th-click" onClick={()=>sortBy("lastname")}>
                                lastname
                                <span className="arrow">
                                    {this.getArrowIcon(sort.lastname)}
                                </span>   
                            </th>
                            <th className="table-th-click" onClick={()=>sortBy("username")}>
                                username
                                <span className="arrow">
                                    {this.getArrowIcon(sort.username)}
                                </span>   
                            </th>
                            <th>role</th>
                        </tr>
                        </thead>
                        <tbody>
                            { users.map( (user, index)=>(
                            <tr key={user._id}>
                                <th scope="row">{index+1}</th>
                                <td>{user._source.firstname}</td>
                                <td>{user._source.lastname}</td>
                                <td>{user._source.username}</td>
                                <td>{user._source.role}</td>
                            </tr>
                            ))
                            }
                        </tbody>            
                    </Table>
                }
            </Fragment>
        )
    }

}