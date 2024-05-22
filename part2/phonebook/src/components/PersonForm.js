


const PersonForm =({onSubmit, newName, handleNameChange}) => {

    return (
        <form onSubmit ={onSubmit}>
        <div>
          name: <input value = {newName} onChange={handleNameChange} />
        </div>
        {/* <div>debug: {newPerson}</div> */}
        <div>
          <button type="submit">add</button>
        </div>
      </form>


    )

}

export default PersonForm