import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import DataStore from "../stores/HomeDataStore";
import Header from "./Header";

export default function Home() {
    return (
        <Container style={{ marginTop: "4em", marginBottom: "3em" }}>
            <Row>
                <Col xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
                    <Header/>
                    {
                        DataStore.map((experience, key) => {
                            return <Card key={ key } experience={ experience }/>
                        })
                    }
                </Col>
            </Row>
        </Container>
    );
}
