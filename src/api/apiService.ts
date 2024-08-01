import axios from 'axios';
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/data';
import { UserMainData, UserActivity, UserAverageSessions, UserPerformance } from '../types';

const isMocked = import.meta.env.IS_MOCKED_DATA === true;

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

/**
 * 
 * @returns 
 */
export const fetchUserMainData = async (): Promise<UserMainData[]> => {
  if (isMocked) {
    return USER_MAIN_DATA;
  }
  const response = await apiClient.get('/userMainData');
  return response.data;
};

/**
 * 
 * @returns 
 */
export const fetchUserActivity = async (): Promise<UserActivity[]> => {
  if (isMocked) {
    return USER_ACTIVITY;
  }
  const response = await apiClient.get('/userActivity');
  return response.data;
};

/**
 * 
 * @returns 
 */
export const fetchUserAverageSessions = async (): Promise<UserAverageSessions[]> => {
  if (isMocked) {
    return USER_AVERAGE_SESSIONS;
  }
  const response = await apiClient.get('/userAverageSessions');
  return response.data;
};

/**
 * 
 * @returns 
 */
export const fetchUserPerformance = async (): Promise<UserPerformance[]> => {
  if (isMocked) {
    return USER_PERFORMANCE;
  }
  const response = await apiClient.get('/userPerformance');
  return response.data;
};