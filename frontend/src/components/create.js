import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./create.css"
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   level: "",
   price: 0.0
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", position: "", level: "", price: 0.0 });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Adding new tool</h3>
     <form onSubmit={onSubmit}>
     <div className="form-group">
         <label htmlFor="price">Price</label>
         <input
           type="numeric"
           className="form-control"
           id="price"
           value={form.price}
           onChange={(e) => updateForm({ price: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="name">Tool Type</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Brand</label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group4">
          <div className="form-check form-check-inline">
              <div className="try">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="positionOptions"
                    id="positionA/C Electric"
                    value="A/C Electric"
                    checked={form.level === "A/C Electric"}
                    onChange={(e) => updateForm({ level: e.target.value })}
                  />
                  <label htmlFor="positionA/C Electric" className="form-check-label">A/C Electric</label>
              </div>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="positionOptions"
                id="positionD/C 14v 18v 24v 40v"
                value="D/C 14v 18v 24v 40v"
                checked={form.level === "D/C 14v 18v 24v 40v"}
                onChange={(e) => updateForm({ level: e.target.value })}
              />
              <label htmlFor="positionD/C 14v 18v 24v 40v" className="form-check-label">D/C 14v 18v 24v 40v</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="positionOptions"
                id="positionManual"
                value="Manual"
                checked={form.level === "Manual"}
                onChange={(e) => updateForm({ level: e.target.value })}
              />
              <label htmlFor="positionManual" className="form-check-label">Manual</label>
            </div>
       </div>
       <div className="form-group5">
         <input
           type="submit"
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}