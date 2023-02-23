import { Col, Container, Row } from "react-bootstrap"
import { GenreSlide, SearchTitle } from "../";
import "./filter.scss";

const FilterList = (props: any) => {
    return <Container className="filter-container">
        <Row>
            <Col md={9} lg={9} sm={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                <GenreSlide {...props} />
            </Col>
            <Col md={3} lg={3} sm={12}>
                <SearchTitle {...props} />
            </Col>
        </Row>
    </Container>
}

export default FilterList;