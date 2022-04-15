import { api } from './api';

export async function getUsers<T = unknown>(
  url: string,
  Authorization: string
) {
  let data: T | null = null;
  let isFetching = true;
  let error: Error | null = null;

  await api
    .get(url, {
      headers: {
        Authorization,
      },
    })
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

export async function login<T = unknown>(values: any) {
  let data: T | null = null;
  let isFetching = true;

  await api
    .post('/user/login/', {
      userName: values.email,
      password: values.password,
    })
    .then((response) => {
      data = response.data;
    })
    .catch(() => {
      isFetching = false;
    });

  return { isFetching, data };
}

export async function request(values: any, Authorization: string) {
  let flag = false;
  await api
    .post(
      '/requisitions',
      {
        ...values,
      },
      {
        headers: {
          Authorization,
        },
      }
    )
    .then(() => {
      flag = true;
    });
  return { flag };
}

export async function register<T = unknown>(values: any) {
  let data: T | null = null;
  let flag = true;

  await api
    .post('/profiles/register', {
      userName: values.name,
      email: values.email,
      bio: values.bio,
      image: values.image,
      password: values.password,
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
    .then((response) => {
      data = response.data;
    })
    .catch(() => {
      flag = false;
    });

  return { data, flag };
}

export async function deleteRequisition(
  id: number,
  email: string,
  Authorization: string
) {
  let createFlag = false;

  await api
    .delete(`requisitions?uuidRequisition=${id}&emailRemoveRequest=${email}`, {
      headers: {
        Authorization,
      },
    })
    .then(() => {
      createFlag = true;
    });

  return { createFlag };
}
