import "./Button.css";
import styled from "styled-components";

const AddBuuton = styled.button`
	border-radius: 15px;
	width: 100px;
	height: 45px;
	background-color: red;
`;

export const Button = ({ text, style, onClick }) => {
	return (
		<AddBuuton onClick={onClick} className={style}>
			{text}
		</AddBuuton>
	);
};
