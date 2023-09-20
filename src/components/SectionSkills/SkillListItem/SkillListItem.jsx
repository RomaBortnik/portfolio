import SvgIcon from 'components/SvgIcon';
import { SkillItem } from './SkillListItem.styled';

const SkillListItem = ({ skill, onClick }) => {
  const { name, description, icon } = skill;
  return (
    <SkillItem title={name} onClick={() => onClick(description)}>
      <SvgIcon w={56} h={56} use={icon} />
    </SkillItem>
  );
};

export default SkillListItem;
