import { Component } from 'react';
import Table from './Table';
import Alert from '../Alert';

class Livro extends Component {

    state = {
        lista: [ 
            {id : 1, titulo : "React PWA", autor : "Mauricio" , ano : 2021},
            {id : 2, titulo : "React Hooks", autor : "Mauricio" , ano : 2021}
        ]
    }

    remover = objeto => {

        if (window.confirm("Remover este livro?")) {

            if (objeto.id === 2) {

                this.setState({
                    alert: {
                        type: 'danger',
                        message: 'Um erro ocorreu ao remover o livro!'
                    }
                });

            } else {

                const lista = this.state.lista.filter(p => p.id !== objeto.id);
                this.setState({ lista });

                this.setState({
                    alert: {
                        type: 'success',
                        message: 'Livro removido com sucesso!'
                    }
                });

            }



        }

        

    }

    render() {
        return (
            <div>
                {this.state.alert && <Alert type={this.state.alert.type} message={this.state.alert.message} onClose={() => this.setState({alert: undefined})}/>}
                <Table lista={this.state.lista} remover={this.remover}/>  
            </div>
        );
    }

}

export default Livro;