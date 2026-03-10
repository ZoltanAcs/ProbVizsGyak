import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import type { Pizza } from "../type/Pizza";
import apiClient from "../api/apiClient";
import baseURL from "../api/apiClient";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AllPizza = () => {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);
  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]"),
  );

  const navigate = useNavigate();

  useEffect(() => {
    apiClient
      .get("/pizza")
      .then((res) => setPizzak(res.data))
      .catch(() => toast.error("Sikertelen lekérés"));
  });

  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  const genrateCard = (p: Pizza) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${baseURL}/kepek/${p.imageUrl}`} />
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>{p.leiras}</Card.Text>
            <Button
              onClick={() => navigate(`/pizza/${p.id}`)}
              variant="primary"
            >
              Megtekintés
            </Button>
            <Button
              onClick={() => {
                setKosar([...kosar, Number(p.id)]);
                toast.success("Sikeresen a kosárba tetted a terméket!");
              }}
              variant="success"
            >
              Kosárba
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container>
      <Row xs={"auto"} md={"auto"} className="g-4">
        {pizzak.map((i) => genrateCard(i))}
      </Row>
    </Container>
  );
};

export default AllPizza;
