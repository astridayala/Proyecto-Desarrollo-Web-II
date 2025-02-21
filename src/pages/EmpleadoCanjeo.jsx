import React, { useState } from 'react';

const CuponCanje = () => {
  const [codigoCupon, setCodigoCupon] = useState('');
  const [dui, setDui] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [cuponCanjeado, setCuponCanjeado] = useState(false);

  const handleCanjearCupon = async () => {
    // Aquí deberías hacer una llamada a tu API para verificar el cupón
    // Este es un ejemplo de cómo podrías estructurar la lógica

    try {
      const response = await fetch(`/api/cupones/${codigoCupon}`);
      const data = await response.json();

      if (data.error) {
        setMensaje(data.error);
        return;
      }

      if (data.dui !== dui) {
        setMensaje('El DUI no coincide con el del comprador del boleto.');
        return;
      }

      if (data.canjeado) {
        setMensaje('Este cupón ya ha sido canjeado.');
        return;
      }

      // Si todo está correcto, procedemos a canjear el cupón
      const canjeResponse = await fetch(`/api/cupones/${codigoCupon}/canjear`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dui }),
      });

      const canjeData = await canjeResponse.json();

      if (canjeData.success) {
        setMensaje('Cupón canjeado exitosamente.');
        setCuponCanjeado(true);
      } else {
        setMensaje('Hubo un error al canjear el cupón.');
      }
    } catch (error) {
      setMensaje('Hubo un error al conectar con el servidor.');
    }
  };

  return (
    <div>
      <h1>Canje de Cupones</h1>
      <div>
        <label>
          Código del Cupón:
          <input
            type="text"
            value={codigoCupon}
            onChange={(e) => setCodigoCupon(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          DUI:
          <input
            type="text"
            value={dui}
            onChange={(e) => setDui(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleCanjearCupon} disabled={cuponCanjeado}>
        Canjear Cupón
      </button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default CuponCanje;
