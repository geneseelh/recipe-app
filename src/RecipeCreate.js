import React, { useState } from "react";

function RecipeCreate({handleSubmission, deleteRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    handleSubmission(formData);

    setFormData({
      name: "",
      cuisine: "",
      photo:"",
      ingredients: "",
      preparation: "",
    });
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table className="form-table">
        <tbody>
          <tr>
            <td>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
              />
            </td>
          <td>          
            <input 
              type="text"
              id="cuisine"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleInputChange}
              placeholder="Cuisine"
            />
          </td>
        <td>
          <input 
            type="text"
            id="photo"
            name="photo"
            value={formData.photo}
            onChange={handleInputChange}
            placeholder="URL"
          />
        </td>   
        <td>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange}
            placeholder="Ingredients"
          />
        </td>
        <td>
          <textarea
            id="preparation"
            name="preparation"
            value={formData.preparation}
            onChange={handleInputChange}
            placeholder="Preparation"
          />
        </td>
        <td>
          <button type="submit">Create</button>
        </td>
        </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
