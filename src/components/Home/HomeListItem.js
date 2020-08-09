import React from 'react';
import { object } from 'prop-types';

import './HomeListItem.css';
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom';

const HomeListItem = ({ post }) => (
  <div className="HomeListItem">
    <Card>
      <CardImg top width="100%" src="https://picsum.photos/200/150" alt="Card image cap" />
      <CardBody>
        <CardTitle>{post.title}</CardTitle>
        <CardSubtitle>Juan Perez</CardSubtitle>
        <CardText className="description">{post.description}</CardText>
        <Link className="btn btn-primary" to={`/post/${post.id}`}>
          Go to Article
        </Link>
      </CardBody>
    </Card>
  </div>
);

HomeListItem.propTypes = {
  post: object,
};

export default HomeListItem;
