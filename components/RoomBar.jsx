import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"
class RoomBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      filter: "Filters",
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.getRooms = this.getRooms.bind(this);
    this.postRooms = this.postRooms.bind(this);
  }
  handleFilterChange = (filterName) => {
    this.setState({ filter: filterName });
  };
  getRooms = () =>
  {

  }
  postRooms = () =>
  {

  }
  render() {
    return (
      <div>
        <div className="hidden">
            <h1>Create Room</h1>
        </div>
        <Nav
        as="ul"
        className="container-fluid roomBarTop"
      >
        <Nav.Item as="li">
         <Nav.Link>
           Refresh&nbsp;<i class="fas fa-sync-alt"></i>
         </Nav.Link>
       </Nav.Item>
       <Nav.Item as="li">
         <Nav.Link>
           Create Room&nbsp;<i class="fas fa-plus"></i>
         </Nav.Link>
       </Nav.Item>
        <Nav.Item as="li">
          <NavDropdown title={this.state.filter} id="basic-nav-dropdown">
            <NavDropdown.Item
              id="alphaFilter"
              onClick={() => this.handleFilterChange("Alphabetical")}
            >
              Alphabetical{" "}
            </NavDropdown.Item>
            <NavDropdown.Item id="parFilter"onClick={() => this.handleFilterChange("Participants")}>
              Participants
            </NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item as="li">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" />
          </InputGroup>
        </Nav.Item>
      </Nav>
      </div>
      
    );
  }
}
export default RoomBar;
