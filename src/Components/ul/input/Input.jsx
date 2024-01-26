import "./Input.css";
import styled from "styled-components";

const StyInput = styled.input`
	width: 250px;
	height: 30px;
	border-radius: 20px;
	border: none;
	margin: 15px;
	transition: 1s;

	&:hover {
		transition: 1s;
		background: red;
		color: aliceblue;
		box-shadow: 1px 1px 20px 7px red;
	}
`;

export const Input = ({ type, style, value, placeholder }) => {
	return (
		<StyInput
			className={style}
			type={type}
			ref={value}
			placeholder={placeholder}
		/>
	);
};
