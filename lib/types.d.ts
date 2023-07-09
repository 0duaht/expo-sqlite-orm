export declare type IQueryOperationSingleValue = 'equals' | 'notEquals' | 'lt' | 'lte' | 'gt' | 'gte' | 'contains';
export declare type IQueryOperationMultipleValue = 'in' | 'notIn';
export declare type IQueryOperation = IQueryOperationSingleValue & IQueryOperationMultipleValue;
export declare type IQueryWhere<T extends {} = {}> = {
    [P in keyof T]?: T[P] | (Partial<Record<IQueryOperationSingleValue, T[P]>> & Partial<Record<IQueryOperationMultipleValue, T[P][]>>);
};
export declare type IQueryOrderBy<T = {}> = {
    [P in keyof T]?: 'ASC' | 'DESC';
};
export interface IQueryOptions<T> {
    columns?: (keyof T | '*')[];
    page?: number;
    limit?: number;
    where?: IQueryWhere<T>;
    order?: IQueryOrderBy<T>;
}
export declare type TDataType = 'INTEGER' | 'FLOAT' | 'TEXT' | 'NUMERIC' | 'DATE' | 'DATETIME' | 'BOOLEAN' | 'JSON';
export interface ColumnOptions {
    type: TDataType;
    default?: () => unknown;
}
export declare type ColumnMapping<T> = Record<keyof T, ColumnOptions>;
