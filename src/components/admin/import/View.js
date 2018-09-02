import React, { Component } from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone'
import { uploadFile, sellersFetchData } from '../actions/importActions';
import Alert from '../common/Alert'
import Preloader from '../Preloader'

class ImportView extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            selectedSeller: 0,
            alertBody: '',
        }
        this.props.fetchData();
    }

  validateFile (file) {
        
        if (!this.state.selectedSeller){
            this.setState({alertBody: 'Debe seleccionar la distribuidora'});
            return false;
        }
        else
            if (!file.name.includes('xls') && !file.name.includes('xlsx')){
                this.setState({alertBody: 'El archivo adjunto no tiene extension válida. Solo se permiten archivo Excel (xls o xlsx)'});
                return false;
            }
            return true;
        
  }
  onDrop = (files) => {
       
        if (this.validateFile(files[0])){
            this.props.uploadFile(files[0], this.state.selectedSeller);
        }
        else{
            this.props.showAlert();
        }  
  }
  
  updateSelectedSeller(e) {
        
        this.setState({selectedSeller: parseInt(e.target.value)});
        
  }


  importResults() {
      
      if (this.props.results.success || this.props.results.errors){
        return (
        <div>
            <br/>
            <div className="alert alert-success">
                Importaciones exitosas: <strong>{this.props.results.success}</strong>
            </div>
            <div className="alert alert-danger">
                Importaciones fallidas: <strong>{this.props.results.errors}</strong><br/>
                <em>(Revise que todos los libros cuenten al menos con ISBN y Titulo)</em>
            </div>
        </div>
        )
    }
  }
    
  render () {
    
    return (
        <div>
            <Alert 
                title="Importación fallida"
                body={this.state.alertBody}
             />
            <Preloader title="Importando datos.." show={this.props.showPreloader} />
            <div className="box-header with-border">
                <h3 className="box-title">Importación de Libros</h3>
            </div>
            <div className="box-body">
                <div className="row">
                    <div className="col-md-12">
                    <p>
                        Seleccione la distribuidora y el archivo en formato XLS para adjuntar
                    </p>
                    <p>
                    <label>Distrubuidora:</label>
                    <select className="form-control" onChange={this.updateSelectedSeller.bind(this)} >
                        <option value="0">Seleccione...</option>
                        {this.props.sellers.map((seller) => 
                            <option key={seller.id} value={seller.id}>{seller.name}</option>
                        )}
                    </select>
                    </p>
                    <Dropzone
                        className="dropzone"
                        multiple={false}
                        onDrop={this.onDrop}
                    >
                    <i className="fa fa-cloud-upload dropzone-i"></i><br/>
                    Haz click aqui o arrastra el archivo a esta zona para adjuntarlo (XLS, XLSX)
                    </Dropzone>
                    {this.importResults()}
                    </div>
                </div>
            </div>
        </div>

    );
  }
}
const mapStateToProps = (state) => {
    return {
        alert: state.alert,
        sellers: state.sellers,
        showPreloader: state.importIsLoading,
        results: state.importFile
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        uploadFile: (file, distID) => dispatch(uploadFile(file, distID)),
        showAlert: () => dispatch({ type: 'ALERT_SHOW' }),
        fetchData: () => dispatch(sellersFetchData())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ImportView);
