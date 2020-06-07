/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Checkbox from '../../atoms/Checkbox/Checkbox';

const Wraper = styled.div``;

const CardQuiz = ({ label, checked, onChange }) => {
  return (
    <Wraper>
      <label>
        <Checkbox checked={checked} onChange={onChange} />
        <span style={{ marginLeft: 8 }}>{label}</span>
      </label>
    </Wraper>
  );
};

export default CardQuiz;

CardQuiz.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
