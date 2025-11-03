import { MlbServiceApi } from 'src/integration/mlb.service.api';
export declare class MlbSchedulerService {
    private readonly mlbServiceApi;
    constructor(mlbServiceApi: MlbServiceApi);
    handleDailyScheduleFetch(): Promise<void>;
}
