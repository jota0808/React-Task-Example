import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescrption] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });

    setTitle("");
    setDescrption("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className=" bg-gray-800 p-10 py-4 mb-4">
        <input className='bg-slate-700 p-2 font-bold w-full mb-3'
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea className=' bg-slate-700 font-bold  p-2 w-full mb-3'
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setDescrption(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className='bg-indigo-900 px-2 py-1 font-serif text-white rounded-md'>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
