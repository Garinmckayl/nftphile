import Head from "next/head";
import NavBar from "./NavBar";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
};

const Layout = (props) => (
  <div className="Layout" style={layoutStyle}>
    <Head>
      <title>NFTPHILE</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script async src="https://cdn.splitbee.io/sb.js"></script>
    </Head>
    <NavBar />
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
    {/* <NavBar /> */}
  </div>
);

export default Layout;
