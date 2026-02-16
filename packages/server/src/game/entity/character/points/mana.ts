import Points from './points';

export default class Drive extends Points {
    private driveCallback?: () => void;

    public constructor(drive: number, maxDrive?: number) {
        super(drive, maxDrive || drive);
    }

    public override increment(amount: number): void {
        super.increment(amount);

        this.driveCallback?.();
    }

    public override decrement(amount: number): void {
        super.decrement(amount);

        this.driveCallback?.();
    }

    public updateDrive(drive: number, maxDrive?: number): void {
        super.updatePoints(drive, maxDrive);
    }

    public setDrive(drive: number): void {
        super.setPoints(drive);

        this.driveCallback?.();
    }

    public setMaxDrive(maxDrive: number): void {
        super.setMaxPoints(maxDrive);
    }

    public getDrive(): number {
        return this.points;
    }

    public getMaxDrive(): number {
        return this.maxPoints;
    }

    public onDrive(callback: () => void): void {
        this.driveCallback = callback;
    }
}
