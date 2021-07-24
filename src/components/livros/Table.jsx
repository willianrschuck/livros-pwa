import React from 'react';
import { Link } from 'react-router-dom'

const Table = ({ lista, remover }) => (

    <div>
        <h2 className="text-end mx-2">Meus Livros</h2>
        <Link className="btn btn-primary btn-sm mx-1" to="/livros/cadastro" title="Novo">
            <i className="bi bi-file-earmark-plus"></i>
        </Link>
        {lista.length === 0 && <h4>Nenhum livro encontrado</h4>}
        {lista.length > 0 && (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Ano</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="align-middle">
                    {lista.map(livro => (
                        <tr key={livro.id}>
                            <td style={{width: '5%'}}>{livro.id}</td>
                            <td>{livro.titulo}</td>
                            <td>{livro.autor}</td>
                            <td>{livro.ano}</td>
                            <td style={{width: 0}}>
                                <Link className="btn btn-sm btn-primary" title="Editar" to={`/livros/editar/${livro.id}`}>
                                    <i className="bi bi-pencil"></i>
                                </Link>
                            </td>
                            <td style={{width: 0}}>
                                <button className="btn btn-sm btn-danger" title="Remover"
                                    onClick={ () => remover(livro) }>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>

);

export default Table;