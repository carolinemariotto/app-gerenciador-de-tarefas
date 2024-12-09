import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks"; // Corrigido para usar o nome correto

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar progrmação",
      description: "Estudar como fazer um app em react",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fazer batatinha frita no air fyer",
      description: "fazer no air fyer para não comer muita gordura",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Sacar 1.000 reais no banco ",
      description: "dinheiro destinado para fazer compras de natal",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <Tasks tasks={tasks} /> {/* Corrigido o uso de Tasks */}
        <AddTask />
      </div>
    </div>
  );
}

export default App;