type Props = {
  name: string,
  email: string,
  area: string,
  level: string,
  expertise: any,
  cargo: string,
}

export function CreateAccount({name, email, area, level, expertise, cargo} : Props) {
  const submit = {
    'userName': name,
    'email': email,
    'bio': null,
    'linksListDTO': [
      {
        'domain': null,
        'link': null,
      },
    ],
    'expertiseList': expertise,
    'professionList': [
      {
        'occupation': area,
        'description': cargo,
        'experienceLevel': level,
        'startDate': null,
        'finalDate': null,
      },
    ],
    'academicEducationList': [
      {
        'course': null,
        'startDate': null,
        'finalDate': null,
        'institution': null,
      },
    ],
  };

  return submit;
}