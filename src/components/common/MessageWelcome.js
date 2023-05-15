import styled from "styled-components";

const MessageWelcome = () => {
    return(
        <ContainerMessage>
            <p>Welcome System's Inventory.</p>
        </ContainerMessage>
    )
}

const ContainerMessage = styled.div`
    height: 80px;
    display: flex;
    padding-top: 20px;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    p{
        font-size: 30px;
    }
`;

export default MessageWelcome;