import { Col, Container, Row } from "react-bootstrap"
import { GenreSlide, SearchTitle } from "../";
import "./filter.scss";

const FilterList = (props: any) => {
    return <Container className="filter-container pt-4 mb-2">
        <Row>
            <Col md={12} lg={12} sm={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                <GenreSlide {...props} />
            </Col>
            {/* <Col md={2} lg={2} sm={12} className="m-0 p-0 text-center align-items-center align-content-center justify-content-center">
                <SearchTitle {...props} />
            </Col> */}
        </Row>
    </Container>
}

export default FilterList;