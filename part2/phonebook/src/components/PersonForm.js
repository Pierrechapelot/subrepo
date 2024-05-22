


const PersonForm =({onSubmit, newName,newNumber, handleNameChange, handleNumberChange}) => {

    return (
        <form onSubmit ={onSubmit}>
        <div>
          Name: <input value = {newName} onChange={handleNameChange} />
        </div>
        <div>Number: <input value ={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>


    )

}

export default PersonForm