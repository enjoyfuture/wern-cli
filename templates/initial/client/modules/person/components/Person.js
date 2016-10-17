import React, {PropTypes} from 'react';
import bootstrap from '../../../util/bootstrapCss';

const Person = ({children, location, personAction, person}) => {

  return (
    <div className={bootstrap('container', 'm-t-2')}>
      {children && React.cloneElement(children, {
        key: location.pathname,
        personAction,
        person
      })}
    </div>
  );

};

Person.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
  personAction: PropTypes.object,
  person: PropTypes.object
};

export default Person;
