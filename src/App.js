import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    dogs: [],
    newDog: "",
    selectedDog: "",
    updatedDogName: ""
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:4000/dogs");

    this.setState({ dogs: response.data });
  }

  handleSubmit = async e => {
    e.preventDefault();

    const response = await axios.post("http://localhost:4000/dogs", {
      name: this.state.newDog
    });

    this.setState({
      dogs: [...this.state.dogs, response.data],
      newDog: ""
    });
  };

  handleDelete = async id => {
    const url = "http://localhost:4000/dogs/" + id;
    const filteredDogs = this.state.dogs.filter(dog => dog.id !== id);

    const response = await axios.delete(url);

    this.setState({
      dogs: filteredDogs
    });
  };

  handleUpdateDogName = async e => {
    e.preventDefault()
    const url = "http://localhost:4000/dogs/" + this.state.selectedDog;

    const response = await axios.patch(url, {
      name: this.state.updatedDogName
    });

    const indexToUpdate = this.state.dogs.findIndex(dog => Number(dog.id) === Number(this.state.selectedDog))
    const updatedDogs = [
      ...this.state.dogs.slice(0, indexToUpdate),
      response.data,
      ...this.state.dogs.slice(indexToUpdate + 1)
    ]


    this.setState({ dogs: updatedDogs, updatedDogName: "" })
  };

  render() {
    return (
      <div>
        <h1>Welcome to Puppers App</h1>
        <ul>
          {this.state.dogs.map(dog => (
            <li key={dog.id}>
              {dog.name}{" "}
              <button onClick={() => this.handleDelete(dog.id)}>kill 🔪</button>
            </li>
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newDog}
            onChange={e => this.setState({ newDog: e.target.value })}
          />
        </form>

        <hr />
        <h2>updating a pupp</h2>
        <select
          onChange={e => this.setState({ selectedDog: e.target.value })}
          value={this.state.selectedDog}
        >
          {this.state.dogs.map(dog => (
            <option key={dog.id} value={dog.id}>
              {dog.name}
            </option>
          ))}
        </select>

        <form onSubmit={this.handleUpdateDogName}>
          <input
            value={this.state.updatedDogName}
            onChange={e => this.setState({ updatedDogName: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default App;
