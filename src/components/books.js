import React from "react";
import {BookItem} from './bookItem';

export class Books extends React.Component{
    render(){
        return this.props.books.map(
            (book)=>{
                //is changed to book_id for mongo db
                return <BookItem book={book} key={book._id}></BookItem>
            }
        );
    }
}