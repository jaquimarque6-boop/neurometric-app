import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { Actividad, AssignGoalBody, CreateGoal, CreatePatient, CreatePatientProfessional, CreateProfessional, CreateRegistroClinico, DashboardStats, Goal, GoalLibraryItem, HealthStatus, ListActividadesParams, ListGoalsParams, ListPatientProfessionalsParams, ListRegistrosClinicosParams, Patient, PatientProfessional, Professional, Registro, RegistroClinico, UpdateGoal, UpdatePatient, UpdateRegistroClinico } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all patients
 */
export declare const getListPatientsUrl: () => string;
export declare const listPatients: (options?: RequestInit) => Promise<Patient[]>;
export declare const getListPatientsQueryKey: () => readonly ["/api/patients"];
export declare const getListPatientsQueryOptions: <TData = Awaited<ReturnType<typeof listPatients>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPatients>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listPatients>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListPatientsQueryResult = NonNullable<Awaited<ReturnType<typeof listPatients>>>;
export type ListPatientsQueryError = ErrorType<unknown>;
/**
 * @summary List all patients
 */
export declare function useListPatients<TData = Awaited<ReturnType<typeof listPatients>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPatients>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new patient
 */
export declare const getCreatePatientUrl: () => string;
export declare const createPatient: (createPatient: CreatePatient, options?: RequestInit) => Promise<Patient>;
export declare const getCreatePatientMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createPatient>>, TError, {
        data: BodyType<CreatePatient>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createPatient>>, TError, {
    data: BodyType<CreatePatient>;
}, TContext>;
export type CreatePatientMutationResult = NonNullable<Awaited<ReturnType<typeof createPatient>>>;
export type CreatePatientMutationBody = BodyType<CreatePatient>;
export type CreatePatientMutationError = ErrorType<unknown>;
/**
 * @summary Create a new patient
 */
export declare const useCreatePatient: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createPatient>>, TError, {
        data: BodyType<CreatePatient>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createPatient>>, TError, {
    data: BodyType<CreatePatient>;
}, TContext>;
/**
 * @summary Get patient by ID
 */
export declare const getGetPatientUrl: (id: number) => string;
export declare const getPatient: (id: number, options?: RequestInit) => Promise<Patient>;
export declare const getGetPatientQueryKey: (id: number) => readonly [`/api/patients/${number}`];
export declare const getGetPatientQueryOptions: <TData = Awaited<ReturnType<typeof getPatient>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPatient>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPatient>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPatientQueryResult = NonNullable<Awaited<ReturnType<typeof getPatient>>>;
export type GetPatientQueryError = ErrorType<unknown>;
/**
 * @summary Get patient by ID
 */
export declare function useGetPatient<TData = Awaited<ReturnType<typeof getPatient>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPatient>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update a patient
 */
export declare const getUpdatePatientUrl: (id: number) => string;
export declare const updatePatient: (id: number, updatePatient: UpdatePatient, options?: RequestInit) => Promise<Patient>;
export declare const getUpdatePatientMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updatePatient>>, TError, {
        id: number;
        data: BodyType<UpdatePatient>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updatePatient>>, TError, {
    id: number;
    data: BodyType<UpdatePatient>;
}, TContext>;
export type UpdatePatientMutationResult = NonNullable<Awaited<ReturnType<typeof updatePatient>>>;
export type UpdatePatientMutationBody = BodyType<UpdatePatient>;
export type UpdatePatientMutationError = ErrorType<unknown>;
/**
 * @summary Update a patient
 */
export declare const useUpdatePatient: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updatePatient>>, TError, {
        id: number;
        data: BodyType<UpdatePatient>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updatePatient>>, TError, {
    id: number;
    data: BodyType<UpdatePatient>;
}, TContext>;
/**
 * @summary List all session records
 */
export declare const getListRegistrosUrl: () => string;
export declare const listRegistros: (options?: RequestInit) => Promise<Registro[]>;
export declare const getListRegistrosQueryKey: () => readonly ["/api/registros"];
export declare const getListRegistrosQueryOptions: <TData = Awaited<ReturnType<typeof listRegistros>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listRegistros>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listRegistros>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListRegistrosQueryResult = NonNullable<Awaited<ReturnType<typeof listRegistros>>>;
export type ListRegistrosQueryError = ErrorType<unknown>;
/**
 * @summary List all session records
 */
export declare function useListRegistros<TData = Awaited<ReturnType<typeof listRegistros>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listRegistros>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get session record by ID
 */
export declare const getGetRegistroUrl: (id: number) => string;
export declare const getRegistro: (id: number, options?: RequestInit) => Promise<Registro>;
export declare const getGetRegistroQueryKey: (id: number) => readonly [`/api/registros/${number}`];
export declare const getGetRegistroQueryOptions: <TData = Awaited<ReturnType<typeof getRegistro>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRegistro>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getRegistro>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetRegistroQueryResult = NonNullable<Awaited<ReturnType<typeof getRegistro>>>;
export type GetRegistroQueryError = ErrorType<unknown>;
/**
 * @summary Get session record by ID
 */
export declare function useGetRegistro<TData = Awaited<ReturnType<typeof getRegistro>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRegistro>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all sessions (alias for registros)
 */
export declare const getListSessionsUrl: () => string;
export declare const listSessions: (options?: RequestInit) => Promise<Registro[]>;
export declare const getListSessionsQueryKey: () => readonly ["/api/sessions"];
export declare const getListSessionsQueryOptions: <TData = Awaited<ReturnType<typeof listSessions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listSessions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listSessions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListSessionsQueryResult = NonNullable<Awaited<ReturnType<typeof listSessions>>>;
export type ListSessionsQueryError = ErrorType<unknown>;
/**
 * @summary List all sessions (alias for registros)
 */
export declare function useListSessions<TData = Awaited<ReturnType<typeof listSessions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listSessions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all clinical session records
 */
export declare const getListRegistrosClinicosUrl: (params?: ListRegistrosClinicosParams) => string;
export declare const listRegistrosClinicos: (params?: ListRegistrosClinicosParams, options?: RequestInit) => Promise<RegistroClinico[]>;
export declare const getListRegistrosClinicosQueryKey: (params?: ListRegistrosClinicosParams) => readonly ["/api/registros-clinicos", ...ListRegistrosClinicosParams[]];
export declare const getListRegistrosClinicosQueryOptions: <TData = Awaited<ReturnType<typeof listRegistrosClinicos>>, TError = ErrorType<unknown>>(params?: ListRegistrosClinicosParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listRegistrosClinicos>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listRegistrosClinicos>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListRegistrosClinicosQueryResult = NonNullable<Awaited<ReturnType<typeof listRegistrosClinicos>>>;
export type ListRegistrosClinicosQueryError = ErrorType<unknown>;
/**
 * @summary List all clinical session records
 */
export declare function useListRegistrosClinicos<TData = Awaited<ReturnType<typeof listRegistrosClinicos>>, TError = ErrorType<unknown>>(params?: ListRegistrosClinicosParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listRegistrosClinicos>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a clinical record
 */
export declare const getCreateRegistroClinicoUrl: () => string;
export declare const createRegistroClinico: (createRegistroClinico: CreateRegistroClinico, options?: RequestInit) => Promise<RegistroClinico>;
export declare const getCreateRegistroClinicoMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createRegistroClinico>>, TError, {
        data: BodyType<CreateRegistroClinico>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createRegistroClinico>>, TError, {
    data: BodyType<CreateRegistroClinico>;
}, TContext>;
export type CreateRegistroClinicoMutationResult = NonNullable<Awaited<ReturnType<typeof createRegistroClinico>>>;
export type CreateRegistroClinicoMutationBody = BodyType<CreateRegistroClinico>;
export type CreateRegistroClinicoMutationError = ErrorType<unknown>;
/**
 * @summary Create a clinical record
 */
export declare const useCreateRegistroClinico: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createRegistroClinico>>, TError, {
        data: BodyType<CreateRegistroClinico>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createRegistroClinico>>, TError, {
    data: BodyType<CreateRegistroClinico>;
}, TContext>;
/**
 * @summary Get clinical record by ID
 */
export declare const getGetRegistroClinicoUrl: (id: number) => string;
export declare const getRegistroClinico: (id: number, options?: RequestInit) => Promise<RegistroClinico>;
export declare const getGetRegistroClinicoQueryKey: (id: number) => readonly [`/api/registros-clinicos/${number}`];
export declare const getGetRegistroClinicoQueryOptions: <TData = Awaited<ReturnType<typeof getRegistroClinico>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRegistroClinico>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getRegistroClinico>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetRegistroClinicoQueryResult = NonNullable<Awaited<ReturnType<typeof getRegistroClinico>>>;
export type GetRegistroClinicoQueryError = ErrorType<unknown>;
/**
 * @summary Get clinical record by ID
 */
export declare function useGetRegistroClinico<TData = Awaited<ReturnType<typeof getRegistroClinico>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRegistroClinico>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update a clinical record
 */
export declare const getUpdateRegistroClinicoUrl: (id: number) => string;
export declare const updateRegistroClinico: (id: number, updateRegistroClinico: UpdateRegistroClinico, options?: RequestInit) => Promise<RegistroClinico>;
export declare const getUpdateRegistroClinicoMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateRegistroClinico>>, TError, {
        id: number;
        data: BodyType<UpdateRegistroClinico>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateRegistroClinico>>, TError, {
    id: number;
    data: BodyType<UpdateRegistroClinico>;
}, TContext>;
export type UpdateRegistroClinicoMutationResult = NonNullable<Awaited<ReturnType<typeof updateRegistroClinico>>>;
export type UpdateRegistroClinicoMutationBody = BodyType<UpdateRegistroClinico>;
export type UpdateRegistroClinicoMutationError = ErrorType<unknown>;
/**
 * @summary Update a clinical record
 */
export declare const useUpdateRegistroClinico: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateRegistroClinico>>, TError, {
        id: number;
        data: BodyType<UpdateRegistroClinico>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateRegistroClinico>>, TError, {
    id: number;
    data: BodyType<UpdateRegistroClinico>;
}, TContext>;
/**
 * @summary Delete a clinical record
 */
export declare const getDeleteRegistroClinicoUrl: (id: number) => string;
export declare const deleteRegistroClinico: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteRegistroClinicoMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteRegistroClinico>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteRegistroClinico>>, TError, {
    id: number;
}, TContext>;
export type DeleteRegistroClinicoMutationResult = NonNullable<Awaited<ReturnType<typeof deleteRegistroClinico>>>;
export type DeleteRegistroClinicoMutationError = ErrorType<unknown>;
/**
 * @summary Delete a clinical record
 */
export declare const useDeleteRegistroClinico: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteRegistroClinico>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteRegistroClinico>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary List all therapy goals
 */
export declare const getListGoalsUrl: (params?: ListGoalsParams) => string;
export declare const listGoals: (params?: ListGoalsParams, options?: RequestInit) => Promise<Goal[]>;
export declare const getListGoalsQueryKey: (params?: ListGoalsParams) => readonly ["/api/goals", ...ListGoalsParams[]];
export declare const getListGoalsQueryOptions: <TData = Awaited<ReturnType<typeof listGoals>>, TError = ErrorType<unknown>>(params?: ListGoalsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listGoals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listGoals>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListGoalsQueryResult = NonNullable<Awaited<ReturnType<typeof listGoals>>>;
export type ListGoalsQueryError = ErrorType<unknown>;
/**
 * @summary List all therapy goals
 */
export declare function useListGoals<TData = Awaited<ReturnType<typeof listGoals>>, TError = ErrorType<unknown>>(params?: ListGoalsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listGoals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a therapy goal
 */
export declare const getCreateGoalUrl: () => string;
export declare const createGoal: (createGoal: CreateGoal, options?: RequestInit) => Promise<Goal>;
export declare const getCreateGoalMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createGoal>>, TError, {
        data: BodyType<CreateGoal>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createGoal>>, TError, {
    data: BodyType<CreateGoal>;
}, TContext>;
export type CreateGoalMutationResult = NonNullable<Awaited<ReturnType<typeof createGoal>>>;
export type CreateGoalMutationBody = BodyType<CreateGoal>;
export type CreateGoalMutationError = ErrorType<unknown>;
/**
 * @summary Create a therapy goal
 */
export declare const useCreateGoal: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createGoal>>, TError, {
        data: BodyType<CreateGoal>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createGoal>>, TError, {
    data: BodyType<CreateGoal>;
}, TContext>;
/**
 * @summary Update a goal
 */
export declare const getUpdateGoalUrl: (id: number) => string;
export declare const updateGoal: (id: number, updateGoal: UpdateGoal, options?: RequestInit) => Promise<Goal>;
export declare const getUpdateGoalMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateGoal>>, TError, {
        id: number;
        data: BodyType<UpdateGoal>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateGoal>>, TError, {
    id: number;
    data: BodyType<UpdateGoal>;
}, TContext>;
export type UpdateGoalMutationResult = NonNullable<Awaited<ReturnType<typeof updateGoal>>>;
export type UpdateGoalMutationBody = BodyType<UpdateGoal>;
export type UpdateGoalMutationError = ErrorType<unknown>;
/**
 * @summary Update a goal
 */
export declare const useUpdateGoal: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateGoal>>, TError, {
        id: number;
        data: BodyType<UpdateGoal>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateGoal>>, TError, {
    id: number;
    data: BodyType<UpdateGoal>;
}, TContext>;
/**
 * @summary Delete a goal
 */
export declare const getDeleteGoalUrl: (id: number) => string;
export declare const deleteGoal: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteGoalMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteGoal>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteGoal>>, TError, {
    id: number;
}, TContext>;
export type DeleteGoalMutationResult = NonNullable<Awaited<ReturnType<typeof deleteGoal>>>;
export type DeleteGoalMutationError = ErrorType<unknown>;
/**
 * @summary Delete a goal
 */
export declare const useDeleteGoal: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteGoal>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteGoal>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary List suggested activities
 */
export declare const getListActividadesUrl: (params?: ListActividadesParams) => string;
export declare const listActividades: (params?: ListActividadesParams, options?: RequestInit) => Promise<Actividad[]>;
export declare const getListActividadesQueryKey: (params?: ListActividadesParams) => readonly ["/api/actividades", ...ListActividadesParams[]];
export declare const getListActividadesQueryOptions: <TData = Awaited<ReturnType<typeof listActividades>>, TError = ErrorType<unknown>>(params?: ListActividadesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listActividades>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listActividades>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListActividadesQueryResult = NonNullable<Awaited<ReturnType<typeof listActividades>>>;
export type ListActividadesQueryError = ErrorType<unknown>;
/**
 * @summary List suggested activities
 */
export declare function useListActividades<TData = Awaited<ReturnType<typeof listActividades>>, TError = ErrorType<unknown>>(params?: ListActividadesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listActividades>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List patient-professional assignments
 */
export declare const getListPatientProfessionalsUrl: (params?: ListPatientProfessionalsParams) => string;
export declare const listPatientProfessionals: (params?: ListPatientProfessionalsParams, options?: RequestInit) => Promise<PatientProfessional[]>;
export declare const getListPatientProfessionalsQueryKey: (params?: ListPatientProfessionalsParams) => readonly ["/api/patient-professionals", ...ListPatientProfessionalsParams[]];
export declare const getListPatientProfessionalsQueryOptions: <TData = Awaited<ReturnType<typeof listPatientProfessionals>>, TError = ErrorType<unknown>>(params?: ListPatientProfessionalsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPatientProfessionals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listPatientProfessionals>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListPatientProfessionalsQueryResult = NonNullable<Awaited<ReturnType<typeof listPatientProfessionals>>>;
export type ListPatientProfessionalsQueryError = ErrorType<unknown>;
/**
 * @summary List patient-professional assignments
 */
export declare function useListPatientProfessionals<TData = Awaited<ReturnType<typeof listPatientProfessionals>>, TError = ErrorType<unknown>>(params?: ListPatientProfessionalsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPatientProfessionals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Assign a professional to a patient
 */
export declare const getAssignPatientProfessionalUrl: () => string;
export declare const assignPatientProfessional: (createPatientProfessional: CreatePatientProfessional, options?: RequestInit) => Promise<PatientProfessional>;
export declare const getAssignPatientProfessionalMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof assignPatientProfessional>>, TError, {
        data: BodyType<CreatePatientProfessional>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof assignPatientProfessional>>, TError, {
    data: BodyType<CreatePatientProfessional>;
}, TContext>;
export type AssignPatientProfessionalMutationResult = NonNullable<Awaited<ReturnType<typeof assignPatientProfessional>>>;
export type AssignPatientProfessionalMutationBody = BodyType<CreatePatientProfessional>;
export type AssignPatientProfessionalMutationError = ErrorType<unknown>;
/**
 * @summary Assign a professional to a patient
 */
export declare const useAssignPatientProfessional: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof assignPatientProfessional>>, TError, {
        data: BodyType<CreatePatientProfessional>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof assignPatientProfessional>>, TError, {
    data: BodyType<CreatePatientProfessional>;
}, TContext>;
/**
 * @summary Remove a patient-professional assignment
 */
export declare const getRemovePatientProfessionalUrl: (id: number) => string;
export declare const removePatientProfessional: (id: number, options?: RequestInit) => Promise<void>;
export declare const getRemovePatientProfessionalMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof removePatientProfessional>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof removePatientProfessional>>, TError, {
    id: number;
}, TContext>;
export type RemovePatientProfessionalMutationResult = NonNullable<Awaited<ReturnType<typeof removePatientProfessional>>>;
export type RemovePatientProfessionalMutationError = ErrorType<unknown>;
/**
 * @summary Remove a patient-professional assignment
 */
export declare const useRemovePatientProfessional: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof removePatientProfessional>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof removePatientProfessional>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary List all professionals
 */
export declare const getListProfessionalsUrl: () => string;
export declare const listProfessionals: (options?: RequestInit) => Promise<Professional[]>;
export declare const getListProfessionalsQueryKey: () => readonly ["/api/professionals"];
export declare const getListProfessionalsQueryOptions: <TData = Awaited<ReturnType<typeof listProfessionals>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listProfessionals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listProfessionals>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListProfessionalsQueryResult = NonNullable<Awaited<ReturnType<typeof listProfessionals>>>;
export type ListProfessionalsQueryError = ErrorType<unknown>;
/**
 * @summary List all professionals
 */
export declare function useListProfessionals<TData = Awaited<ReturnType<typeof listProfessionals>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listProfessionals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a professional
 */
export declare const getCreateProfessionalUrl: () => string;
export declare const createProfessional: (createProfessional: CreateProfessional, options?: RequestInit) => Promise<Professional>;
export declare const getCreateProfessionalMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createProfessional>>, TError, {
        data: BodyType<CreateProfessional>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createProfessional>>, TError, {
    data: BodyType<CreateProfessional>;
}, TContext>;
export type CreateProfessionalMutationResult = NonNullable<Awaited<ReturnType<typeof createProfessional>>>;
export type CreateProfessionalMutationBody = BodyType<CreateProfessional>;
export type CreateProfessionalMutationError = ErrorType<unknown>;
/**
 * @summary Create a professional
 */
export declare const useCreateProfessional: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createProfessional>>, TError, {
        data: BodyType<CreateProfessional>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createProfessional>>, TError, {
    data: BodyType<CreateProfessional>;
}, TContext>;
/**
 * @summary List all library goals
 */
export declare const getListGoalLibraryUrl: () => string;
export declare const listGoalLibrary: (options?: RequestInit) => Promise<GoalLibraryItem[]>;
export declare const getListGoalLibraryQueryKey: () => readonly ["/api/goal-library"];
export declare const getListGoalLibraryQueryOptions: <TData = Awaited<ReturnType<typeof listGoalLibrary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listGoalLibrary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listGoalLibrary>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListGoalLibraryQueryResult = NonNullable<Awaited<ReturnType<typeof listGoalLibrary>>>;
export type ListGoalLibraryQueryError = ErrorType<unknown>;
/**
 * @summary List all library goals
 */
export declare function useListGoalLibrary<TData = Awaited<ReturnType<typeof listGoalLibrary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listGoalLibrary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Assign a library goal to a patient
 */
export declare const getAssignGoalToPatientUrl: (id: number) => string;
export declare const assignGoalToPatient: (id: number, assignGoalBody: AssignGoalBody, options?: RequestInit) => Promise<Goal>;
export declare const getAssignGoalToPatientMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof assignGoalToPatient>>, TError, {
        id: number;
        data: BodyType<AssignGoalBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof assignGoalToPatient>>, TError, {
    id: number;
    data: BodyType<AssignGoalBody>;
}, TContext>;
export type AssignGoalToPatientMutationResult = NonNullable<Awaited<ReturnType<typeof assignGoalToPatient>>>;
export type AssignGoalToPatientMutationBody = BodyType<AssignGoalBody>;
export type AssignGoalToPatientMutationError = ErrorType<unknown>;
/**
 * @summary Assign a library goal to a patient
 */
export declare const useAssignGoalToPatient: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof assignGoalToPatient>>, TError, {
        id: number;
        data: BodyType<AssignGoalBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof assignGoalToPatient>>, TError, {
    id: number;
    data: BodyType<AssignGoalBody>;
}, TContext>;
/**
 * @summary Get dashboard statistics
 */
export declare const getGetDashboardStatsUrl: () => string;
export declare const getDashboardStats: (options?: RequestInit) => Promise<DashboardStats>;
export declare const getGetDashboardStatsQueryKey: () => readonly ["/api/dashboard/stats"];
export declare const getGetDashboardStatsQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardStats>>>;
export type GetDashboardStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get dashboard statistics
 */
export declare function useGetDashboardStats<TData = Awaited<ReturnType<typeof getDashboardStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map