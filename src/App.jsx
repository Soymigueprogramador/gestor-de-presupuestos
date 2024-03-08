import { useState } from 'react';
import './App.css';

const App = () => {
  const [gastos, setGastos] = useState([]);
  const [nuevoGasto, setNuevoGasto] = useState({
    nombre: '',
    cantidad: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoGasto(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevoGasto.nombre && nuevoGasto.cantidad) {
      setGastos(prevState => [...prevState, nuevoGasto]);
      setNuevoGasto({
        nombre: '',
        cantidad: ''
      });
    }
  };

  const handleDelete = (index) => {
    const newGastos = [...gastos];
    newGastos.splice(index, 1);
    setGastos(newGastos);
  };

  return (
    <>
      <h1>Gestor de Presupuestos</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input
          className='campos'
          type="text"
          name="nombre"
          placeholder="Nombre del gasto"
          value={nuevoGasto.nombre}
          onChange={handleChange}
        />
        <input
          className='campos'
          type="number"
          name="cantidad"
          placeholder="Cantidad"
          value={nuevoGasto.cantidad}
          onChange={handleChange}
        />
        <button type="submit">Agregar Gasto</button>
      </form>
      <ul>
        {gastos.map((gasto, index) => (
          <li key={index}>
            {gasto.nombre}: ${gasto.cantidad}
            <button className='eliminar' onClick={() => handleDelete(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;