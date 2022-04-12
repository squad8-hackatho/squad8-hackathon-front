type Props = {
  skillsList: any;
  dataOutside: any;
};

export function setSelectedSkillToPost({
  skillsList,
  dataOutside,
}: Props) {
  const skillsToPost: any = [];
  dataOutside.forEach((skill: any) => {
    if (skillsList.includes(skill.skill)) {
      skillsToPost.push(skill);
    }
  });

  return skillsToPost;
}
