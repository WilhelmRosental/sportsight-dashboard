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
  // On transforme les jours en index
  const transformDaysToIndex = (sessions: UserActivity['sessions']): UserActivity['sessions'] => {
    return sessions.map((session, index) => ({
      ...session,
      day: (index + 1).toString(),
    }));
  };

  if (isMocked) {
    const userActivity = USER_ACTIVITY.find(activity => activity.userId === userId);
    if (!userActivity) throw new Error('User activity not found');

    userActivity.sessions = transformDaysToIndex(userActivity.sessions);
    return userActivity;
  }

  const response = await apiClient.get<{ data: UserActivity }>(`user/${userId}/activity`);

  if (!response.data || !response.data.data) {
    throw new Error('Invalid API response');
  }

  // On formatte les jours
  const sessions = transformDaysToIndex(response.data.data.sessions);

  return {
    userId: response.data.data.userId,
    sessions,
  };
};

/**
 * Fetches the user performance data.
 * @param userId - The ID of the user.
 * @returns The user performance data.
 */
export const fetchUserPerformance = async (userId: number): Promise<UserPerformance> => {
  const sort = (name?: string): string => {
    if (typeof name !== 'string' || !name) {
      console.error('Name is undefined or not a string:', name);
      return 'Inconnu'; // Retournez une valeur par défaut, comme 'Inconnu', si name est undefined
    }

    switch (name) {
      case "cardio":
        return "Cardio";
      case "energy":
        return "Energie";
      case "endurance":
        return "Endurance";
      case "strength":
        return "Force";
      case "speed":
        return "Vitesse";
      case "intensity":
        return "Intensité";
      default:
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
  };

  if (isMocked) {
    const userPerformance = USER_PERFORMANCE.find(performance => performance.userId === userId);
    if (!userPerformance) throw new Error('User performance not found');

    // On applique le formattage
    userPerformance.data.forEach((item) => {
      const kindName = userPerformance.kind[item.kind as keyof typeof userPerformance.kind];
      item.kind = sort(kindName);
    });

    return userPerformance;
  }

  // Requête avec axios
  const response = await apiClient.get<{ data: UserPerformance }>(`user/${userId}/performance`);

  if (!response.data || !response.data.data) {
    throw new Error('Invalid API response');
  }

  // On applique le formattage
  const userPerformance = response.data.data;
  userPerformance.data.forEach((item) => {
    const kindKey = item.kind as keyof typeof userPerformance.kind;
    item.kind = sort(userPerformance.kind[kindKey]);
  });

  return userPerformance;
};


/**
 * Fetches the user average sessions data.
 * @param userId - The ID of the user.
 * @returns The user average sessions data.
 */
export const fetchUserAverageSessions = async (userId: number, nameByDay: boolean = true): Promise<UserAverageSessions> => {
  // Tableau des abréviations des jours de la semaine
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  if (isMocked) {
    const userAverageSessions = USER_AVERAGE_SESSIONS.find(sessions => sessions.userId === userId);
    if (!userAverageSessions) throw new Error('User average sessions not found');

    // Si nameByDay est vrai, transforme les jours en lettres
    if (nameByDay) {
      userAverageSessions.sessions = userAverageSessions.sessions.map((session, index) => ({
        ...session,
        day: days[index % 7], // Convertit l'index du tableau en lettre correspondante
      }));
    }

    return userAverageSessions;
  }

  // Requête axios
  const response = await apiClient.get<{ data: UserAverageSessions }>(`user/${userId}/average-sessions`);

  if (!response.data || !response.data.data) {
    throw new Error('Invalid API response');
  }

  // On formatte
  let sessions = response.data.data.sessions;
  if (nameByDay) {
    sessions = sessions.map((session, index) => ({
      ...session,
      day: days[index % 7], // Convertit l'index du tableau en lettre correspondante
    }));
  }

  return {
    userId: response.data.data.userId,
    sessions,
  };
};
