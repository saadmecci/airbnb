import styled from 'styled-components';

const Navbar = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    .airbnb-logo {
        padding: 25px 0px 0px 25px;
    }
    .button-container {
        display: flex;
        padding: 25px 0px 0px 0px;
    }
`

export default Navbar;