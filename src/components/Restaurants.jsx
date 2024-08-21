import React, { useState, useEffect } from "react";
function Restaurants() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://realistic-connection-5bc43d9ee8.strapiapp.com/api/restaurants"
                );
                if (!response.ok) {
                    throw new Error("Error fetching data");
                }
                const result = await response.json();
                setData(result.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    if (loading) {
        return <div className="text-xl font-bold mt-10 flex justify-center">Cargando...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <>
            <h1 className="text-xl font-bold mt-10 flex justify-center">Datos</h1>
            <div className="flex justify-center mt-4">
                <table class="table-auto w-1/2 shadow-lg bg-white">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="px-4 py-2">Restaurantes existentes</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((restaurant) => (
                            <tr key={restaurant.id}>
                                <td className="border px-4 py-2">{restaurant.attributes.Name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export { Restaurants };