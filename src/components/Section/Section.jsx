import PropTypes from 'prop-types';
import { Sections, SectionsHeader } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <Sections>
      <SectionsHeader>{title}</SectionsHeader>
      {children}
    </Sections>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
