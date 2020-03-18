import styled from 'styled-components';

const InputCalendarModal = styled.div`
    display: ${props => props.display === "block" ? "block":"none"};
    position: absolute;
    height: 266px;
    width: 277px;
    border-radius: 10px;
    box-shadow: rgba(26, 26, 29, 0.3) 0px 15px 46px -10px;
`
export default InputCalendarModal;