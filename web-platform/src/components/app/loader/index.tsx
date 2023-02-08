import Spinner from 'react-bootstrap/Spinner';
import "./loader.scss";
import { Variant } from 'react-bootstrap/esm/types';

const Loader = (props: LoaderSettings): JSX.Element => {
    const variant = (!props.variant) ? 'dark' : props.variant;
    const size = (!props.size) ? 'sm' : props.size;
    const fullScreen = (!props.fullScreen) ? null : ' fullScreen ';

    return <div className={`ms-auto me-auto loader-container ps-auto pe-auto text-center w-100 ${fullScreen}`}>
        <Spinner variant={variant} animation="grow" className={`spinner-grow-loader ${size}`} />
    </div>
}

interface LoaderSettings {
    variant?: Variant;
    size?: SizeLoader;
    fullScreen?: boolean;
}

type SizeLoader = "sm" | "md" | "lg" | "lgp";

export default Loader;