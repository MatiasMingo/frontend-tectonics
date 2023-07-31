import axios, { AxiosError } from 'axios';
import { saveAs } from 'file-saver';

// https://safe-fjord-27405-b237b154a713.herokuapp.com/api/
// http://localhost:8000/api/

const backendAPI = axios.create({
  baseURL: 'https://safe-fjord-27405-b237b154a713.herokuapp.com/api/', // Replace with your backend API URL
});

export const login = async (username: string, password: string) => {
  try {
    const response = await backendAPI.post('login/', { username, password });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Login failed');
  }
};

export const logout = async () => {
  try {
    const response = await backendAPI.post('logout/');
    return response.data;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Logout failed');
  }
};

export const check_authentication = async (username: string) => {
  try {
    const encodedUsername = encodeURIComponent(username).replace('%40', '@');
    const response = await backendAPI.get('check_authentication/', { params: { username: encodedUsername } });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Login failed');
  }
};

// Ranking forms requests

export const download_form = async (form_id: number) => {
  try {
    const response = await backendAPI.post('download_form/', { form_id }, { responseType: 'blob' });
    const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const get_form_response = await backendAPI.get('get_form/', { params: { form_id } });
    const filename = `${get_form_response.data.type}-${get_form_response.data.client_first_name}-${get_form_response.data.client_last_name}-${get_form_response.data.client_firm}-${get_form_response.data.date_created}`;
    saveAs(blob, `${filename}.docx`);
    console.log('Document saved and downloaded successfully!');
  } catch (error) {
    // Handle error
  }
};

export const downloadForm = async (form_id: number) => {
  try {
    const response = await backendAPI.post('download_form/', { form_id }, { responseType: 'blob' });
    return response;
  } catch (error) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Download form failed');
  }
};

export const getDocumentUrl = async (form_id: number) => {
  try {
    const response = await backendAPI.get('get_document_url/', { params: { form_id } });
    return response;
  } catch (error) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get uri of form failed');
  }
};

export const upload_form = async (form_id: number | undefined, client_id: number | undefined, form_type: string, formData: FormData) => {
  try {
    formData.append('form_id', String(form_id));
    formData.append('client_id', String(client_id));
    formData.append('form_type', form_type);

    const response = await backendAPI.post('upload_form/', formData, { responseType: 'json' });
    console.log('Document saved and downloaded successfully!');
  } catch (error) {
    // Handle error
    console.error('Error occurred while uploading the form:', error);
    throw error;
  }
};

export const create_chambers_form = async (client_id: number, form_json: string) => {
  try {
    const response = await backendAPI.post('create_chambers_form/', { client_id, form_json });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Create chambers form failed');
  }
};

export const create_legalfivehundred_form = async (client_id: number, form_json: string) => {
  try {
    const response = await backendAPI.post('create_legal_fivehundred_form/', { client_id, form_json });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Create Legal 500 form failed');
  }
};

export const convert_chambers_to_legalfivehundred = async (form_id: number) => {
  try {
    console.log(form_id);
    const response = await backendAPI.post('convert_chambers_to_legalfivehundred_form/', { form_id } );
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Convert from chambers to legal 500 form failed');
  }
};

export const convert_legalfivehundred_to_chambers = async (form_id: number) => {
  try {
    console.log(form_id);
    const response = await backendAPI.post('convert_legalfivehundred_to_chambers_form/', { form_id } );
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Convert from legal 500 to chambers form failed');
  }
};

export const edit_ranking_form = async (form_id: number, client_id: number, form_json: string) => {
  try {
    console.log(form_json);
    const response = await backendAPI.post('edit_ranking_form/', { form_id, client_id, form_json });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Edit ranking form failed');
  }
};

export const get_forms = async () => {
  try {
    const response = await backendAPI.get('get_forms/');
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get forms failed');
  }
};

export const get_form = async (form_id: number) => {
  try {
    const response = await backendAPI.get('get_form/', { params: { form_id } });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get forms failed');
  }
};

export const delete_form = async (formId: number) => {
  try {
    const response = await backendAPI.delete(`forms/${formId}/delete/`);
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Delete form failed');
  }
};

// Clients unique urls

export const create_unique_url = async (client_id: number, form_id: number) => {
  try {
    const response = await backendAPI.post('create_unique_url/', { client_id, form_id });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Create unique url failed');
  }
};

export const validate_client_form_token = async (form_id: number, token: string) => {
  try {
    const response = await backendAPI.post('validate_client_form_token/', { form_id, token });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Validate client form token failed');
  }
};

export const get_unique_urls = async () => {
  try {
    const response = await backendAPI.get('get_unique_urls/');
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get unique urls failed');
  }
};

export const get_unique_url = async (token: string) => {
  try {
    const response = await backendAPI.get('get_unique_url/', { params: { token } });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get unique urls failed');
  }
};


export const delete_unique_url = async (uniqueUrlId: number) => {
  try {
    const response = await backendAPI.delete(`unique_urls/${uniqueUrlId}/delete/`);
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Delete unique url failed');
  }
};


// Clients requests

export const create_client = async (email: string, first_name: string, last_name: string, firm: string) => {
  try {
    const response = await backendAPI.post('create_client/', { email, first_name, last_name, firm });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Create client failed');
  }
};

export const edit_client = async (client_id: number, email: string, first_name: string, last_name: string, firm: string) => {
  try {
    const response = await backendAPI.post('edit_client/', { client_id, email, first_name, last_name, firm });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Create client failed');
  }
};

export const get_clients = async () => {
  try {
    const response = await backendAPI.get('get_clients/');
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get clients failed');
  }
};

export const get_client = async (client_id: number) => {
  try {
    const response = await backendAPI.get('get_client/', { params: { client_id } });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get clients failed');
  }
};

export const delete_client = async (clientId: number) => {
  try {
    const response = await backendAPI.delete(`clients/${clientId}/delete/`);
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Delete client failed');
  }
};

export default backendAPI;
