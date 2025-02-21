import React, { useState } from 'react';
import { HeaderEmpleado } from '../components/HeaderEmpleado';

const CuponCanje = () => {
    const [codigoCupon, setCodigoCupon] = useState('');
    const [dui, setDui] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [cuponCanjeado, setCuponCanjeado] = useState(false);

    const handleCanjearCupon = async () => {
        // Validar longitud del DUI
        if (dui.length !== 9) {
            setMensaje('Número de DUI inválido. Debe tener exactamente 9 dígitos.');
            return;
        }

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
        <>
        <HeaderEmpleado/>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-lg px-6"> {/* Cambiado a max-w-lg */}
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Canje de Cupones
                </h1>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Código del Cupón:
                        </label>
                        <input
                            type="text"
                            value={codigoCupon}
                            onChange={(e) => setCodigoCupon(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingresa el código del cupón"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            DUI:
                        </label>
                        <input
                            type="text"
                            value={dui}
                            onChange={(e) => {
                                if (e.target.value.length <= 9) {
                                    setDui(e.target.value);
                                }
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingresa tu DUI (9 dígitos)"
                        />
                        {dui.length > 9 && (
                            <p className="text-red-600 text-sm mt-1">
                                Número de DUI inválido. Debe tener exactamente 9 dígitos.
                            </p>
                        )}
                    </div>

                    <button
                        onClick={handleCanjearCupon}
                        disabled={cuponCanjeado || dui.length !== 9}
                        className={`w-full bg-blue-500 text-white py-2 rounded-lg font-semibold ${cuponCanjeado || dui.length !== 9
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-blue-600'
                            }`}
                    >
                        {cuponCanjeado ? 'Cupón Canjeado' : 'Canjear Cupón'}
                    </button>

                    {mensaje && (
                        <p
                            className={`mt-4 text-center ${mensaje.includes('éxito') ? 'text-green-600' : 'text-red-600'
                                }`}
                        >
                            {mensaje}
                        </p>
                    )}
                </div>
            </div>
        </div>
        </>
        
    );
};

export default CuponCanje;