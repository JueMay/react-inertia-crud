import { useForm } from "@inertiajs/react";
import React from "react";

export default function Create() {

    const {data,setData,post}=useForm({
        name:"",
        description:""
    });

    const createHandler=(event)=>{
        event.preventDefault();
        post("/test/store",data);
    }
    console.log(data);
    return (

        <div className="container">
            <h1>Create Form</h1>

            <div className="row">
                <form onSubmit={createHandler}>
                    <div className="col-4">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            placeholder="Enter Test name"
                            onChange={(e)=>setData('name',e.target.value)}
                        />
                    </div>
                    <div className="col-4">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input
                            type="text"
                            name="description"
                            id="description"
                            className="form-control"
                            placeholder="Enter Test description"
                            onChange={(e)=>setData('description',e.target.value)}
                        />
                    </div>

                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
}

// import { useForm } from "@inertiajs/react";
// import React, { useState } from "react"; // Import useState for form validation (optional)

// export default function Create() {
//   const { data, setData, submit, post, errors } = useForm({
//     name: "",
//     description: "",
//   });

//   const [validationErrors, setValidationErrors] = useState({}); // Optional state for displaying validation errors

//   const createHandler = async (event) => {
//     event.preventDefault(); // Prevent default form submission behavior

//     try {
//       await post("test/store", data); // Use post method from Inertia
//     } catch (error) {
//       if (error.response && error.response.data.errors) {
//         setValidationErrors(error.response.data.errors); // Set validation errors (optional)
//       } else {
//         console.error("An unexpected error occurred:", error);
//       }
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Create Form</h1>

//       <div className="row">
//         <form onSubmit={createHandler}>
//           <div className="col-4">
//             <label htmlFor="name" className="form-label">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               className="form-control"
//               placeholder="Enter Test name"
//               value={data.name} // Set value from form data
//               onChange={(e) => setData("name", e.target.value)}
//             />
//             {validationErrors.name && ( // Display validation errors if present (optional)
//               <div className="invalid-feedback">
//                 {validationErrors.name[0]}
//               </div>
//             )}
//           </div>
//           <div className="col-4">
//             <label htmlFor="description" className="form-label">
//               Description
//             </label>
//             <input
//               type="text"
//               name="description"
//               id="description"
//               className="form-control"
//               placeholder="Enter Test description"
//               value={data.description} // Set value from form data
//               onChange={(e) => setData("description", e.target.value)}
//             />
//             {validationErrors.description && ( // Display validation errors if present (optional)
//               <div className="invalid-feedback">
//                 {validationErrors.description[0]}
//               </div>
//             )}
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Create
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
