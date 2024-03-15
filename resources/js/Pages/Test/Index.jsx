import { Link } from "@inertiajs/react";
import React, { useState } from "react";

export default function Index({ tests }) {
    const [data, setData] = useState(tests);
    const [selectedIds, setSelectedIds] = useState([]); // New state to store selected test IDs

    const handleClick = (id) => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
    };
    const handleCheckboxChange = (event) => {
        const testId = event.target.value; // Get the test ID from the checkbox value
        const isChecked = event.target.checked; // Check if the checkbox is checked or unchecked

        if (isChecked) {
            setSelectedIds((prevSelectedIds) => [...prevSelectedIds, testId]); // Add the test ID to selectedIds
        } else {
            setSelectedIds((prevSelectedIds) =>
                prevSelectedIds.filter((id) => id !== testId)
            ); // Remove the test ID from selectedIds if unchecked
        }
    };
    console.log(selectedIds);
    return (
        <div>
            <Link href="/test/create" className="btn btn-info">
                Create Form
            </Link>
            <Link href="/test/delete" method="delete" as="button" data={{Ids:selectedIds  }}>
                Delete All
            </Link>

            <ul>These are test data </ul>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((test) => {
                        return (
                            <tr key={test.id}>
                                <th scope="row">
                                    {" "}
                                    <input
                                        type="checkbox"
                                        value={test.id} // Set value for checkbox
                                        onChange={handleCheckboxChange}
                                        name=""
                                        id=""
                                    />{" "}
                                    {test.id}
                                </th>
                                <td>{test.name}</td>
                                <td>{test.description}</td>
                                <td>
                                    <div className="d-flex">
                                        <Link
                                            href={`test/edit/${test.id}`}
                                            className="btn btn-info"
                                        >
                                            Edit Form
                                        </Link>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => {
                                                handleClick(test.id);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            // <div key={test.id} className="">
                            //     <li>{test.name}</li>
                            // <button
                            //     onClick={() => {
                            //         handleClick(test.id);
                            //     }}
                            // >
                            //     Delete
                            // </button>
                            // <Link
                            //     href={`test/edit/${test.id}`}
                            //     className="btn btn-info"
                            // >
                            //     Edit Form
                            // </Link>
                            // </div>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
