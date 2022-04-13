import { api } from './api';

export async function getUsers<T = unknown>(url: string) {
  let data: T | null = null;
  let isFetching = true;
  let error: Error | null = null;

  await api
    .get(url)
    .then((response) => {
      data = response.data;
    })
    .catch((err) => {
      error = err;
    })
    .finally(() => {
      isFetching = false;
    });

  return { data, isFetching, error };
}

export async function request(values: any) {
  await api.post('/requisitions', {
    ...values,
  });
}

export async function register(values: any) {
  let createFlag = false;

  await api
    .post('/profiles/register', {
      userName: values.name,
      email: values.email,
      bio: values.bio,
      linksListDTO: values.links,
      expertiseList: values.expertise,
      professionList: [
        {
          occupation: values.area,
          description: values.description,
          experienceLevel: values.level,
          startDate: null,
          finalDate: null,
        },
      ],
      academicEducationList: [
        {
          course: null,
          startDate: null,
          finalDate: null,
          institution: null,
        },
      ],
    })
    .then(() => {
      createFlag = true;
    });

  return { createFlag };
}

export async function deleteRequisition(id: number, email: string) {
  let createFlag = false;

  await api
    .delete(`requisitions?idRequisition=${id}&emailRemoveRequest=${email}`)
    .then(() => {
      createFlag = true;
    });

  return { createFlag };
}
