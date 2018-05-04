import React, { Component } from "react";

class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    };

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onDelete() {
    const { onDelete, id } = this.props;
    //console.log(id);
    onDelete(id);
  }

  onEdit() {
    this.setState({ isEdit: true });
  }

  onEditSubmit(event) {
    event.preventDefault();

    this.props.onEditSubmit(this.props.id, this.descriptionInput.value);

    this.setState({isEdit:false});
  }

  render() {
    const { id, description } = this.props;
    return (
      <div key={id}>
        {this.state.isEdit ? (
          <form onSubmit={this.onEditSubmit}>
            <input
              placeholder="Description"
              ref={descriptionInput => (this.descriptionInput = descriptionInput)} 
              defaultValue={description}
            />
            <button>Add</button>
          </form>
        ) : (
          <div>
            <span><b>{description}</b></span>
            {` | `}
            <button onClick={this.onEdit}>Edit</button>
            {` | `}
            <button onClick={this.onDelete}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}

export default TodoListItem;
