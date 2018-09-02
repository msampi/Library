import React, { Component } from 'react';
import BookList from './BookList';


class BooksView extends Component {
  
  render () {
    
    return (
        <div>
            <div className="box-header with-border">
                <h3 className="box-title">Libros</h3><br/>
                <em>Utilice los filtros para realizar multiples tipos de búsqueda</em>
            </div>
            <div className="box-body">
                <div className="row">
                    <div className="col-md-12">    
                        <BookList />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default BooksView;