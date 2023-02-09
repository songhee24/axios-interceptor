import AxiosInstance from "../config/axiosInstance";

export const getAllBranches = async () => {
    return AxiosInstance.get('api/branches')
}
