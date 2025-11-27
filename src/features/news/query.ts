import { queryOptions } from "@tanstack/react-query"
import { createServerFn } from "@tanstack/react-start";
import api from "@/lib/axios";

export async function getArticles(
    params?: any
) {
    // Support both old and new parameter formats for backward compatibility
    const isNewFormat = params && "pagination.page" in params;

    let queryParams: Record<string, string> = {};

    if (isNewFormat) {
        const newParams = params;
        queryParams = {
            "pagination.page": String(newParams["pagination.page"] ?? 1),
            "pagination.size": String(newParams["pagination.size"] ?? 10),
        };

        if (newParams["filter.search"]) {
            queryParams["filter.search"] = newParams["filter.search"];
        }
        if (newParams["filter.categoryId"]) {
            queryParams["filter.categoryId"] = newParams["filter.categoryId"];
        }
        if (newParams["filter.type"]) {
            queryParams["filter.type"] = newParams["filter.type"];
        }
        if (newParams["filter.isActive"] !== undefined) {
            queryParams["filter.isActive"] = String(newParams["filter.isActive"]);
        }
        if (newParams["orderBy.createdAt"]) {
            queryParams["orderBy.createdAt"] = newParams["orderBy.createdAt"];
        }
    } else {
        // Old format for backward compatibility
        const oldParams = params;
        queryParams = {
            "pagination.page": String(oldParams?.page ?? 1),
            "pagination.size": String(oldParams?.pageSize ?? 10),
        };

        if (oldParams?.sort) {
            queryParams["orderBy.createdAt"] = oldParams.sort;
        }
    }

    const searchParams = new URLSearchParams(queryParams);
    const { data } = await api.get(`/articles?${searchParams.toString()}`);
    return data;
}

const serverFn = createServerFn({method: 'GET'}).handler(getArticles);

export const getAllNewsQueryOptions = (params: any) => {
    return queryOptions(
        {
            queryKey: ["articles", params],
            queryFn: () => serverFn(params),
            staleTime: 1000 * 60 * 5, // 5 minutes
        }
    )
}