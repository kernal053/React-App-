import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Menu from './MenuComponents';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        


        /*
        this.state = {
            selectedDish: null
        }
        */
    }
/*
    onDishSelect(dish){
        this.setState({selectedDish : dish});
    }

    */
    renderDish(dish) {
        if (dish != null)
            return(
              <div className="col-12  order-sm-first col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    

    renderComment(dish){
      if (dish != null)
      return(
      <div className="col-12 col-sm-6 order-sm-last col-md-5">
      
       {dish.comments.map((post, index) => (
           <ul class="list-unstyled " key={index}>      
            <li>{post.comment}</li>
            <li>{post.author}</li>
            <li>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(post.date)))} </li>
              
           </ul>
          ))};
       </div> 
      )
        

        else
            return(
                <div></div>
            );
    }
    

    
    /*
    
    return(
     dish.comments.map((post, index) =>
    <div className="col-12 col-sm-6 order-sm-last col-md-6" key={index}>
         <ul class="list-unstyled ">      
          <li>{post.comment}</li>
          <li>{post.author}</li>
          <li>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(post.date)))} </li>
            
      </ul>
  </div>
        
        
      

     )
);


      else
          return(
              <div></div>
          );
  }
  */

    render() {
      if(this.props.dish != null)
      return(
        <div class="container">
          <div class="row">
            {this.renderDish(this.props.dish)}
            {this.renderComment(this.props.dish)}
            
          </div>

        </div>
      )

       
       else
       return(
           <div></div>
       );
}


    /*

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-sm-5 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              {menu}
            </div>
            <div className="row">
                {this.renderDish(this.state.selectedDish)}
        
            {this.renderComment(this.state.selectedDish)}
            </div>
          </div>
        );
        
    }
    */
}

export default DishDetail;