import React from 'react'
import {Card} from 'react-bootstrap';
import '../../comp/NewsContext/NewsContext.css';
function NewsContext(props){
        
        if(props.news !=null)
        {
           console.log(props.news);
           var shownews=props.news.articles.map((articles)=> <Card className ="col-sm-12 my-3 news-card">
           <br/>
           <Card.Img  src={articles.urltoImage} />
           <Card.Body col-md-4 col-sm-12 className='News'>
             <Card.Title id={articles.publishedAt}>{articles.title}</Card.Title>
             <Card.Text>{articles.description}</Card.Text>
           </Card.Body>
           <Card.Body>
             <Card.Link href={articles.url} target="_blank">Read More</Card.Link>
           </Card.Body>
         </Card>
        );
           
        }
        return(
        <div className='NewsCards'>
        {shownews}
        </div>
        );
}

export default NewsContext
