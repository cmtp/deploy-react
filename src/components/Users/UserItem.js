import React from 'react';
import { object } from 'prop-types';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

import './UserItem.css';

const UserItem = ({ user }) => (
  <div className="UserItem col-lg-4 col-md-6 col-xs-12">
    <Card>
      <CardImg top width="100%" src="https://picsum.photos/200/150" alt="Card image cap" />
      <CardBody>
        <CardTitle>{user.name}</CardTitle>
        <CardSubtitle>{user.email}</CardSubtitle>
      </CardBody>
    </Card>
  </div>
);

UserItem.propTypes = {
  user: object,
};

export default UserItem;
