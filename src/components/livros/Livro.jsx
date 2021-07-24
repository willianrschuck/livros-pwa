import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SimpleStorage from 'react-simple-storage';
import Table from './Table';
import Form from './Form';
import Alert from '../Alert';

class Livro extends Component {

    state = {
        lista: [],
        seqId: 0
    }

    remover = objeto => {
        if (window.confirm("Remover este livro?")) {

            const lista = this.state.lista.filter(p => p.id !== objeto.id);
            this.setState({ lista });

            this.setState({
                alert: {
                    type: 'success',
                    message: `Livro ${objeto.id} - ${objeto.titulo} removido com sucesso!`
                }
            });

        }
    }

    inserir = livro => {
        let objId = this.state.seqId + 1;
        livro.id = objId;
        this.setState({
            seqId: objId,
            lista: [...this.state.lista, livro]
        });
    }

    editar = livro => {

        const index = this.state.lista.findIndex(p => p.id === livro.id);

        // Remove a versao antiga do livro que editamos
        const listaItemRemovido =
            this.state.lista
                .splice(0, index)
                .concat(this.state.lista.splice(index + 1));

        // Adiciona o livro que acabamos de editar
        const newListaObjetos = [...listaItemRemovido, livro].sort((a, b) => a.id - b.id);

        this.setState({
            lista: newListaObjetos
        });

    }

    render() {
        return (

            <Router>
                <SimpleStorage parent={this}/>
                <Switch>

                    <Route exact path='/livros' render={() => (
                        <div>
                            {this.state.alert && <Alert type={this.state.alert.type} message={this.state.alert.message} onClose={() => this.setState({alert: undefined})}/>}
                            <Table lista={this.state.lista} remover={this.remover}/>  
                        </div>
                    )}/>

                    <Route exact path="/livros/cadastro" render={() =>
                        <Form inserir={this.inserir} livro={{ id: 0, titulo: "", autor: "", ano: "" }}/>
                    }/>

                    <Route exact path="/livros/editar/:id" render={ props => {
                        const livro = this.state.lista.find(
                            livro => livro.id === Number(props.match.params.id)
                        );
                        return livro ? <Form editar={this.editar} livro={livro}/> : <Redirect to="/livros"/>;
                    }}/>

                </Switch>
            </Router>

        );
    }

}

export default Livro;