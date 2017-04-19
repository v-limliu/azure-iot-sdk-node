import { SharedAccessSignature as Base } from 'azure-iot-common';
export declare class SharedAccessSignature {
    static create(host: string, deviceId: string, key: string, expiry: string | number): Base;
    static parse(source: string): Base;
}
