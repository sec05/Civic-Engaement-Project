import Router from "next/router"
import Nav from "react-bootstrap/Nav";
import React from "react";



class RoomBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      filter: "Filters",
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
   
  }
  handleFilterChange = (filterName) => {
    this.setState({ filter: filterName });
    
  };
 

  render() {
    return (
      <div>
        
        <Nav
        as="ul"
        className="container-fluid roomBarTop"
      >
        <Nav.Item as="li" onClick={this.props.refresh} className="roomBarLink">
           <h3>Refresh&nbsp;<i class="fas fa-sync-alt"></i></h3>
       </Nav.Item>
       <Nav.Item as="li" onClick={()=>Router.push("/rooms/creator")} className="roomBarLink">
            <h3>Create&nbsp;<i class="fas fa-plus"></i></h3> 
       </Nav.Item>
       {/* <Nav.Item as="li">
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
    </Nav.Item>*/}
      </Nav>
      </div>
      
    );
  }
}
export default RoomBar;
