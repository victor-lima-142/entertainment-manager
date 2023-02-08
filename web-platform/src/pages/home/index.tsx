import { Banner, BreadCrumb } from "../../components";
import { breadcrumb } from "../../config/app.structure";

const Home = (props: any): JSX.Element => {
    const { navigate } = props;
    return <>
        <BreadCrumb itens={breadcrumb.home} navigate={navigate} />
        <Banner />
        <h1>Olá mundo</h1>
    </>
}

export default Home;