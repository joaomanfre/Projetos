import React, { useState } from "react";

const Tarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefaEditada, setTarefaEditada] = useState(null);
  const [textoEditado, setTextoEditado] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa }]);
      setNovaTarefa("");
    }
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  const iniciarEdicao = (tarefa) => {
    setTarefaEditada(tarefa);
    setTextoEditado(tarefa.texto);
  };

  const cancelarEdicao = () => {
    setTarefaEditada(null);
    setTextoEditado("");
  };

  const concluirEdicao = () => {
    setTarefas(tarefas.map((tarefa) => tarefa.id === tarefaEditada.id ? {...tarefa, texto: textoEditado} : tarefa));
    setTarefaEditada(null);
    setTextoEditado("");
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <div>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      </div>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefaEditada && tarefaEditada.id === tarefa.id ? (
              <>
                <input
                  type="text"
                  value={textoEditado}
                  onChange={(e) => setTextoEditado(e.target.value)}
                />
                <button onClick={concluirEdicao}>Salvar</button>
                <button onClick={cancelarEdicao}>Cancelar</button>
              </>
            ) : (
              <>
                {tarefa.texto}
                <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
                <button onClick={() => iniciarEdicao(tarefa)}>Editar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tarefas;