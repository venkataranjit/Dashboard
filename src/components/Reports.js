import React, { useEffect, useState } from 'react';

const Reports = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const resp = await fetch('https://api.sampleapis.com/wines/reds');
            if (!resp.ok) {
                throw new Error('Failed to fetch data');
            }
            const json = await resp.json();
            setData(json);
        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4" style={{ minHeight: "525px" }}>
                <h2>Reports</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm ">
                        <thead className="thead-dark">
                            <tr>
                                <th>#</th>
                                <th>Winery</th>
                                <th>Wine</th>
                                <th>Average Rating</th>
                                <th>Reviews</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.winery}</td>
                                    <td>{item.wine}</td>
                                    <td>{item.rating.average}</td>
                                    <td>{item.rating.reviews}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default Reports;
