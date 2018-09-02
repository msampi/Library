import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import { booksFetchData } from '../actions/booksActions';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.props.fetchData();
    }
    
    columns() {
        return [
            {
                Header: 'id',
                accessor: 'id',
                maxWidth: 40
            }, 
            {
                Header: 'ISBN',
                accessor: 'isbn',
                filterable: true,
                maxWidth: 100
            }, 
            {
                Header: 'Titulo',
                accessor: 'title',
                filterable: true
                
            }, 
            {
                Header: 'Autor', 
                accessor: 'author', 
                filterable: true
            },
            {
                Header: 'Distribuidor',
                accessor: 'seller',
                filterable: true,
            }, 
            {
                Header: 'Tematica Gral', 
                accessor: 'thematic1', 
                filterable: true
            },
            {
                Header: 'Subtematica 1', 
                accessor: 'thematic2', 
                filterable: true
            },
            {
                Header: 'Subtematica 2', 
                accessor: 'thematic3', 
                filterable: true
            }
            
            
            
            
        ]
    }
    render() {
        
        return (
            <ReactTable
                data={this.props.isLoading ? [] : this.props.books}
                columns={this.columns()}
                previousText='Anterior'
                nextText='Siguiente'
                pageText='Pagina'
                ofText = 'de'
                loadingText='Cargando'
                noDataText='No hay filas para mostrar'
                rowsText='filas'
                loading={this.props.isLoading ? true : false}
                defaultPageSize={10}
                defaultFilterMethod={filterCaseInsensitive}
                defaultFilterMethod={filterMatchSubstring}
                
                
            />
        )
      }
  }

const filterCaseInsensitive = (filter, row) => {
    const id = filter.pivotId || filter.id;
    return (
        row[id] !== undefined ?
            String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
            :
            true
    );
};

const filterMatchSubstring = (filter, row) => {
    const id = filter.pivotId || filter.id;
    return (
        row[id] !== undefined ?
            String(row[id].toLowerCase()).includes(filter.value.toLowerCase())
            :
            true
    );
};

const mapStateToProps = (state) => {
    return {
        books: state.books,
        hasError: state.booksHaveError,
        isLoading: state.booksAreLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(booksFetchData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);