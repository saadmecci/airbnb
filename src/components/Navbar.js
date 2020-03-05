import styled from 'styled-components';

const Navbar = styled.div`
    height: 50px;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    .airbnb-logo {
        padding: 25px 0px 0px 25px;
    }
    .button-container {
        display: flex;
        padding: 25px 0px 0px 0px;
    }
`

export default Navbar;