import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function FilteredList() {

    const productList = this.props.list;
    this.state = {
        size: "All"
    };

    const onSelectFilterSize = () => {
    }

    const matchesFilterSize = () => {
    }

    return (
        // <div>
        //     <Nav 
        //         activeKey="/home"
        //         onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        //         <Nav.Item>
        //             <Nav.Link eventKey="All" onSelect={this.onSelectFilterSize}>All</Nav.Link>
        //         </Nav.Item>
        //     </Nav>

        // </div>
        <div>
            <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
            </Nav>
        </div>
        
    );
}

export default FilteredList;