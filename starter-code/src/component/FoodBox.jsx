import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Figure from "react-bootstrap/Figure";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
export default class FoodBox extends Component {
  render() {
    const foods = this.props.foods;
    return (
      <div>
        {foods.map(food => (
          <Form>
            <Row>
              <Col>
                <Figure>
                  <Figure.Image
                    width={64}
                    height={64}
                    alt="64x64"
                    src={food.image}
                  />
                </Figure>
              </Col>
              <Col>
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories} cal</small>
                </p>
              </Col>
              <Col>
                <input type="number" value="1" />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  +
                </Button>
              </Col>
            </Row>
          </Form>
        ))}
      </div>
    );
  }
}
