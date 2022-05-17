import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const PostItem = ({ post }) => {
  const { name, description, mobile } = post;
  return (
    <Card>
      <Card.Header>{name}</Card.Header>
      <ListGroup.Item>{mobile}</ListGroup.Item>
      <ListGroup.Item>{description}</ListGroup.Item>
    </Card>
  );
};

export default PostItem;
