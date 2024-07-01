/*
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Imports                                                                ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫*/
import {} from "react";
import styled from "styled-components";
/*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛*/
/*
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Interfaces                                                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫*/
interface GenericCompProps {}
/*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛*/

const pal_bloodSteeped = {
	dark: "#17152e",
	midDark: "#3c566c",
	mid: "#84aea4",
	light: "#d4e2cc",
	accent: "#e43254",
};

const pal_dullAquatic = {
	c00: "#372f3a",
	c01: "#464459",
	c02: "#545e72",
	c03: "#5d7680",
	c04: "#6a9395",
	c05: "#7bad9f",
	c06: "#8eb29a",
	c07: "#b3c6b4",
	c08: "#c5d2ce",
	cff: "#d3d8d9",
};

export const MainBody = styled.div`
	background-color: ${pal_dullAquatic.c00};
	/* background-color: aliceblue; */
	color: ${pal_dullAquatic.c08};
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */
	/* padding: 12px; */
	/* border: 2px solid ${pal_bloodSteeped.midDark}; */
	background-image: linear-gradient(
			${pal_dullAquatic.c01 + 75} 2px,
			transparent 2px
		),
		linear-gradient(90deg, ${pal_dullAquatic.c01 + 75} 2px, transparent 2px),
		linear-gradient(${pal_dullAquatic.c01 + 50} 1px, transparent 1px),
		linear-gradient(90deg, ${pal_dullAquatic.c01 + 50} 1px, transparent 1px);
	background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
	background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
`;

export const Body = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const Window = styled.div`
	height: 100%;
	width: 75%;
	background-color: ${pal_dullAquatic.c00};
	border: solid 2px ${pal_dullAquatic.c07};
`;

export const Titlebar = styled.div`
	height: 30px;
	width: 100%;
	background-color: ${pal_dullAquatic.c07};
	color: ${pal_dullAquatic.c00};
	display: flex;
	/* justify-content: center; */
	align-items: flex-end;
`;

export const Tab = styled.div<{
	$active: boolean;
}>`
	background-color: ${(props) =>
		props.$active ? pal_dullAquatic.c00 : pal_dullAquatic.c02};
	color: ${pal_dullAquatic.cff};
	display: flex;
	justify-content: center;
	align-items: center;
	height: 28px;
	padding-left: 16px;
	padding-right: 16px;
	/* margin-right: 4px; */
	margin-left: 4px;
	border-radius: 4px 4px 0px 0px;
`;

export const Content = styled.div`
	/* background-color: ${pal_dullAquatic.cff}; */
	color: ${pal_dullAquatic.cff};
	display: flex;
	padding: 12px;
	padding-left: 20px;
	/* justify-content: center; */
	/* align-items: center; */
	height: 100%;
	width: 100%;
`;

/*
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Component                                                              ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫*/
export default function GenericComp(_props: GenericCompProps) {
	return <div>GenericComp</div>;
}
/*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛*/
