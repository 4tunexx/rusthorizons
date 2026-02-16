import Packet from '../packet';

import { Packets } from '@rusthorizons/common/network';

export interface PointsPacketData {
    instance: string;
    vitality?: number;
    maxVitality?: number;
    drive?: number;
    maxDrive?: number;
}

export type PointsPacketCallback = (info: PointsPacketData) => void;

export default class PointsPacket extends Packet {
    public constructor(data: PointsPacketData) {
        super(Packets.Points, undefined, data);
    }
}
