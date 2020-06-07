/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import CheckboxWithLabel from '../../molecules/CheckboxWithLabel/CheckboxWithLabel';

const CheckboxSingleSelect = ({ questions, selectedItem, onChange, question }) => {
  // let [selectedItem, selectItem] = useState('');

  return (
    <>
      {questions.answers.map((answer) => (
        <CheckboxWithLabel
          key={answer}
          checked={selectedItem === answer}
          onChange={onChange.bind({ answer, question })}
          label={answer}
        />
      ))}
    </>
  );

  // function __handleCheckboxChange() {
  //   selectItem((prev) => (prev === this ? '' : this));
  // }
};

export default CheckboxSingleSelect;

CheckboxSingleSelect.prototype = {
  questions: PropTypes.shape({answers: PropTypes.array}),
  selectedItem: PropTypes.string,
  onChange: PropTypes.func,
  question: PropTypes.number,
};
