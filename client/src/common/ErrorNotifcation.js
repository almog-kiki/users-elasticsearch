import React from 'react';
import { Row,Col} from 'reactstrap';
import * as Constants from './constants';

function ErrorNotifcation(props){
  return (
    <Row className="h-100" >
          <Col xs={3} md={2} className="align-self-center" style={{"paddingLeft":"1px"}} >
            <i className="fa fa-ban" style={Constants.toastStyle.toastText}></i>
          </Col>
          <Col xs={9} md={10} style={Constants.toastStyle.toastIcon}>
                <span>{props.text}</span>
          </Col>                
      </Row>              
  );

}
export default ErrorNotifcation;


