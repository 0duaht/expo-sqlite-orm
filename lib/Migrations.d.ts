import { Repository } from './Repository';
declare type TStatementName = `${number}_${string}`;
interface IMigration {
    name: TStatementName;
}
export declare const sql: (s: TemplateStringsArray, ...args: any[]) => string;
export declare type IStatement = Record<TStatementName, string>;
export declare class Migrations {
    private database;
    private statements;
    readonly repository: Repository<IMigration>;
    constructor(databaseName: string, statements: IStatement);
    migrate(): Promise<unknown>;
    hasPendingMigrations(): Promise<boolean>;
    reset(): Promise<void>;
    private setupMigrationsTable;
    private getExecutedMigrationNames;
    private getPendingStatements;
    private statementsExecutionAdapter;
}
export {};
