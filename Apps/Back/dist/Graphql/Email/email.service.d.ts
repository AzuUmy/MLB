import { sendPulseService } from 'src/services/sendpulse/send-pulse.service';
export declare class EmailService {
    private readonly sendPulseService;
    constructor(sendPulseService: sendPulseService);
    sendCodeEmail(to: string, code: number): Promise<string>;
}
