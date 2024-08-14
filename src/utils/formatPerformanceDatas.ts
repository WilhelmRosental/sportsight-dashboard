import { UserPerformance } from "../types";

export const formatPerformances = (performance: UserPerformance): UserPerformance => {
    console.log("PERFORMANCE", performance)
    const newPerformance = performance.data.map((data) => {
        console.log("DATA PERFORMANCE", data.kind)
        data.kind = performance.kind[data.kind]
        return data
    })
    return { ...performance, data: newPerformance }
}