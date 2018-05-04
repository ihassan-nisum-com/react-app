import React, { Component } from "react";

class AddTodoListItem extends Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    //console.log(this.descriptionInput.value)
    this.props.onAdd(this.descriptionInput.value);

    this.descriptionInput.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <span><b>Add an item: </b></span> <input placeholder="Description" ref={descriptionInput => this.descriptionInput = descriptionInput} />
        <button>Add</button>
        <hr />
      </form>
    );
  }
}

export default AddTodoListItem;
