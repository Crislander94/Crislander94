import styled from "styled-components";

const Footer = () => {

    return(
        <Containerfooter><p>Copyright&copy; Cristhian Baidal 2023</p></Containerfooter>
    );
}

const Containerfooter = styled.footer`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    padding: 40px;
    p{color:white;font-style:bold;font-size:18px;}
`;

export default Footer;