import React from 'react';
import scss from './LinkSeeTransparent.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const LinkSeeTransparent = ({ slug }) => {
  return (
    <>
      <Link className={scss.linkSee} to={`/product/${slug}`}>
        See Product
      </Link>
    </>
  );
};

LinkSeeTransparent.propTypes = {
  slug: PropTypes.string.isRequired,
};
