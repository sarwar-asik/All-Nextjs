import React from 'react';
import { useForm } from 'react-hook-form';

const CreateNews= () => {

   const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
  }
    const formGroupStyles = {
        marginBottom: '20px',
      };
    
      const labelStyles = {
        fontWeight: 'bold',
      };
    
      const inputStyles = {
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
      };
    
      const buttonStyles = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop:"20px"
      };
    
      const ErrorStyles = {
        color:"red",
        fontWeight:'500',
        fontSize:"12px",
        fontFamily:"mono"
      };
  const { handleSubmit, register,reset, formState: { errors } } = useForm();

  const onSubmit =async (data) => {

    // console.log(data);
    try {
       
      fetch('http://localhost:3000/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(res=>res.json())
      .then(datas =>{
        console.log('News data submitted successfully!',datas);
          reset()
      })

  
      
      } catch (error) {
        console.error('Error occurred while submitting News:', error);
        
      }

    
  };

  return (
    <form
     onSubmit={handleSubmit(onSubmit)}
     style={formStyle}
      
     >
      <div style={formGroupStyles}>
        <label style={labelStyles} htmlFor="title">Title:</label>
        <input style={inputStyles}
          type="text"
          id="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span style={ErrorStyles}>This field is required</span>}
      </div>

      <div>
        <label style={labelStyles} htmlFor="description">Description:</label>
        <textarea
        style={inputStyles}
          id="description"
          {...register("description", { required: true })}
        />
        {errors.description && <span style={ErrorStyles}>This field is required</span>}
      </div>

      <div>
        <label style={labelStyles} htmlFor="author">Author:</label>
        <input style={inputStyles}
          type="text"
          id="author"
          {...register("author", { required: true })}
        />
        {errors.author && <span style={ErrorStyles}>This field is required</span>}
      </div>

      <div>
        <label style={labelStyles} htmlFor="release_date">Release Date:</label>
        <input style={inputStyles}
          type="date"
          id="release_date"
          {...register("release_date", { required: true })}
        />
        {errors.release_date && <span style={ErrorStyles}>This field is required</span>}
      </div>

      <div>
        <label style={labelStyles} htmlFor="category">Category:</label>
        <input style={inputStyles}
          type="text"
          id="category"
          {...register("category", { required: true })}
        />
        {errors.category && <span style={ErrorStyles}>This field is required</span>}
      </div>

      <div>
        <label style={labelStyles} htmlFor="comment_count">Comment Count:</label>
        <input style={inputStyles}
          type="number"
          id="comment_count"
          {...register("comment_count", { required: true })}
        />
        {errors.comment_count && <span style={ErrorStyles}>This field is required</span>}
      </div>

      <div>
        <label style={labelStyles} htmlFor="image_url">Image URL:</label>
        <input style={inputStyles}
          type="text"
          id="image_url"
          {...register("image_url", { required: true })}
        />
        {errors.image_url && <span style={ErrorStyles}>This field is required</span>}
      </div>

      <div>
        <button type="submit" style={buttonStyles} >Submit</button>
      </div>
    </form>
  );
};

export default CreateNews;
