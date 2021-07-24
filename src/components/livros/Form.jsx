import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Form extends Component {

    state = {
        livro: {
            id: this.props.livro.id,
            titulo: this.props.livro.titulo,
            autor: this.props.livro.autor,
            ano: this.props.livro.ano
        },
        redirecionar: false
    }

    cadastrar = e => {  
        e.preventDefault();
        if (this.props.editar) {
            this.props.editar(this.state.livro);
        } else {
            this.props.inserir(this.state.livro);
        }
        this.setState({ redirecionar: true });
    }

    render() {
        
        if (this.state.redirecionar === true) {
            return <Redirect to="/livros" />
        }

        return (
            <div style={{ padding: '20px' }}>
                <h2>Edição de Livro</h2>
                <form id="formulario" onSubmit={this.cadastrar}>
                    <div className="mb-3">
                        <label for="txtId">ID</label>
                        <input type="number" className="form-control" id="txtId"                            
                            defaultValue={this.props.livro.id}
                            value={this.state.livro.id}
                            readOnly/>
                    </div>
                    <div className="mb-3">
                        <label for="txtTitulo">Título</label>
                        <input type="text" className="form-control" id="txtTitulo"
                            placeholder="Informe o título" 
                            defaultValue={this.props.livro.titulo}
                            value={this.state.livro.titulo}
                            required
                            onChange={
                                e => this.setState(
                                    {livro: {...this.state.livro, titulo : e.target.value}}
                                )
                            }/>
                    </div>   
                    <div className="mb-3">
                        <label for="txtAutor">Autor</label>
                        <input type="text" className="form-control" id="txtAutor"
                            placeholder="Informe o autor" 
                            required
                            defaultValue={this.props.livro.autor}
                            value={this.state.livro.autor}
                            onChange={
                                e => this.setState(
                                    {livro: {...this.state.livro, autor : e.target.value}}
                                )
                            }/>
                    </div>  
                    <div className="mb-3">
                        <label for="txtAno">Ano</label>
                        <input type="number" className="form-control" id="txtAno"
                            placeholder="Informe o ano"
                            required 
                            defaultValue={this.props.livro.ano}
                            value={this.state.livro.ano}
                            onChange={
                                e => this.setState(
                                    {livro: {...this.state.livro, ano : e.target.value}}
                                )
                            }/>
                    </div>   
                    <button type="submit" className="btn btn-primary">
                            Salvar
                    </button>         
                                                                  
                </form>
            </div>
        );
    }

}

export default Form;