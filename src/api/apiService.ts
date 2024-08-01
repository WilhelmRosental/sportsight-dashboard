import axios from 'axios';
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/data';
import { UserMainData, UserActivity, UserAverageSessions, UserPerformance } from '../types';

const isDevelopment = import.meta.env.MODE === 'development';

const apiClient = axios.create({
  baseURL: import.meta.env.API_BASE_URL,
});

export const fetchUserMainData = async (): Promise<UserMainData[]> => {
  if (isDevelopment) {
    return USER_MAIN_DATA;
  }
  const response = await apiClient.get('/userMainData');
  return response.data;
};

export const fetchUserActivity = async (): Promise<UserActivity[]> => {
  if (isDevelopment) {
    return USER_ACTIVITY;
  }
  const response = await apiClient.get('/userActivity');
  return response.data;
};

export const fetchUserAverageSessions = async (): Promise<UserAverageSessions[]> => {
  if (isDevelopment) {
    return USER_AVERAGE_SESSIONS;
  }
  const response = await apiClient.get('/userAverageSessions');
  return response.data;
};

export const fetchUserPerformance = async (): Promise<UserPerformance[]> => {
  if (isDevelopment) {
    return USER_PERFORMANCE;
  }
  const response = await apiClient.get('/userPerformance');
  return response.data;
};