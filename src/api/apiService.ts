import axios from 'axios';
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/data';
import { UserMainData, UserActivity, UserAverageSessions, UserPerformance } from '../types';

const isMocked = import.meta.env.VITE_IS_MOCKED_DATAS === "true";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

/**
 * Fetches the main user data.
 * @param userId - The ID of the user.
 * @returns The main user data.
 */
export const fetchUserMainData = async (userId: number): Promise<UserMainData> => {
  if (isMocked) {
    const user = USER_MAIN_DATA.find(user => user.id === userId);
    if (!user) throw new Error('User not found');
    return user;
  }
  const response = await apiClient.get(`user/${userId}`);
  return response.data.data;
};

/**
 * Fetches the user activity data.
 * @param userId - The ID of the user.
 * @returns The user activity data.
 */
export const fetchUserActivity = async (userId: number): Promise<UserActivity> => {
  if (isMocked) {
    const userActivity = USER_ACTIVITY.find(activity => activity.userId === userId);
    if (!userActivity) throw new Error('User activity not found');
    return userActivity;
  }
  const response = await apiClient.get(`user/${userId}/activity`);
  return response.data.data;
};

/**
 * Fetches the user average sessions data.
 * @param userId - The ID of the user.
 * @returns The user average sessions data.
 */
export const fetchUserAverageSessions = async (userId: number): Promise<UserAverageSessions> => {
  if (isMocked) {
    const userAverageSessions = USER_AVERAGE_SESSIONS.find(sessions => sessions.userId === userId);
    if (!userAverageSessions) throw new Error('User average sessions not found');
    return userAverageSessions;
  }
  const response = await apiClient.get(`user/${userId}/average-sessions`);
  return response.data.data;
};

/**
 * Fetches the user performance data.
 * @param userId - The ID of the user.
 * @returns The user performance data.
 */
export const fetchUserPerformance = async (userId: number): Promise<UserPerformance> => {
  if (isMocked) {
    const userPerformance = USER_PERFORMANCE.find(performance => performance.userId === userId);
    if (!userPerformance) throw new Error('User performance not found');
    return userPerformance;
  }
  const response = await apiClient.get(`user/${userId}/performance`);
  return response.data.data;
};