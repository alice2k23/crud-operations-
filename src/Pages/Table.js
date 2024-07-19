import React from 'react';
// import './Table.css'; // Import your CSS file for styling

const Table = ({ data }) => {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                        <th>Header 3</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.field1}</td>
                            <td>{item.field2}</td>
                            <td>{item.field3}</td>
                            {/* Render other fields accordingly */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
