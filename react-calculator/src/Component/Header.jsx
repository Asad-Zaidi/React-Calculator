import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function TabsExample() {
    return (
        <Nav className="justify-content-center myNav" variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="link-1">Calculator</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="disabled">
                    Qoute
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default TabsExample;