/// <reference types="jest" />
export declare const executeBulkSql: jest.Mock<Promise<any>, [p: any]>;
export declare const executeSql: jest.Mock<Promise<any>, [p: any]>;
export declare const createTable: jest.Mock<Promise<any>, [p: any]>;
export declare const dropTable: jest.Mock<Promise<any>, [p: any]>;
export declare const insert: jest.Mock<Promise<any>, [p: any]>;
export declare const update: jest.Mock<Promise<{}>, []>;
export declare const destroy: jest.Mock<Promise<boolean>, []>;
export declare const destroyAll: jest.Mock<Promise<boolean>, []>;
export declare const find: jest.Mock<Promise<{
    id: any;
}>, [id: any]>;
export declare const findBy: jest.Mock<Promise<{
    id: any;
    numero: any;
}>, [any]>;
export declare const query: jest.Mock<Promise<{
    id: number;
}[]>, [any]>;
export declare const _sanitize: jest.Mock<any, any>;
export declare const DatabaseLayer: jest.Mock<any, any>;
